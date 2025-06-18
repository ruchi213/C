import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const carData = [
  {
    name: "Tesla Model S",
    image: "/cars/tesla-model-s.jpg",
    features: ["Electric", "Autopilot", "Long Range"],
    advantages: ["Eco-friendly", "Low maintenance", "High-tech"],
    video: "https://www.youtube.com/embed/4eJ5Snm1E8Y",
  },
  {
    name: "Ford Mustang",
    image: "/cars/ford-mustang.jpg",
    features: ["V8 Engine", "Convertible", "Sporty Design"],
    advantages: ["Powerful", "Stylish", "Iconic"],
    video: "https://www.youtube.com/embed/qGbd05C5GvY",
  },
];

export default function CarGallery() {
  const [selectedCar, setSelectedCar] = useState(null);
  const [search, setSearch] = useState("");

  const filteredCars = carData.filter((car) =>
    car.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[url('/cars/bg.jpg')] bg-cover p-6">
      <h1 className="text-4xl font-bold text-white mb-6">
        Car Suggestion & Features Recommender
      </h1>

      <input
        type="text"
        placeholder="Search cars..."
        className="p-2 rounded mb-4 w-full max-w-md"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCars.map((car) => (
          <Card
            key={car.name}
            className="cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setSelectedCar(car)}
          >
            <CardContent>
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-48 object-cover rounded-xl"
              />
              <h2 className="text-xl font-semibold mt-2">{car.name}</h2>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedCar && (
        <div className="mt-8 bg-white p-6 rounded-xl shadow-xl max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">{selectedCar.name}</h2>
          <img
            src={selectedCar.image}
            alt={selectedCar.name}
            className="w-full h-64 object-cover rounded-xl mb-4"
          />

          <h3 className="text-xl font-semibold">Features:</h3>
          <ul className="list-disc list-inside mb-4">
            {selectedCar.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold">Advantages:</h3>
          <ul className="list-disc list-inside mb-4">
            {selectedCar.advantages.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold mb-2">Video:</h3>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={selectedCar.video}
              title={selectedCar.name}
              className="rounded-xl w-full h-full"
              allowFullScreen
            ></iframe>
          </div>

          <Button className="mt-4" onClick={() => setSelectedCar(null)}>
            Close
          </Button>
        </div>
      )}
    </div>
  );
}
