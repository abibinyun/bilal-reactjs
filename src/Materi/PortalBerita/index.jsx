import React, { useState, useEffect } from "react";
import "./index.css";
import SearchForm from "./Komponen/SearchForm";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

const AppPortal = () => {
  const [articles, setArticles] = useState([]);
  const [term, setTerm] = useState("top-headlines");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const apiKey = "8ea6cb6383db4742944e6184438e9751";
    const fetchArticles = async () => {
      try {
        const res = await fetch(`https://newsapi.org/v2/everything?q=${term}&apiKey=${apiKey}`);
        const articles = await res.json();
        console.log(articles);
        setArticles(articles.articles);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchArticles();
  }, [term]);

  return (
    <>
      <div className="showcase">
        <div className="overlay px-5">
          <h1 className="text-4xl font-bold text-white text-center mb-4 capitalize lg:text-6xl">Viewing articles about {term}</h1>
          <SearchForm searchText={(text) => setTerm(text)} />
        </div>
      </div>

      {isLoading ? (
        <h1 className="text-center mt-20 font-bold text-4xl">Loading...</h1>
      ) : (
        <section className="grid grid-col-1 gap-3 px-5 pt-10 pb-20" id="card">
          {articles.map((article, id) => {
            const { title, url, publishedAt, urlToImage, content } = article;
            const date = publishedAt.split("T");
            const dateHeadline = date[0];

            return (
              <article key={id}>
                <Card style={{ width: "20rem", padding: "5px 10px" }} className="carditem">
                  <Card.Img variant="top" src={urlToImage} />
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{content}</Card.Text>
                    {/* <Card.Text>{description}</Card.Text> */}
                    <Card.Text>{dateHeadline}</Card.Text>
                    <Button variant="warning">
                      <a href={url} target="_blank" rel="noreferrer">
                        Read more
                      </a>
                    </Button>
                  </Card.Body>
                </Card>
              </article>
            );
          })}
        </section>
      )}
    </>
  );
};

export default AppPortal;
