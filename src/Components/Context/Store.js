import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios';

export let moviesContext = createContext(0);

export default function MoviesContextProvider(props) {

  // Making Hooks To Put Results On It
  let [trendingMovies, setTrendingMovies] = useState([]);
  let [trendingTvShow, setTrendingTvShow] = useState([]);
  let [trendingPeople, setTrendingPeople] = useState([]);

  // Making a Function To Get Data Results From API, Gives This Function 2 Params To Get From API Dynamic Data
  async function getTrending(trending, callback) {
    let { data } = await axios.get(`https://api.themoviedb.org/3/trending/${trending}/day?api_key=c700cd1e7366631f54e647410de860c0`)
    callback(data.results.slice(0, 16)) // Slice Results To Get 16 Results Only From API
  }

  // Making useEffect Hook To Call API
  useEffect(() => {

    // Component didMount => Best Place To Call Your API
    getTrending('movie', setTrendingMovies) // movie Keyword Will Replace trending Param On API Link, setTrendingMovies Will Replace callback Param
    getTrending('tv', setTrendingTvShow) // tv Keyword Will Replace trending Param On API Link, setTrendingTvShow Will Replace callback Param
    getTrending('person', setTrendingPeople) // person Keyword Will Replace trending Param On API Link, setTrendingPeople Will Replace callback Param
  }, [])
  return <moviesContext.Provider value={{ trendingMovies, trendingTvShow, trendingPeople }}>
    {props.children}
  </moviesContext.Provider>

}