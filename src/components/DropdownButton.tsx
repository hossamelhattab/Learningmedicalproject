import { FaArrowRight } from "react-icons/fa6";

interface items {
  label: string;
  href: string;
}

interface DropdownButtonProps {
  id: string;
  buttonText: string;
  items: items[];
  buttonClassName?: string;
  menuClassName?: string;
}

const DropdownButton = ({
  buttonText,
  id,
  items,
}: //   buttonClassName = "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center",
//   menuClassName = "bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4",
DropdownButtonProps) => {
  return (
    <>
      {/* <Script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js"></Script> */}

      <button
        id="dropdownNavbarLink"
        data-dropdown-toggle={"dropdownNavbar" + id}
        className="text-ppink md:p-4 font-medium flex items-center justify-between w-full md:w-auto"
      >
        <span className="underline-effect font-semibold">{buttonText}</span>{" "}
        <svg
          className="w-4 h-4 ml-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>

      <div
        id={"dropdownNavbar" + id}
        className="hidden bg-white text-base z-10 rounded shadow my-4 w-72 text-wrap"
      >
        <ul
          className="py-1 divide-y divide-gray-100"
          aria-labelledby="dropdownLargeButton"
        >
          {items.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="hover:bg-gray-100 text-ppink font-medium  flex justify-between items-center px-4 py-2"
              >
                <span>{item.label}</span>
                <FaArrowRight className="min-w-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DropdownButton;
