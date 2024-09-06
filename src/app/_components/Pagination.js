"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useSearchParams } from "next/navigation";

const PAGE_SIZE = 10;

function Pagination({ count }) {
  const searchParams = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    // const next = currentPage === pageCount ? currentPage : currentPage + 1;
    // searchParams.set("page", next);
  }

  function prevPage() {
    // const prev = currentPage === 1 ? currentPage : currentPage - 1;
    // searchParams.set("page", prev);
    // setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  return (
    <div className="w-full flex items-center justify-between">
      <p className="text-2xl ml-3">
        Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to{" "}
        <span>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        of <span>{count}</span> results
      </p>

      <div className="flex gap-2">
        <button onClick={prevPage} disabled={currentPage === 1}>
          <ChevronLeftIcon className="w-8 h-8" /> <span>Previous</span>
        </button>

        <button onClick={nextPage} disabled={currentPage === pageCount}>
          <span>Next</span>
          <ChevronRightIcon className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
