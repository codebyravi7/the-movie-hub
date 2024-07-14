import React from "react";
import Row from "./Row";
import requests from "./requests";
import "./App.css";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Footer from './Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row title="ORIGINALS" fetchUrl={requests.fetchOriginals} isLargeRow={true} />
      <Row title="TRENDING" fetchUrl={requests.fetchTrending} />
      <Row title="TOP-RATED" fetchUrl={requests.fetchTopRated} />
      <Row title="ACTION" fetchUrl={requests.fetchActionMovies} />
      <Row title="COMEDY" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HORROR" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="ROMANTIC" fetchUrl={requests.fetchRomanticMovies} />
      <Row title="DOCUMENTARY" fetchUrl={requests.fetchDocumentaries} />
      <Footer />
    </div>
  );
}

export default App;
