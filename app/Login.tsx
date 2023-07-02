import React from "react";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=1a911f54a5c746d98e1e41d487bd6fc0&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

export default function Login() {
  return (
    <div
      style={{
        backgroundColor: "#D4FF26",
        padding: "2rem",
        borderRadius: "10px",
        color: "#1F1F1F",
        display: "flex",
        justifyContent: "center",
      }}>
      <a className="btn btn-success btn-lg" href={AUTH_URL}>
        Login With Spotify
      </a>
    </div>
  );
}
