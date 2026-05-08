export default function Home() {
  return (
    <main className="pt-32 px-8 min-h-screen bg-white">
      {/* section hero */}
      <section className="hero flex flex-col items-center">
        <h1 className="text-4xl font-bold text-gray-900">Welcome to JKL</h1>
      </section>

      {/* section body */}
      <section className="body mt-10 max-w-4xl mx-auto">
        <p className="text-gray-700 text-lg">This is the main body content.</p>
      </section>
    </main>
  );
}