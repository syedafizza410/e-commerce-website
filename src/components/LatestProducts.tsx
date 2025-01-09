// components/LatestProducts.tsx
import ProductCard from './ProductCard';

const LatestProducts = () => {
  // Dummy Data for Latest Products
  const dummyProducts = [
    { id: 7, name: 'Wondrous SV-9352-M', price: 290, image: '/product7.webp' },
    { id: 5, name: 'Dragon SV-9348-M', price: 250, image: '/product5.webp' },
    { id: 3, name: 'VANESIO SV-9304-M', price: 200, image: '/product3.webp' },
  ];

  return (
    <section className="mt-16 w-full">
      <h2 className="text-4xl font-bold mb-8 text-center">Latest Watches</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto mt-10">
        {dummyProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default LatestProducts;
