import "./App.css";

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full p-6">
      {/* Header */}
      <header className="w-full h-16 bg-cyan-400 rounded-md flex items-center justify-center text-white font-bold">
        Header
      </header>

      {/* Main area */}
      <main className="flex-1 flex flex-col gap-4 my-4">
        <section className="flex flex-col md:flex-row gap-4 flex-1">
          {/* Left column */}
          <div className="flex flex-col md:w-1/3 gap-4 flex-1">
            <div className="flex-[1] bg-purple-300 rounded-md flex items-center justify-center text-white font-semibold">
              Hero
            </div>

            <div className="flex-[2] bg-green-300 rounded-md flex items-center justify-center text-white font-semibold">
              Sidebar
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col md:w-2/3 gap-4 flex-1">
            <div className="flex-[3] bg-yellow-400 rounded-md flex items-center justify-center text-white font-semibold">
              Main Content
            </div>

            <div className="flex-[1] bg-gray-500 rounded-md flex items-center justify-center text-white font-semibold">
              Extra Content
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 h-20 bg-emerald-500 rounded-md flex items-center justify-center text-white font-semibold">
            Related Images
          </div>

          <div className="md:w-1/4 h-20 bg-pink-200 rounded-md flex items-center justify-center text-gray-700 font-semibold">
            Related Posts
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full h-16 bg-orange-400 rounded-md flex items-center justify-center text-white font-bold">
        Footer
      </footer>
    </div>
  );
}

export default App;
