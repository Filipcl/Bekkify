"use client";
import { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import SpotifyPlayer from "react-spotify-web-playback";
import useAuth from "./useAuth";

type Props = {
  code?: string;
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

export const Dashboard = ({ code }: Props) => {
  const accessToken = useAuth(code);
  const [playlist, setPlaylist] = useState<string[]>([]);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  const handleAdd = (trackUri: string) => {
    setPlaylist((prevPlaylist) => [...prevPlaylist, trackUri]);
    console.log(playlist);
  };

  const handleDelete = () => {
    setPlaylist((prevPlaylist) => prevPlaylist.slice(1));
  };

  return (
    <div style={{ height: "100vh" }}>
      <button onClick={() => handleAdd("spotify:track:1yw28y3kv8uS7ENaZkbUFt")}>
        Add Song to List
      </button>
      <button onClick={handleDelete}>Delete song from list</button>

      <div style={{ width: "500px", position: "absolute", bottom: 0 }}>
        <SpotifyPlayer
          token={accessToken!!}
          showSaveIcon
          callback={(state) => {
            console.log(state.progressMs);
            console.log(state.track.durationMs);
          }}
          getPlayer={(e) => console.log(e.resume)}
          play
          uris={playlist}
          offset={playlist.length > 0 ? 0 : undefined}
        />
      </div>
    </div>
  );
};
