"use client";
import { useState, useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";

type props = {
  accessToken: string | undefined;
  playList: string[];
};

export default function Player({ accessToken, playList }: props) {
  const [play, setPlay] = useState(false);

  useEffect(() => setPlay(true), playList);

  if (!accessToken) return null;
  return (
    <SpotifyPlayer
      token={accessToken}
      showSaveIcon
      callback={(state) => {
        if (!state.isPlaying && state.nextTracks.length > 0) {
          playList.pop;
          state.nextTracks[0].uri;
        }
      }}
      play={play}
      uris={playList.length > 0 ? playList : []}
    />
  );
}
