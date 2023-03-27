import Head from "next/head";
import Link from "next/link";

export async function getStaticProps() {
  const TEXT_API_URL = "https://640c99cb94ce1239b0b138d4.mockapi.io/text";
  const text = await fetch(TEXT_API_URL)
    .then((response) => {
      return response.json();
    })

  return {
    props: {
      text,
    },
  };
}

export default function Secondary({ text }) {
  return (
    <>
      <Head>
        <title>Secondary</title>
      </Head>
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
