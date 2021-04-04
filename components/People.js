import React from "react";
import Link from "next/link";
export default function People({ data }) {
  return (
    <div>
      <div className="flex justify-center items-center mt-10 space-x-5 ">
        <h1 className="text-3xl ">People</h1>
        <div className="bg-red-400 w-24 flex justify-center rounded-lg">
          <Link href="/">Go Home</Link>
        </div>
      </div>
      <div>
        <div className="photos grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-8 max-w-5xl mx-auto mt-16 ">
          <div className="photos-col photos-col--1" />
          <div className="photos-col photos-col--2" />
          <div className="photos-col photos-col--3" />

          {data.map((peoples) => {
            return (
              <div className=" bg-gray-100 mb-5 rounded-lg p-4 ">
                <h2 className="text-2xl font-bold">{peoples.name}</h2>
                <p>Height: {peoples.height}</p>
                <p>Mass: {peoples.mass}</p>
                <p>Hair Color: {peoples.hair_color}</p>
                <p>Eye Color: {peoples.eye_color}</p>
                <p>Birth: {peoples.birth_year}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
