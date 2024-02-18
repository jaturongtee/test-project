import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <ul className="fixed z-50 flex translate-x-[-50%] left-[50%] mx-auto top-5 p-3 bg-[#e8e5e480] backdrop-blur-lg  rounded-full text-[18px] max-w-[300px]">
        <li className="">
          <Link
            href="/"
            className=" focus:bg-white py-3 px-5 text-sm rounded-full"
          >
            Home
          </Link>
        </li>
        <li className="">
          <Link
            href="/profile"
            className=" focus:bg-white py-3 px-7 text-sm rounded-full"
          >
            Profile
          </Link>
        </li>
        <li className="">
          <Link
            href="/contact"
            className=" focus:bg-white py-3 px-5 text-sm rounded-full"
          >
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
