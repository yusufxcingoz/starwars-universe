import { useState, useEffect } from "react";
import { render } from "react-dom";
import Link from "next/link";
import People from "../components/People";
import Planets from "../components/Planets";
import "tailwindcss/tailwind.css";

function HomePage() {
  return (
    <div>
      <div className="space-x-4 flex flex-col justify-center items-center max-w-2xl mx-auto mt-80">
        <h1 className="text-4xl font-bold mb-4">Star Wars Universe</h1>
        <div className="flex flex-row space-x-5">
          <div className=" bg-yellow-500 px-4 py-2 rounded-lg ">
            <Link href="people-index">People</Link>
          </div>
          <div className=" bg-yellow-500 px-4 py-2 rounded-lg ">
            <Link href="planets">Planets</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
