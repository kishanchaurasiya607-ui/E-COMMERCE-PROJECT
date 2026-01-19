import React, { useState } from "react";

const methods = [
  {
    id: 1,
    name: "Online Booking (Airline Website/App)",
    details: [
      "Direct booking from airline",
      "Best offers & deals",
      "Fast & secure",
    ],
  },
  {
    id: 2,
    name: "Travel Agent Booking",
    details: [
      "Good for group bookings",
      "Assistance available",
      "Sometimes package deals",
    ],
  },
  {
    id: 3,
    name: "OTA Booking (MakeMyTrip, Goibibo, Cleartrip)",
    details: [
      "Compare multiple airlines",
      "Discounts & cashback",
      "Easy cancellation",
    ],
  },
  {
    id: 4,
    name: "Airport Counter Booking",
    details: [
      "Last minute booking",
      "Usually expensive",
      "Availability based",
    ],
  },
  {
    id: 5,
    name: "Corporate/Business Booking",
    details: [
      "Special corporate rates",
      "Flexible changes",
      "Company travel desk support",
    ],
  },
];

const steps = [
  { id: 1, title: "Search Flights", desc: "Choose source, destination, date & passengers." },
  { id: 2, title: "Select Flight", desc: "Compare price, timing, and layovers." },
  { id: 3, title: "Passenger Details", desc: "Enter name, DOB, and passport details." },
  { id: 4, title: "Add Extras", desc: "Seat selection, meals, baggage." },
  { id: 5, title: "Payment", desc: "Pay via card/UPI/netbanking." },
  { id: 6, title: "Confirmation", desc: "PNR number & e-ticket received." },
];

const FlightBooking = () => {
  const [activeMethod, setActiveMethod] = useState(1);

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Flight Booking Details
        </h1>

        {/* Booking Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {methods.map((method) => (
            <div
              key={method.id}
              className={`card bg-white shadow-lg rounded-xl p-5 cursor-pointer ${
                activeMethod === method.id ? "border-2 border-blue-500" : ""
              }`}
              onClick={() => setActiveMethod(method.id)}
            >
              <h2 className="text-xl font-bold mb-2">{method.name}</h2>
              <ul className="text-gray-600 text-sm space-y-1">
                {method.details.map((d, idx) => (
                  <li key={idx}>✔ {d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Booking Steps */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Booking Process Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.id} className="card bg-white shadow-lg rounded-xl p-5">
                <h3 className="text-xl font-bold mb-2">
                  Step {step.id}: {step.title}
                </h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Active Method Detail */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Selected Booking Method</h2>
          <div className="card bg-white shadow-lg rounded-xl p-5">
            <h3 className="text-xl font-bold">
              {methods.find((m) => m.id === activeMethod).name}
            </h3>
            <ul className="text-gray-600 text-sm mt-2 space-y-1">
              {methods
                .find((m) => m.id === activeMethod)
                .details.map((d, idx) => (
                  <li key={idx}>✔ {d}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightBooking;
