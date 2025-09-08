import { RotateCcw } from "lucide-react";
import { useParadox } from "./../../hooks/useParadox";
import { ParadoxInfo } from "../paradoxInfo";

import { PersonStanding, Turtle } from "lucide-react";

export function RaceTrack() {
  const {
    achillesPosition,
    tortoisePosition,
    remainingDistance,
    isGettingClose,
    trackLength,
    pixelsPerMeter,
    reset,
  } = useParadox();
  return (
    <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">
            Zeno's Paradox of Achilles and the Tortoise
          </h2>
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </button>
        </div>
      </div>

      <div className="px-6 py-4">
        <ParadoxInfo
          achillesPosition={achillesPosition}
          tortoisePosition={tortoisePosition}
          remainingDistance={remainingDistance}
          isGettingClose={isGettingClose}
        />
      </div>

      <div className="px-6 pb-6">
        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-800 mb-2">200m track</h3>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div
              className="relative bg-gray-200 h-24 rounded-lg border border-gray-300 overflow-hidden"
              style={{ width: `${trackLength * pixelsPerMeter}px` }}
            >
              {Array.from({ length: 9 }, (_, i) => (
                <div
                  key={i}
                  className="absolute top-0 bottom-0 w-px bg-gray-400"
                  style={{ left: `${i * 25 * pixelsPerMeter}px` }}
                >
                  <span className="absolute -top-7 -left-3 text-xs font-medium text-gray-600 bg-white px-1 rounded">
                    {i * 25}m
                  </span>
                </div>
              ))}

              <div
                className="absolute top-3 transition-all duration-400 ease-linear flex flex-col justify-center items-center"
                style={{
                  left: `${achillesPosition * pixelsPerMeter}px`,
                  transform: "translateX(-50%)",
                }}
              >
                <div className="mb-1">
                  {" "}
                  <PersonStanding />
                </div>
                <div className="text-xs font-semibold text-blue-600 text-center bg-blue-50 px-2 py-1 rounded-full">
                  Achilles
                </div>
              </div>

              <div
                className="absolute bottom-3 transition-all duration-400 ease-linear flex flex-col justify-center items-center"
                style={{
                  left: `${tortoisePosition * pixelsPerMeter}px`,
                  transform: "translateX(-50%)",
                }}
              >
                <div className="mb-1">
                  <Turtle />
                </div>
                <div className="text-xs font-semibold text-green-600 text-center bg-green-50 px-2 py-1 rounded-full">
                  Tortoise
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
