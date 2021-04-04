import React from "react";
import Link from "next/link";
import "tailwindcss/tailwind.css";
export default function People({ data }) {
  return (
    <div>
      <div className="flex justify-center items-center mt-10 space-x-5 ">
        <h1 className="text-3xl ">Planets</h1>
        <div className="bg-red-400 w-24 flex justify-center rounded-lg">
          <Link href="/">Go Home</Link>
        </div>
      </div>
      <div>
        <div className="photos grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-5 mt-16">
          <div className="photos-col photos-col--1" />
          <div className="photos-col photos-col--2" />
          <div className="photos-col photos-col--3" />
          {data.map((planets) => {
            return (
              <div className=" bg-gray-100 mb-5 rounded-lg  w-56  mx-5 p-5  ">
                <h2 className="text-2xl font-bold">{planets.name}</h2>
                <p>Rotation Period: {planets.rotation_period}</p>
                <p>Orbital Period: {planets.orbital_period}</p>
                <p>Diameter: {planets.diameter}</p>
                <p>Climate: {planets.climate}</p>
                <p>Gravity: {planets.gravity}</p>
                <p>Surface Water: {planets.surface_water}</p>
                <p>Population: {planets.population}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
