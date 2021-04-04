import { useState, useEffect } from "react";
import { render } from "react-dom";
import Planets from "../components/Planets";

function HomePage() {
  const [people, setPeople] = useState([]);

  const [pageNumber, setPageNumber] = useState(1);
  const [pageZero, setPageZero] = useState(0);

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch("http://swapi.dev/api/planets/?page=" + pageNumber);
      let data = await res.json();
      setPeople(data.results);
    }

    fetchPeople();
  }, [pageNumber]);

  console.log("data", people);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-4xl space-x-4 leading-10 text-center ">
        <Planets className="" data={people} />

        <h2>{pageNumber}</h2>
      </div>

      <div className="flex flex-row space-x-4 mb-8">
        <button
          className="bg-yellow-500 px-4 rounded-lg "
          disabled={pageNumber === 1}
          onClick={() => {
            setPageNumber(pageNumber - 1);
          }}
        >
          Geri
        </button>
        <button
          disabled={pageNumber === 6}
          className=" disabled:opacity-50 bg-yellow-500 px-4 py-2 rounded-lg  "
          onClick={() => {
            setPageNumber(pageNumber + 1);
          }}
        >
          İleri
        </button>
      </div>
    </div>
  );
}

export default HomePage;
