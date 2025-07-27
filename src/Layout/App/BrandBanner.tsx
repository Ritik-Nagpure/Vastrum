
const BrandBanner = () => {
    return (
        <section className="relative bg-gradient-to-br from-white via-rose-100 to-pink-50 shadow-xl">
            <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col items-center text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-800 tracking-wide mb-6 font-samarkan" style={{ fontFamily: '"Samarkan Normal V2", cursive' }}>
                    Vastrum
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 italic mb-8">
                    Where Threads Meet Royalty
                </p>
                <button className="px-6 py-3 text-sm font-medium tracking-wide bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-all">
                    Explore Collection
                </button>
            </div>

            <div className="absolute top-0 left-0 w-full h-full bg-[url('/banner-texture.png')] opacity-10"></div>
        </section>
    )
}

export default BrandBanner