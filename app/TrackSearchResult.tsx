import { isPlainObject } from "@mui/utils";
import React from "react";
import { Track } from "./Dashboard";

type props = {
  track: Track;
  chooseTrack: (arg: Track) => void;
};

export default function TrackSearchResult({ track, chooseTrack }: props) {
  function handlePlay() {
    chooseTrack(track);
  }

  if (track === undefined || track === null) {
    return <div>nothing to display</div>;
  }

  return (
    <div style={{ cursor: "pointer" }} onClick={handlePlay}>
      <img src={track.albumUrl} style={{ height: "64px", width: "64px" }} />
      <div>
        <div style={{ cursor: "pointer", color: "black" }}>{track.title}</div>
        <div style={{ cursor: "pointer", color: "black" }}>{track.artist}</div>
      </div>
    </div>
  );
}
