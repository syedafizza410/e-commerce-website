import Link from 'next/link';

const LoginPage = () => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-black text-white p-6">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="********"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-bold"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-gray-400 text-center mt-4">
          Forgot your password?{' '}
          <a href="#" className="text-blue-500 hover:underline">
            Reset here
          </a>
        </p>
        <p className="text-sm text-gray-400 text-center mt-2">
          Don’t have an account?{' '}
          <Link href="/signup" className="text-blue-500 hover:underline">Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
};

export default LoginPage;
