export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">

      <div className="absolute inset-0 bg-jkl-hero bg-cover bg-center blur-sm scale-105"></div>
      
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-2xl uppercase">
          Welcome to <span className="text-green-500">JKL</span> University
        </h1>
        
        <p className="mt-4 text-gray-200 text-lg md:text-2xl max-w-2xl mx-auto font-light leading-relaxed">
          Nurturing the leaders of tomorrow through excellence in education, 
          innovation, and community since 2022.
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg">
            Explore Programs
          </button>
          <button className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/30 px-8 py-3 rounded-full font-bold transition-all">
            Visit Campus
          </button>
        </div>
      </div>
    </div>
  );
}