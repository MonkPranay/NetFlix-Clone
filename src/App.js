import React from "react";
import Row from "./Components/Row";
import request from "./request";
import Banner from "./Components/Banner";
import "./App.css";
import Nav from "./Components/Nav";

export default function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINIAL"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="TRENDING" fetchUrl={request.fetchTopRate} />
      <Row title="TOPRATED" fetchUrl={request.fetchTrending} />
      <Row title="COMEDY" fetchUrl={request.fetchComedyMovies} />
      <Row title="HORRO" fetchUrl={request.fetchHorroMovies} />
      <Row title="ROMANCE MOVIES" fetchUrl={request.fetchRomanceMovies} />
      <Row title="DOCUMENTRIES" fetchUrl={request.fetchDocumentariesMovies} />
    </div>
  );
}
