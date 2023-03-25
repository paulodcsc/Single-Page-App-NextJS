import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <h1>PÁGINA INICIAL</h1>
      <Link href="/secondary">Outra página</Link>
    </>
  );
}
