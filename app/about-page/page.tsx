import Link from 'next/link';

export default function Home() {
  return (
    <main className="scroll-smooth bg-white">
      <section id="about" className="relative min-h-screen w-full flex items-center justify-center py-20 px-6 md:px-20">
        
        {/* Main Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-7xl w-full">
          
          {/* LEFT SIDE: Text Content Square */}
          <div className="flex flex-col space-y-8">
            <div>
              <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2">Discovery</h2>
              <h1 className="text-black text-4xl md:text-5xl font-extrabold uppercase leading-tight">
                About JKL University
              </h1>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg font-medium text-black">
                Welcome to JKL University, a premier institution dedicated to academic excellence, innovation, and the holistic development of our students.
              </p>
              
              <p>
                Founded on the principles of integrity and forward-thinking, JKL University has grown into a vibrant community where tradition meets the modern world.
              </p>

              <div>
                <h3 className="text-black font-bold uppercase tracking-wide mb-2">Our Mission</h3>
                <p>To empower students with the knowledge, skills, and values necessary to lead and succeed in an ever-evolving global landscape.</p>
              </div>

              <div>
                <h3 className="text-black font-bold uppercase tracking-wide mb-2">Academic Excellence</h3>
                <p>With a wide range of undergraduate, graduate, and professional programs, JKL University offers a rigorous curriculum led by world-class faculty.</p>
              </div>

              <div>
                <h3 className="text-black font-bold uppercase tracking-wide mb-2">Campus Life</h3>
                <p>Beyond the classroom, JKL University is home to a diverse and inclusive student body. We believe that education happens everywhere—in our laboratories and on our athletic fields.</p>
              </div>

              <div>
                <h3 className="text-black font-bold uppercase tracking-wide mb-2">Innovation & Growth</h3>
                <p>We remain committed to staying at the forefront of educational technology and sustainable development for the 21st-century workforce.</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Image Box (Square) */}
          <div className="sticky top-24">
            <div className="relative aspect-square w-full bg-gray-100 overflow-hidden shadow-2xl group">
              {/* Main Image */}
              <img 
                src="/api/placeholder/800/800" 
                alt="JKL University Campus" 
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Decorative Square Frame Overlay */}
              <div className="absolute inset-0 border-[16px] border-white/10 pointer-events-none"></div>
              
              {/* Small accent box */}
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-600 -z-10"></div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}