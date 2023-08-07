import React from "react";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=1a911f54a5c746d98e1e41d487bd6fc0&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

export default function Login() {
  // Example login code
  // http://localhost:3000/?code=AQDrdedv_uaCmiztmkacPjHaC7gW_eGhO0HguqxNHuMnVC-GXIzYQlkXaXSY-y1hiFmj11kbJYaejGFUubkK_AbMFCfDVceaKaAERIMWx4sLxUWVx3V8Ut3tXVhUef_kp8dl9x7pKubmVmJDcQnCeglJQ6J1XdUiBO3MRMQSNX2w2BDkwZ80jtFesRmeV1xzBVUv4GS66lqeoH__8UPYtMkT2QGqb-GYToOPu-BjFa4pRtAV1_yKdQGEZ3pQ-_PzZRNScKzdmx0MxO0Q71K0fIyl4Hh1lDC3vNLZcGP3Hjy-TrIYoWZOsDoyIDW1lia2Cx1q_4Y_vyz29LLIubGAAM1NSr_HQg

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
