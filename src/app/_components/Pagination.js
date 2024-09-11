"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// const PAGE_SIZE = 10;

function Pagination({ count, PAGE_SIZE }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  // console.log("currentPage:" + currentPage);

  const pageCount = Math.ceil(count / PAGE_SIZE);

  // console.log("pageCount: " + pageCount);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    const params = new URLSearchParams(searchParams);

    params.set("page", next);

    replace(`${pathname}?${params.toString()}`);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    const params = new URLSearchParams(searchParams);

    params.set("page", prev);

    replace(`${pathname}?${params.toString()}`);
  }

  if (pageCount <= 1) return null;

  return (
    <div className="w-full flex justify-between px-16">
      <p className="text-lg">
        Showing (<span>{(currentPage - 1) * PAGE_SIZE + 1}</span>-
        <span>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>
        ) out of <span>{count}</span> results
      </p>

      <div className="flex">
        <button onClick={prevPage} disabled={currentPage === 1}>
          <ChevronLeftIcon className="w-8 h-8" />
          {/* <span>Previous</span> */}
        </button>
        <input
          type="text"
          value={currentPage}
          className="w-8 h-8 text-center"
          readOnly
        />

        <button onClick={nextPage} disabled={currentPage === pageCount}>
          {/* <span>Next</span> */}
          <ChevronRightIcon className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
