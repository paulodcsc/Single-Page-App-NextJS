import Link from "next/link";
import { useEffect, useState } from "react";

export async function getStaticProps() {
  const TEXT_API_URL = "https://640c99cb94ce1239b0b138d4.mockapi.io/text";
  const text = await fetch(TEXT_API_URL)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
      return response;
    });

  return {
    props: {
      text,
    },
  };
}

export default function Secondary({ text }) {
  //const [text, setText] = useState([]);
  //useEffect(() => {
  //}, []);

  return (
    <>
      <h1>TEXTOS</h1>
      <Link href="/">Voltar</Link>
      <ul>
        {text.map(({ title, paragraph, id }) => (
          <li key={id}>
            <h2>{title}</h2>
            <p>{paragraph}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
