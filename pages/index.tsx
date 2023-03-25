import Link from "next/link";
import Footer from "../src/components/patterns/Footer";

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
      <Footer />
    </>
  );
}
