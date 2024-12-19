"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filters() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  console.log(searchParams.size);

  function handleCategoryChange(event) {
    console.log(event.target.value);

    const params = new URLSearchParams(searchParams);

    // console.log(params);

    params.set("category", event.target.value);
    params.set("page", 1);

    // console.log(params);

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="space-y-2 ">
      <label htmlFor="category" hidden>
        Choose a category:
      </label>
      <select
        name="category"
        className="px-5 py-3 border-black border-1 bg-gray-100 text-primary-800  shadow-sm rounded-sm "
        onChange={handleCategoryChange}
      >
        <option value="All">All</option>
        <option value="Sports">Sports</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Learning">Learning</option>
        <option value="Hackathons">Hackathons</option>
        <option value="Workshops">Workshops</option>
        <option value="Games">Games</option>
      </select>
    </div>
  );
}

export default Filters;
