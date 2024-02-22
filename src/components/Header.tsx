import { BiSolidCart } from "react-icons/bi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[#faf5ef] shadow-md grid grid-cols-4 p-4 justify-between">
      <div className="logo  col-span-2 flex justify-center items-center ">
        <Link to="/">
          <img
            className="rounded-lg h-10 w-10"
            src="data:image/jpeg;base64,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"
            alt="logo"
          />
        </Link>
      </div>
      <div className="flex justify-around items-center col-span-2">
        <Link to="/">
          <p className="text-xl cursor cursor-pointer">Home</p>
        </Link>
        <div className="flex items-center ">
          <Link to="/cart">
            <p className="text-3xl cursor-pointer mx-2">
              <BiSolidCart />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
