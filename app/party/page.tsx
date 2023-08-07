"use client";
import SpotifyWebApi from "spotify-web-api-node";
import styles from "../page.module.css";

export default function Party() {
  const spotifyApi = new SpotifyWebApi({
    clientId: "1a911f54a5c746d98e1e41d487bd6fc0",
  });

  // TODO - vise en liste med todos som hostes på firebase
  // muliggjøre søk slik at de kan legge til låter
  // trenger en spotify session
  // hvordan lar jeg folk besøken denne routen uten at de må logge inn ??
  // funker det dersom jeg viser samme komponenet som appen som kjører med en session?

  const accessToken = spotifyApi.getAccessToken();

  console.log(accessToken);

  const test = [];

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Bekkify</p>
      </div>
      <div className={styles.grid}></div>
    </main>
  );
}
