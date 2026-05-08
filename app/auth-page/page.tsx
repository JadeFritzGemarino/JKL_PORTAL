export default function StudentLogin() {
  return (
    <main className="h-screen w-full bg-white text-black flex overflow-hidden">
      <div className="hidden lg:flex flex-1 flex-col justify-center px-20 bg-gray-50/30">
        <div className="max-w-md">
          <span className="text-jkl-green font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
            Welcome Back
          </span>
          <h1 className="text-5xl font-black mb-6 leading-tight">
            We're happy to <br /> see you again
          </h1>
          <p className="text-gray-500 text-lg mb-10 leading-relaxed">
            Sign in to continue your JKL story. Your dashboard keeps everything you 
            need within easy reach, so you can focus on what matters most today.
          </p>

          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="font-bold uppercase tracking-widest text-[10px] text-gray-400 mb-3">
              Need a hand?
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We're here to help. Reach the Campus Help Desk at 
              <span className="font-bold text-black ml-1">(02) 8123-4567</span> or email 
              <span className="font-bold text-jkl-green ml-1 underline underline-offset-4">helpdesk@jkl.edu</span> anytime.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-xl h-full border-l border-gray-100 p-12 md:p-24 flex flex-col justify-center bg-white shadow-[-20px_0_50px_rgba(0,0,0,0.02)]">
        <h2 className="text-4xl font-black mb-10 uppercase tracking-tighter">
           Login
        </h2>

        <form className="w-full max-w-sm">
          <div className="mb-6">
            <label htmlFor="studentId" className="block mb-2 font-bold text-xs uppercase tracking-widest text-gray-500">
              ID Number:
            </label>
            <input
              type="text"
              id="studentId"
              name="studentId"
              placeholder="Enter ID"
              className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-jkl-green focus:ring-1 focus:ring-jkl-green transition-all"
            />
          </div>

          <div className="mb-8">
            <label htmlFor="password" className="block mb-2 font-bold text-xs uppercase tracking-widest text-gray-500">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-jkl-green focus:ring-1 focus:ring-jkl-green transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-jkl-green text-white py-4 rounded-full font-bold hover:bg-green-600 transition-all active:scale-95 shadow-lg shadow-green-900/20 uppercase tracking-widest text-sm"
          >
            Continue to SIS
          </button>
          
          <div className="flex justify-between items-center mt-8 text-xs">
            <span className="text-jkl-green font-bold cursor-pointer hover:underline">Forgot password?</span>
            <span className="text-gray-300">Last login: May 9, 2026</span>
          </div>
        </form>
      </div>
    </main>
  );
}