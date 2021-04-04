import React from "react";
import Link from "next/link";
export default function People({ data }) {
  return (
    <div>
      <h1 className="text-3xl">People</h1>
      <div>
        <Link href="/people-detail">
          <div className="cursor-pointer bg-gray-100 mb-5 rounded-lg ">
            {data.name}
          </div>
        </Link>
      </div>
    </div>
  );
}
