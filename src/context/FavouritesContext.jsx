import { createContext, useState } from "react";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {

  //stores the favorite pets in an array
  const [favorites, setFavorites] = useState([]);

  //function for adding a pet to favourites
  const addFavorite = (pet) => {

    //Check if the pet is not already in favourites
    if (!favorites.find((item) => item.id === pet.id)) {
      //keep the old favourites and add the new pet
      setFavorites([...favorites, pet]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((pet) => pet.id !== id));
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}