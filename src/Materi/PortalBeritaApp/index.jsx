import React from "react";
import axios from "axios";
import "./index.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchFormApp from "./Komponen/SearchFormApp";

export default class PortalBeritaApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: [],
      term: "top-headlines",
      isLoading: true,
    };
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const apiKey = "8ea6cb6383db4742944e6184438e9751";
    const res = await axios.get(`https://newsapi.org/v2/everything?q=${this.state.term}&apiKey=${apiKey}`);
    const { data } = res;
    this.setState({
      article: data.articles,
      isLoading: false,
    });
  }

  render() {
    return (
      <>
        <div className="showcase">
          <div className="overlay px-5">
            <h1 className="text-4xl font-bold text-white text-center mb-4 capitalize lg:text-6xl">Viewing articles about {this.state.term}</h1>
            <SearchFormApp searchText={(text) => this.setState({ term: text })} />
          </div>
        </div>

        {this.state.article.map((data, id) => {
          const { title, url, publishedAt, urlToImage, content } = data;
          const date = publishedAt.split("T");
          const dateHeadline = date[0];

          return (
            <article key={id}>
              <Card style={{ width: "20rem", padding: "5px 10px", margin: "10px 10px" }} className="carditem">
                <Card.Img variant="top" src={urlToImage} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{content}</Card.Text>
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
      </>
    );
  }
}
