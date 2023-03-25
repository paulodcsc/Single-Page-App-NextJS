import Link from "next/link";

function Title({ children }) {
  return (
    <>
      <h1>{children}</h1>
      <style jsx>{`
        h1 {
          color: white;
        }
      `}</style>
    </>
  );
}

export default function HomePage() {
  return (
    <>
      <Title>PÁGINA INICIAL</Title>
      <Link href="/secondary">Outra página</Link>
    </>
  );
}
