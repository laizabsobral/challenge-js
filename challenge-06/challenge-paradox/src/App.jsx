import "./App.css";
import { RaceTrack } from "./components/raceTrack";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full mx-auto space-y-6 flex justify-center items-center h-screen">
        <RaceTrack />
      </div>
    </div>
  );
}

export default App;
