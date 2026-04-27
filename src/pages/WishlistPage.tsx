import type { Product } from '../context/FavoritesContext';
import { useFavorites } from '@/hooks/useFavorites';
import ProductCard from '../components/ProductCard';

const WishlistPage = () => {
  const { favorites } = useFavorites();

  return (
    <div className="container mx-auto px-2 py-6 sm:px-4 sm:py-8">
      <h1 className="mb-6 text-2xl font-bold text-[#1F1F1F] sm:mb-8 sm:text-4xl">Список желаний</h1>
      {favorites.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-xl text-gray-500">Ma'lumot topilmadi</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {favorites.map((product: Product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              img={product.img}
              currentPrice={product.currentPrice}
              originalPrice={product.originalPrice}
              rentalText={product.rentalText}
              iconImgOne={product.iconImgOne}
              iconImgTwo={product.iconImgTwo}
              iconImgThree={product.iconImgThree}
              iconLabels={product.iconLabels}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;