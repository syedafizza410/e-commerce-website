import Link from "next/link";

const DiscountProducts = () => {
  const saleProducts = [
    { id: 2, name: 'Spectrum SV-9306-M', price: 130, originalPrice: 150, image: '/product2.webp' },
    { id: 4, name: 'Bloom SV-7029-M', price: 230, originalPrice: 260, image: '/product4.webp' },
    { id: 6, name: 'Captain Cook SV-7521-M', price: 240, originalPrice: 280, image: '/product6.webp' },
    { id: 8, name: 'ROLEX GMT-MASTER II', price: 300, originalPrice: 350, image: '/product8.png' },
  ];

  return (
    <section className="mt-16 w-full">
      <h2 className="text-4xl font-bold mb-8 text-center">Discounted Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto mt-20">
        {saleProducts.map((product) => (
          <div key={product.id} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-110">
            <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-black">{product.name}</h3>
            <div className="flex items-center space-x-2 mb-4">
               <span className="text-black">Price:</span>
              <span className="text-lg font-bold text-red-700">${product.price}</span>
              <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
            </div>
            <Link href={`/products/${product.id}`}>
        <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700">
          View Details
        </button>
      </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiscountProducts;
