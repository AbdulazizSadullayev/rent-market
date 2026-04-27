import { createContext, useState, useCallback, type ReactNode } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { STORAGE_KEYS } from '@/utils/constants';

export interface CartItem {
  id: number;
  title: string;
  img: string;
  currentPrice: string;
  originalPrice: string;
  rentalText: string;
  rentalPeriod?: 'week' | 'month';
  iconImgOne: string;
  iconImgTwo: string;
  iconImgThree: string;
  iconLabels: string[];
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (
    product: Omit<CartItem, 'quantity'>,
    quantity?: number
  ) => void;
  removeFromCart: (productId: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
  clearCart: () => void;
  isInCart: (productId: number) => boolean;
  selectAll: boolean;
  toggleSelectAll: () => void;
  selectedItems: number[];
  toggleItemSelection: (productId: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  // 1. useLocalStorage handles the initial load and the persistence automatically.
  // No need for manual useEffect with localStorage.getItem/setItem.
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(STORAGE_KEYS.CART_ITEMS, []);
  
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const addToCart = useCallback((
    product: Omit<CartItem, 'quantity'>,
    quantity: number = 1
  ) => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (item) => item.id === product.id && item.rentalPeriod === product.rentalPeriod
      );

      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id && item.rentalPeriod === product.rentalPeriod
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  }, [setCartItems]);

  const removeFromCart = useCallback((productId: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
    setSelectedItems((prev) => prev.filter((id) => id !== productId));
  }, [setCartItems]);

  const increaseQuantity = useCallback((productId: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }, [setCartItems]);

  const decreaseQuantity = useCallback((productId: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }, [setCartItems]);

  const getTotalPrice = useCallback(() => {
    return cartItems.reduce((total, item) => {
      // Robust price parsing: remove spaces and non-numeric characters except decimals
      const priceString = item.currentPrice.replace(/\s/g, '').replace(/[^\d.]/g, '');
      const price = parseFloat(priceString) || 0;
      return total + (price * item.quantity);
    }, 0);
  }, [cartItems]);

  const getTotalItems = useCallback(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  const clearCart = useCallback(() => {
    setCartItems([]);
    setSelectedItems([]);
    setSelectAll(false);
  }, [setCartItems]);

  const isInCart = useCallback((productId: number) => {
    return cartItems.some((item) => item.id === productId);
  }, [cartItems]);

  const toggleSelectAll = useCallback(() => {
    if (selectAll) {
      setSelectedItems([]);
      setSelectAll(false);
    } else {
      setSelectedItems(cartItems.map((item) => item.id));
      setSelectAll(true);
    }
  }, [selectAll, cartItems]);

  const toggleItemSelection = useCallback((productId: number) => {
    setSelectedItems((prev) => {
      const isSelected = prev.includes(productId);
      const newSelected = isSelected
        ? prev.filter((id) => id !== productId)
        : [...prev, productId];

      setSelectAll(newSelected.length === cartItems.length && cartItems.length > 0);
      return newSelected;
    });
  }, [cartItems.length]);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      increaseQuantity,
      decreaseQuantity,
      getTotalPrice,
      getTotalItems,
      clearCart,
      isInCart,
      selectAll,
      toggleSelectAll,
      selectedItems,
      toggleItemSelection
    }}>
      {children}
    </CartContext.Provider>
  );
};
export { CartContext };