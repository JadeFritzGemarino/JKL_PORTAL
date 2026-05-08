export default function StudentLogin() {
  return (
    <main className="pt-32 px-8 min-h-screen bg-white text-black">
      <div className="form-container max-w-md mx-auto px-30 py-30 p-8 border border-gray-200 rounded-lg shadow-md justify-center items-center  ">

        <h2 className="text-2xl font-bold mb-6">Student Login</h2>
      
          <form>
            <label htmlFor="studentId" className="block mb-2 font-semibold">Student ID:</label>
            <input
              type="text"
              id="studentId"
              name="studentId"
              placeholder="Enter Student ID"
              className="w-full p-2 mb-4 border border-gray-300 rounded" />

            <label htmlFor="password" className="block mb-2 font-semibold">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              className="w-full p-2 mb-4 border border-gray-300 rounded" />

            <input type="submit"
              value="Login"
              className="bg-jkl-green text-white px-6 py-2 rounded cursor-pointer hover:bg-green-700 transition-colors ce" />
          </form>

        </div>
    </main>
  );
}