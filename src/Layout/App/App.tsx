

const App: React.FC = () => {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="h-screen bg-gradient-to-r from-yellow-100 to-pink-100 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl font-extrabold mb-4 tracking-wide">
          LuxeWear
        </h1>
        <p className="text-lg font-medium mb-6 max-w-lg">
          Elevate your wardrobe with timeless fashion.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
          Shop Now
        </button>
      </section>

      {/* Featured Categories */}
      <section className="py-16 px-8">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Explore Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Men", "Women", "Accessories"].map((category) => (
            <div
              key={category}
              className="rounded-xl bg-gray-100 shadow-md hover:shadow-xl p-6 text-center transition"
            >
              <h3 className="text-xl font-bold mb-4">{category}</h3>
              <button className="text-sm text-white bg-black px-4 py-2 rounded-full">
                Browse
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-50 py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Stay in the Loop</h2>
        <p className="text-gray-600 mb-6">Get exclusive offers & updates</p>
        <form className="flex justify-center gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="rounded-full px-4 py-2 border border-gray-300 w-full"
          />
          <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
};

export default App
