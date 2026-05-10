import Link from 'next/link';

export default function Home() {
  return (
    <main className="scroll-smooth bg-white">
      <section 
        id="about" 
        className="relative min-h-screen w-full flex items-center justify-center py-20 px-6 md:px-20 bg-[url('/jkl_assets/jkl_bg.png')] bg-cover bg-center bg-fixed"
      >
        {/* Dark overlay to make the white cards stand out */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl w-full">
          
          {/* LEFT SIDE: Frosted Glass Text Card */}
          <div className="bg-white/95 backdrop-blur-md p-8 md:p-12 rounded-[2rem] shadow-2xl border border-white/20">
            <div className="flex flex-col space-y-6">
              <div>
                <h2 className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-2">Discovery</h2>
                <h1 className="text-black text-3xl md:text-5xl font-black uppercase leading-tight">
                  About JKL University
                </h1>
              </div>

              <div className="space-y-4 text-gray-800 leading-relaxed">
                <p className="text-lg font-bold text-black">
                  Welcome to JKL University, a premier institution dedicated to academic excellence and innovation.
                </p>
                
                <p className="text-sm">
                  Founded on the principles of integrity, JKL University has grown into a vibrant community where tradition meets the modern world.
                </p>

                <div className="pt-4 border-t border-gray-200/50">
                  <h3 className="text-black font-black uppercase tracking-widest text-xs mb-1">Academic Excellence</h3>
                  <p className="text-sm italic">A rigorous curriculum led by world-class faculty across various professional programs.</p>
                </div>

                <div className="pt-4 border-t border-gray-200/50">
                  <h3 className="text-black font-black uppercase tracking-widest text-xs mb-1 text-blue-600">Innovation & Growth</h3>
                  <p className="text-sm">Staying at the forefront of educational technology and sustainable development.</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Clean Image with No Accents */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white p-3 shadow-2xl rounded-lg">
              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                <img 
                  src="/jkl_assets/bg-2.jpg" 
                  alt="JKL University Campus" 
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}