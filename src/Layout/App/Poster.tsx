
const Poster = () => {
  const poster = 'sale'

  return (
    <div>
      {['sale', 'new', 'sum', 'clear'].includes(poster) ? SalePoster() : dposter()}
    </div>
  )
}

export default Poster;

const SalePoster = () => {
  return (
    <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded-xl shadow-lg p-8 m-4 max-w-xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight mb-2">
          🚨 Big Sale Alert!
        </h1>
        <p className="text-xl mb-4">
          Up to <span className="text-yellow-200 font-bold">70% OFF</span> on selected items!
        </p>
        <button className="bg-white text-red-600 font-semibold px-6 py-2 rounded-full hover:bg-yellow-200 transition">
          Shop Now
        </button>
      </div>
    </div>
  );
}

const dposter = () => {
  return (
    <div>
      new poster
    </div>
  )
}