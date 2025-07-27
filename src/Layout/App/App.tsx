import BrandBanner from "./BrandBanner";
import Poster from "./Poster";

const App: React.FC = () => {
  return (
    <>
      <div className="bg-white text-gray-900 font-sans">
        <BrandBanner />
        <Poster />


        {/* Collections */}
        <section className="py-16 px-8 bg-gray-100 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Menswear', 'Womenswear', 'Accessories'].map((category) => (
              <div key={category} className="bg-white p-6 shadow-lg hover:shadow-xl transition">
                <h3 className="text-xl font-semibold mb-2">{category}</h3>
                <p className="text-gray-600">Explore premium materials and refined designs.</p>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section className="py-16 px-8">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            Inspired by minimalism and mindful fashion, our brand brings sustainable and high-quality clothing
            to everyday wardrobes. Every stitch tells a story.
          </p>
        </section>

        {/* Featured Products */}
        <section className="py-16 px-8 bg-gray-50">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md p-4 text-center">
                <div className="h-48 bg-gray-200 mb-4">[Product Image]</div>
                <h3 className="text-lg font-semibold">Product {item}</h3>
                <p className="text-gray-600 mb-2">$99.00</p>
                <button className="bg-black text-white px-4 py-2 text-sm">Buy Now</button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default App;

