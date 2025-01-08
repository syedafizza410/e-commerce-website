import { fetchProducts } from '../api/products/route';
import ProductCard from '../../components/ProductCard';

const ProductsPage = async () => {
  const products = await fetchProducts();

  return (
    <div className="flex flex-col items-center p-8 bg-black text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
