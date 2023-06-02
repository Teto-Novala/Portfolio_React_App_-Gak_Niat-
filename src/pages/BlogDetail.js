import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BlogDetail() {
  const params = useParams();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(
    function () {
      async function getArticle() {
        const request = await fetch(
          `https://api.spaceflightnewsapi.net/v3/articles/${params.id}`
        );

        if (!request.ok) {
          return setNotFound(true);
        }

        const response = await request.json();

        document.title = response.title;

        setArticle(response);
        setLoading(false);
      }
      getArticle();
    },
    [params]
  );

  if (notFound) {
    return <h1>Artikel tidak ditemukan wkwkwkwk</h1>;
  }

  return (
    <>
      <section>
        {loading ? (
          <i>Loading Article ...</i>
        ) : (
          <article className="blog-detail">
            <h1>{article.title}</h1>
            <time style={{ display: "block" }}>
              {new Date(article.publishedAt).toLocaleDateString()}
            </time>
            <img src={article.imageUrl} alt={article.title} />
            <p>{article.summary}</p>
            <p>
              sumber :{" "}
              <a href={article.url} target="_blanck">
                {article.newsSite}
              </a>
            </p>
          </article>
        )}
      </section>
    </>
  );
}
