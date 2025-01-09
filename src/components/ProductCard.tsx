import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number; // Added optional originalPrice field
  image: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-110">
      <img src={product.image} alt={product.name} className="w-full h-80 object-cover rounded mb-4" />
      
      <h3 className="text-gray-900 text-lg font-semibold">{product.name}</h3>
      
      <div className="flex items-center space-x-2 mt-2">
      <span className="text-black">Price:</span>
        <span className="text-lg font-bold text-gray-900">${product.price}</span>
        {product.originalPrice && (
          <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
        )}
      </div>
      
      <Link href={`/products/${product.id}`}>
        <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
