import { createContext, useCallback, type ReactNode } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { STORAGE_KEYS } from '@/utils/constants';

export interface Product {
  id: number;
  title: string;
  img: string;
  iconImgOne: string;
  iconImgTwo: string;
  iconImgThree: string;
  currentPrice: string;
  originalPrice: string;
  rentalText: string;
  iconLabels: string[];
}

interface FavoritesContextType {
  favorites: Product[];
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (productId: number) => void;
  isFavorite: (productId: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  // useLocalStorage handles initial loading from STORAGE_KEYS.LIKED_ITEMS automatically
  const [favorites, setFavorites] = useLocalStorage<Product[]>(STORAGE_KEYS.LIKED_ITEMS, []);

  const addToFavorites = useCallback((product: Product) => {
    setFavorites((prev: Product[]) => {
      const exists = prev.some((p: Product) => p.id === product.id);
      if (!exists) {
        return [...prev, product];
      }
      return prev;
    });
  }, [setFavorites]);

  const removeFromFavorites = useCallback((productId: number) => {
    setFavorites((prev: Product[]) => prev.filter((p: Product) => p.id !== productId));
  }, [setFavorites]);

  const isFavorite = useCallback((productId: number) => {
    return favorites.some((p: Product) => p.id === productId);
  }, [favorites]);

  return (
    <FavoritesContext.Provider 
      value={{ 
        favorites, 
        addToFavorites, 
        removeFromFavorites, 
        isFavorite 
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
export { FavoritesContext };