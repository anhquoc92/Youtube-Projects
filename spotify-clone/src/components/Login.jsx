import React from "react";
import styled from "styled-components";

export default function Login() {
  const handleClick = () => {
    const clientId = "6dcd9ee75f494fa3a229e3d6f19fd4d4"; //6dcd9ee75f494fa3a229e3d6f19fd4d4
    const redirecUrl = "http://localhost:3000/";
    const apiUrl = "http://accounts.spotify.com/authorize";
    const scope = [
      "user-read-email",
      "user-read-private",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-read-playback-position",
      "user-top-read",
    ];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirecUrl}&scope=${scope.join(
      " "
    )}&response_type=token&show_daialog=true`;
  };
  return (
    <Container>
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
        alt="spotify"
      ></img>
      <button onClick={handleClick}>Connect Spotify</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #1db954;
  gap: 5rem;
  img {
    height: 20vh;
  }
  button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    border: none;
    background-color: black;
    color: white;
    font-size: 1.4rem;
  }
`;

//BQDLOyePREsmpmsU6s7jzHN3f18dDhphLttxTtvaVyy5SGOAVM3OsOqDG1_zyTZP7EleSubAFY_GeTgIFEvFB6QaMwg6or_QAKPNFS514uXh_W6cQiOYdz1vkimmpGafF2322BnMW54uSpylhSNCARjtu19dDT8FbtP6e4NSFojIlXkOM0LY39mGcSmFupK7SPQAZXo7oMYcvmr6gCkkElcygEw8YglBk3al