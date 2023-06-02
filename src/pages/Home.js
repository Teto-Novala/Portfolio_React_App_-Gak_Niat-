import { useEffect } from "react";

export default function Home() {
  useEffect(function () {
    document.title = "Home";
  }, []);
  return (
    <>
      <section className="home">
        <h1>Home Page</h1>
        <div className="home-content">
          <p>Halo Semua!!</p>
          <p>Selamat datang di Web React pertamaku</p>
          <p>Web ini berisi informasi seputar Profilku</p>
          <p>Salam Kenal!!!</p>
        </div>
      </section>
    </>
  );
}
