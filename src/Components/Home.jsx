import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { moviesContext } from './Context/Store';

const Home = () => {

  let { trendingMovies, trendingTvShow, trendingPeople } = useContext(moviesContext)

  return (
    <>
      {trendingMovies ? <div className="row">
        <div className="col-md-4 d-flex align-items-center">
          <div >
            <div className="height w-25 mb-3"></div>
            <h2 className='h3'> Trending <br /> Movies <br /> To Watch Right Now</h2>
            <p className='text-muted'>Top Trending Movies Today</p>
            <div className="height mt-4"></div>
          </div>
        </div>
        {trendingMovies.map((movie, i) => <div className="col-md-2" key={i}>
          <div className="movie">
            <Link to={`/moviedetails/${movie.id}`}>
              <img className='w-100' src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt={movie.title || movie.name} />
              <h2 className='h6 my-2'>{movie.title}</h2>
            </Link>

          </div>
        </div>)}
      </div> : <div className='vh-100 d-flex justify-content-center align-items-center'> <i className='fas fa-spinner fa-spin fa-3x'></i></div>}

      {trendingTvShow ? <div className="row py-5">
        <div className="col-md-4 d-flex align-items-center">
          <div >
            <div className="height w-25 mb-4"></div>
            <h2 className='h3'> Trending <br /> Tv <br /> To Watch Right Now</h2>
            <p className='text-muted'>Top Trending Tv Today</p>
            <div className="height mt-4"></div>
          </div>
        </div>
        {trendingTvShow.map((tv, i) => <div className="col-md-2" key={i}>
          <img className='w-100' src={'https://image.tmdb.org/t/p/w500' + tv.poster_path} alt={tv.title || tv.name} />
          <h2 className='h6 my-2'>{tv.name}</h2>
        </div>)}
      </div> : <div className='vh-100 d-flex justify-content-center align-items-center'> <i className='fas fa-spinner fa-spin fa-3x'></i></div>}

      {trendingPeople ? <div className="row">
        <div className="col-md-4 d-flex align-items-center">
          <div >
            <div className="height w-25 mb-4"></div>
            <h2 className='h3'> Trending <br /> People <br /> To Watch Right Now</h2>
            <p className='text-muted'>Top Trending People Today</p>
            <div className="height mt-4"></div>
          </div>
        </div>
        {trendingPeople.slice(0, 10).map((person, i) => <div className="col-md-2" key={i}>
          <img className='w-100' src={'https://image.tmdb.org/t/p/w500' + person.profile_path} alt={person.name} />
          <h2 className='h6 my-2'>{person.name}</h2>
        </div>)}
      </div> : <div className='vh-100 d-flex justify-content-center align-items-center'> <i className='fas fa-spinner fa-spin fa-3x'></i></div>}

    </>
  );
}

export default Home;


