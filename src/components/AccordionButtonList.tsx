import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

type props = {
  data: { label: string; items: { label: string; href: string }[] }[];
};

export default function AccordionButtonList({ data }: props) {
  return (
    <div id="accordion-collapse" data-accordion="collapse">
      {data.map(({ label, items }, index) => (
        <>
          <h2 id={"accordion-collapse-heading-" + index}>
            <button
              type="button"
              className={
                "flex items-center justify-between w-full p-5 text-xl font-semibold text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200  hover:bg-gray-100 gap-3 " +
                (index === 0 ? "rounded-t-xl" : "") +
                (index === data.length - 1 ? "rounded-b-lg" : "")
              }
              data-accordion-target={"#accordion-collapse-body-" + index}
              aria-expanded="true"
              aria-controls={"accordion-collapse-body-" + index}
            >
              <span className="text-ppink">{label}</span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  className="stroke-ppink"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id={"accordion-collapse-body-" + index}
            className="hidden"
            aria-labelledby={"accordion-collapse-heading-" + index}
          >
            <div className="bg-white list-none rounded w-full font-bold text-lg">
              <ul
                className="divide-y divide-gray-200"
                aria-labelledby="dropdownLargeButton"
              >
                {items.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="hover:bg-gray-100 py-3 text-ppink flex justify-between items-center shadow px-4"
                    >
                      <span>{item.label}</span>
                      <FaArrowRight />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
