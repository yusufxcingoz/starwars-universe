import { useState, useEffect } from "react";
import { render } from "react-dom";
import Link from "next/link";
import People from "../components/People";
import Planets from "../components/Planets";
import peopleDetail from "../components/peopleDetail";
import "tailwindcss/tailwind.css";

function HomePage() {
  const [people, setPeople] = useState([]);

  const [pageNumber, setPageNumber] = useState(1);
  const [pageZero, setPageZero] = useState(0);

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch("http://swapi.dev/api/people/?page=" + pageNumber);
      let data = await res.json();
      setPeople(data.results);
    }

    fetchPeople();
  }, [pageNumber]);
  return (
    <div>
      <peopleDetail data={people} />
    </div>
  );
}

export default HomePage;
