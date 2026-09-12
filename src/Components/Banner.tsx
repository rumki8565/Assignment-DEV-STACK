import bannerStack from "../assets/banner-stack.png";
const Banner = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:px-8 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left: text content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="block text-gray-900">Build Your Ideal</span>
            <span className="block bg-gradient-to-r from-brand-start via-brand-mid to-brand-end bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-4 text-gray-600 max-w-md mx-auto md:mx-0">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <button
              type="button"
              className="rounded-full px-6 py-3 font-medium text-white bg-gradient-to-r from-brand-start via-brand-mid to-brand-end"
            >
              Explore Technologies
            </button>
            <button
              type="button"
              className="rounded-full px-6 py-3 font-medium border border-gray-300 text-gray-700"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right: hero image */}
        <div className="flex-1 flex justify-center">
          <img
            src={bannerStack}
            alt="Isometric illustration of a development stack"
            className="w-full max-w-sm md:max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
