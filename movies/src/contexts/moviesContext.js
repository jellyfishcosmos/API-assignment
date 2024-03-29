import React, { useState } from "react";
export const MoviesContext = React.createContext(null);
const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 

  const [playlist, setWatchlist] = useState( [] )
console.log(playlist)

  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    }
    else{
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
  };
  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
 
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const addToWatchlist = (movie) => {
    let newPlaylist = [];
    if (!playlist.includes(movie.id)){
      newPlaylist = [...playlist, movie.id];
    }
    else{
      newPlaylist = [...playlist];
    }
    setWatchlist(newPlaylist)
  };

  const removeFromPlaylist = (movie) => {
    setWatchlist( playlist.filter(
      (mId) => mId !== movie.id
    ) )
  };

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        addReview,
        playlist,
        addToWatchlist,
        removeFromPlaylist,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );


};

export default MoviesContextProvider;