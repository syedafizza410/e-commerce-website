// pages/Home.tsx
import LatestProducts from '../components/LatestProducts';
import DiscountProducts from '../components/DiscountProducts';

const Home = () => {
  return (
    <>
      <header
        className="bg-cover bg-center h-128 text-white flex items-center justify-center"
        style={{ backgroundImage: "url('/background.webp')" }}
      >
        <div className="text-center bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold px-6 py-4">
            Welcome to Timeless Watches Store
          </h1>
          <p className="text-xl mt-4">
            Time is not just measured in hours and minutes, but in moments that last forever.
            <br /> Discover the art of timeless elegance with every watch
          </p>
          <div className="mt-6">
            <a
              href="/products"
              className="inline-block bg-white text-black hover:bg-black hover:text-white text-lg font-bold py-3 px-8 rounded-xl transition duration-300"
            >
              Shop Now
            </a>
          </div>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center p-8 bg-black text-white min-h-screen">
        {/* Latest Products Section */}
        <LatestProducts />

        {/* Sale Products Section */}
        <DiscountProducts />
      </main>
    </>
  );
};

export default Home;
