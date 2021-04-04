import { useState, useEffect } from "react";

import People from "../components/People";

function HomePage() {
  const [people, setPeople] = useState([]);

  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch("http://swapi.dev/api/people/?page=" + pageNumber);
      let data = await res.json();
      setPeople(data.results);
    }

    fetchPeople();
  }, [pageNumber]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-3xl space-x-4 leading-10 text-center ">
        <People className="" data={people} />

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
          disabled={pageNumber === 9}
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
