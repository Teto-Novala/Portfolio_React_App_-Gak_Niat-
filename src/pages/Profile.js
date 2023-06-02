import { useEffect } from "react";

export default function Profile() {
  useEffect(function () {
    document.title = "Profile";
  }, []);
  return (
    <>
      <section className="profile">
        <h1>Profile Page</h1>
        <p>
          Halo Namaku Teto Novala, dan masih kuliah belum lulus baru masuk
          soalnya
        </p>
        <p>apa???, kuliah dimana???, kepo lu</p>
      </section>
    </>
  );
}
