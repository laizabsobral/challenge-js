import { PersonStanding, Turtle, Ruler } from "lucide-react";

export function ParadoxInfo({
  achillesPosition,
  tortoisePosition,
  remainingDistance,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg">
            <PersonStanding />
          </span>
          <h3 className="font-medium text-blue-900"> Achilles</h3>
        </div>
        <div className="text-2xl font-bold text-blue-600">
          {achillesPosition.toFixed(1)}m
        </div>
      </div>

      <div className="bg-green-50 rounded-lg p-4 border border-green-100">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg">
            <Turtle />
          </span>
          <h3 className="font-medium text-green-900">Tortoise</h3>
        </div>
        <div className="text-2xl font-bold text-green-600">
          {tortoisePosition.toFixed(1)}m
        </div>
      </div>

      <div className="bg-orange-50 rounded-lg p-4 border border-orange-100">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg">
            <Ruler />
          </span>
          <h3 className="font-medium text-orange-900">Distance</h3>
        </div>
        <div className="text-2xl font-bold text-orange-600">
          {remainingDistance < 1
            ? remainingDistance.toFixed(3)
            : remainingDistance.toFixed(1)}
          m
        </div>
      </div>
    </div>
  );
}
