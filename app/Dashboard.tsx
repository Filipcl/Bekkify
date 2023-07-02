"use client";
import { useState, useEffect, SetStateAction } from "react";
import useAuth from "./useAuth";
import Player from "./Player";
import TrackSearchResult from "./TrackSearchResult";
import SpotifyWebApi from "spotify-web-api-node";
import axios from "axios";

type props = {
  code: string;
};

export type Track = {
  artist: string;
  title: string;
  uri: string;
  albumUrl: string;
};

const spotifyApi = new SpotifyWebApi({
  clientId: "1a911f54a5c746d98e1e41d487bd6fc0",
});

export default function Dashboard({ code }: props) {
  //   const test = [
  //     "spotify:track:2YkIDPL5lGhRhomCq4S2RO",
  //     "spotify:track:1yw28y3kv8uS7ENaZkbUFt",
  //     "spotify:track:24BYTj1tb5ovZcnIbtdTYD",
  //   ];

  const accessToken = useAuth(code);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<Track[] | undefined>([]);

  const [playingTrack, setPlayingTrack] = useState<Track>();
  const [ko, setKo] = useState<any[]>([]);
  const [lyrics, setLyrics] = useState("");

  function handlePlay(track: SetStateAction<Track | undefined>) {
    if (playingTrack !== undefined) {
      setKo([...ko, track]);
      console.log(ko);
      setSearch("");
      setLyrics("");
    } else {
      chooseTrack(track);
    }
  }

  function chooseTrack(track: SetStateAction<Track | undefined>) {
    setPlayingTrack(track);
    setSearch("");
    setLyrics("");
  }

  function mapToUri(): string[] {
    if (ko.length < 0) {
      return [];
    }
    return ko.map((it) => {
      return it.uri;
    });
  }

  useEffect(() => {
    if (!playingTrack) return;
    axios
      .get("http://localhost:3001/lyrics", {
        params: {
          track: playingTrack.title,
          artist: playingTrack.artist,
        },
      })
      .then((res) => {
        setLyrics(res.data.lyrics);
      });
  }, [playingTrack]);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return;

    let cancel = false;
    spotifyApi.searchTracks(search).then((res) => {
      if (cancel) return;
      setSearchResults(
        res.body.tracks?.items.map((track) => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height! < smallest.height!) return image;
              return smallest;
            }
          );
          track.album.images[0];
          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImage.url,
          };
        })
      );
    });
    return () => (cancel = true);
  }, [search, accessToken]);

  return (
    <div style={{ height: "100vh" }}>
      <input
        type="search"
        placeholder="Search Songs/Artists"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div style={{ overflowY: "auto", backgroundColor: "white" }}>
        {searchResults != undefined &&
          searchResults.map((track: Track) => (
            <TrackSearchResult
              track={track}
              key={track.uri}
              chooseTrack={handlePlay}
            />
          ))}
        {searchResults?.length === 0 && (
          <div style={{ whiteSpace: "pre" }}>{lyrics}</div>
        )}
      </div>

      <div
        style={{ backgroundColor: "white", width: "700px", height: "500px" }}>
        {ko.length > 0 &&
          ko.map((item) => {
            return (
              <div style={{ backgroundColor: "white", width: "700px" }}>
                <img
                  src={item.albumUrl}
                  style={{ height: "64px", width: "64px" }}
                />
                <div>
                  <div style={{ color: "black" }}>{item.title}</div>
                  <div style={{ color: "black" }}>{item.artist}</div>
                </div>
              </div>
            );
          })}
      </div>

      <div style={{ width: "500px", position: "absolute", bottom: 0 }}>
        <Player accessToken={accessToken} playList={mapToUri()} />
      </div>
    </div>
  );
}
