import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    document.title = "Blog";
    async function getArticles() {
      const request = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      const response = await request.json();

      setArticles(response);
      setLoading(false);
    }
    getArticles();
  }, []);

  return (
    <>
      <section className="blog">
        <div className="blog-paragraf">
          <h1>Blog Page</h1>
          <p>Ini adalah hasil tulisan-tulisan aku (Tapi bo'ong):</p>
        </div>
        {loading && <i>Lagi Loading ...</i>}
        {!loading && (
          <div className="blog-list">
            {articles.map(function (article) {
              return (
                <Link key={article.id} to={`/blog/${article.id}`}>
                  <article key={article.id} className="blog-item">
                    <h2>{article.title}</h2>
                    <div className="div-img">
                      <img src={article.imageUrl} alt={article.title} />
                    </div>
                    <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
                  </article>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
}
