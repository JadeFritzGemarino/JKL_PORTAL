import Link from 'next/link';

export default function Home() {
  return (
    <main className="scroll-smooth bg-white">
      <section id="hero" className="relative min-h-screen w-full overflow-hidden flex items-center justify-center py-10">
        <div className="absolute inset-0 bg-jkl-hero bg-cover bg-center blur-sm scale-105"></div>
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="z-10 flex flex-col items-center text-center px-6">
          <h1 className="text-white font-black text-5xl md:text-8xl tracking-tighter uppercase leading-[1.1]">
            JKL STUDENT <br />
            <span className="text-jkl-green">INFORMATION SYSTEM</span>
          </h1>

          <div className="mt-10 flex flex-col items-center gap-4 max-w-3xl">
            <p className="text-gray-100 text-lg md:text-2xl font-medium leading-relaxed">
              Streamlining academic excellence. Access your grades, schedules, and
              university resources all in one secure portal.
            </p>

            <p className="text-gray-400 text-sm md:text-lg italic font-light leading-relaxed max-w-2xl">
              Nurturing the leaders of tomorrow through excellence in education,
              innovation, and community since 2022.
            </p>
          </div>

          <div className="mt-12 flex flex-row gap-6 justify-center items-center">
            <Link
              href="auth-page"
              className="bg-jkl-green hover:bg-green-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl active:scale-95 flex items-center justify-center"
            >
              SIS SIGN IN
            </Link>
            <a
              href="/enrollment-page"
              className="bg-jkl-green hover:bg-green-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl active:scale-95 flex items-center justify-center"
            >
              ENROLL NOW
            </a>

            <a href="#achievements" className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 px-10 py-4 rounded-full font-bold text-lg transition-all active:scale-95 cursor-pointer">
              ACHIEVEMENTS
            </a>
          </div>

          <div className="mt-12 w-full max-w-4xl bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col items-center px-2">
              <span className="text-jkl-green text-[10px] font-bold tracking-[0.2em] uppercase mb-1">Active Students</span>
              <h2 className="text-white text-2xl font-black">12,450</h2>
              <p className="text-gray-400 text-[10px] mt-1">Across 8 colleges</p>
            </div>
            <div className="flex flex-col items-center px-2 border-y md:border-y-0 md:border-x border-white/10 py-4 md:py-0">
              <span className="text-jkl-green text-[10px] font-bold tracking-[0.2em] uppercase mb-1">Current Term</span>
              <h2 className="text-white text-2xl font-black">AY 2026-2027</h2>
              <p className="text-gray-400 text-[10px] mt-1">Enrollment open</p>
            </div>
            <div className="flex flex-col items-center px-2">
              <span className="text-jkl-green text-[10px] font-bold tracking-[0.2em] uppercase mb-1">Support Desk</span>
              <h2 className="text-white text-2xl font-black">24/7</h2>
              <p className="text-gray-400 text-[10px] mt-1">Help center available</p>
            </div>
          </div>
        </div>
      </section>

      <section id="achievements" className="py-24 px-6 md:px-20 max-w-7xl mx-auto scroll-mt-10">
        <header className="mb-12">
          <span className="text-jkl-green font-bold tracking-widest uppercase text-sm">Campus Stories</span>
          <h2 className="text-4xl md:text-5xl font-black text-black mt-2">JKL achievements and milestones</h2>
          <p className="text-gray-500 mt-4">Celebrate the latest highlights from our students, faculty, and alumni across the university.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col md:flex-row">
            <div className="p-8 flex-1">
              <span className="text-jkl-green font-bold text-xs uppercase tracking-tighter bg-green-50 px-3 py-1 rounded-full">Innovation</span>
              <h3 className="text-2xl font-bold mt-4 leading-tight">College of Computing launches AI lab for smart campus research</h3>
              <p className="text-gray-500 mt-4 text-sm">The new facility brings together faculty and students to build data-driven solutions for city partners.</p>
              <div className="mt-6 flex items-center text-[10px] font-bold text-gray-400 uppercase gap-4">
                <span>May 8, 2026</span>
                <span>•</span>
                <span>6 min read</span>
              </div>
              <button className="mt-6 text-jkl-green font-bold text-sm hover:underline">Read story →</button>
            </div>
            <div className="md:w-1/2 bg-gradient-to-br from-green-100 to-green-300 relative min-h-[300px] flex items-center justify-center">
              <div className="w-16 h-16 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 ml-1"><path d="M8 5v14l11-7z" /></svg>
              </div>
              <span className="absolute bottom-4 left-4 text-[10px] bg-white/80 px-2 py-1 rounded font-bold uppercase">Photo story</span>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <span className="text-gray-400 font-bold text-[10px] uppercase tracking-widest bg-gray-50 px-3 py-1 rounded-full">Research</span>
              <h3 className="text-lg font-bold mt-4">JKL Engineering team wins national robotics challenge</h3>
              <p className="text-gray-500 text-xs mt-2">A multidisciplinary team built a solar-assisted rover that earned top honors among 42 universities.</p>
              <div className="mt-4 flex items-center text-[10px] font-bold text-gray-400 uppercase gap-3">
                <span>May 6, 2026</span>
                <span>•</span>
                <span>4 min read</span>
              </div>
              <button className="mt-4 text-jkl-green font-bold text-xs hover:underline">Read story →</button>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <span className="text-gray-400 font-bold text-[10px] uppercase tracking-widest bg-gray-50 px-3 py-1 rounded-full">Community</span>
              <h3 className="text-lg font-bold mt-4">Nursing students lead record-breaking health outreach week</h3>
              <p className="text-gray-500 text-xs mt-2">Over 3,000 residents received free screenings through the annual JKL Care Caravan initiative.</p>
              <div className="mt-4 flex items-center text-[10px] font-bold text-gray-400 uppercase gap-3">
                <span>Apr 28, 2026</span>
                <span>•</span>
                <span>3 min read</span>
              </div>
              <button className="mt-4 text-jkl-green font-bold text-xs hover:underline">Read story →</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}