import { createContext, useState } from "react";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (pet) => {
    if (!favorites.find((item) => item.id === pet.id)) {
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