import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js';
import $ from "jquery"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    // const movies = [
    //   {
    //     id: 0, poster_src: "https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L._SY445_.jpg",
    //     title: "The Matrix", overview: "Neo (Keanu Reeves) believes that Morpheus (Laurence Fishburne), an elusive figure considered to be the most dangerous man alive, can answer his question -- What is the Matrix? Neo is contacted by Trinity (Carrie-Anne Moss), a beautiful stranger who leads him into an underworld where he meets Morpheus. They fight a brutal battle for their lives against a cadre of viciously intelligent secret agents. It is a truth that could cost Neo something more precious than his life."
    //   },
    //   {
    //     id: 1, poster_src: " https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg",
    //     title: "The Avengers", overview: "this is my second overview"
    //   },

    // ]
    // var movieRows = []
    // movies.forEach((movie) => {
    //   console.log(movie.title)
    //   const movieRow = <MovieRow movie={movie} />
    //   movieRows.push(movieRow)
    // })
    // this.state = { rows: movieRows }
    this.performSearch("A")

  }
  performSearch(searchTerm) {
    console.log("Perform search using movieDB");
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=b1cd3d46d2cb1a68ea7e2ef504c75536&language=en-US&page=1&include_adult=false&query=" + searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully!")
        console.log(searchResults)
        const results = searchResults.results
        var movieRows = []
        var count = 0;
        var currentColor = 0;
        results.forEach((movie) => {
          if (count % 2 === 1) {
            currentColor = 0;
          } else {
            currentColor = 1;
          }
          count++;
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          const myMovie = <MovieRow key={movie.id} movie={movie} color={currentColor} />
          movieRows.push(myMovie)
        })
        this.setState({ rows: movieRows })
      },
      error: (xhr, status, err) => {
        console.log("Failed to fetch data")
      }
    })
  }

  searchChangeHandler(event) {
    console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
  }

  render() {
    return (
      <div>

        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="web icon" width="50" src="video-player.svg" />
              </td>
              <td width="8" />
              <td>
                <h2 style={{ paddingLeft: 16 }}>Movies Search</h2>
              </td>
            </tr>
          </tbody>
        </table>

        <input style={{
          fontSize: 24,
          display: 'block',
          width: "99.7%",
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16
        }} onChange={this.searchChangeHandler.bind(this)} placeholder="Type to search..." />
        {this.state.rows}
      </div>
    );
  }
}

export default App;
