import logo from './logo.svg';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      {/*Nav*/}
      <Nav/>
      <Banner/>
      
      <Row title = "NETFLIX ORIGINALS" 
      fetchUrl ={requests.fetchNetflixOriginals}
      isLargeRow />

      <Row title = "Now Trending" fetchUrl ={requests.fetchTrending} />
      <Row title = "Top Rated movies" fetchUrl = {requests.fetchTopRatedMovies}/>
      <Row title = "Top Rated series" fetchUrl = {requests.fetchTopRatedSeries}/>
      <Row title = "Top Action Movies" fetchUrl = {requests.fetchTopActionMovies}/>
      <Row title = "Top Comedy Movies" fetchUrl = {requests.fetchTopComedyMovies}/>
      <Row title = "Top Horror Movies" fetchUrl = {requests.fetchTopHorrorMovies}/>
      <Row title = "Top Romantic Movies" fetchUrl = {requests.fetchTopRomanticMovies}/>
      <Row title = "Top Documentaries" fetchUrl = {requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
