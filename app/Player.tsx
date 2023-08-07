"use client";
import SpotifyPlayer from "react-spotify-web-playback";

type props = {
  accessToken: string | undefined;
  playList: string[];
};

export default function Player({ accessToken, playList }: props) {
  if (!accessToken) return null;

  return (
    <SpotifyPlayer
      token={accessToken}
      showSaveIcon
      callback={(state) => {
        console.log(state.progressMs);
        console.log(state.track.durationMs);
      }}
      // 10 sek før sangen er ferdig låser du neste sang
      getPlayer={(e) => console.log(e.resume)}
      play={true}
      uris={playList}
    />
  );
}
