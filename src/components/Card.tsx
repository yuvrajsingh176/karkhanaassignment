import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct } from "../utils/cartSlice";
import toast from "react-hot-toast";
interface Props {
  id: number;
  name: string;
  image: string;
  price: number;
}
export const Card = ({ id, name, image, price }: Props) => {
  const dispatch = useDispatch();
  const addTocart = () => {
    const productToAdd = {
      id: id, // Replace with the actual product ID
      name: name,
      price: price,
      image: image,
      quantity: 1, // Adjust the desired quantity
    };
    dispatch(addProduct(productToAdd));
    toast.success("Item added to cart🎊")
  };
  return (
    <div className="bg-[#faf5ef] my-3 w-full rounded-lg shadow-lg h-fit">
      <div className="w-full h-[70%] rounded-md p-1 object-cover">
        <img
          className="w-full   h-full object-cover rounded-lg"
          src={image}
          alt="cap"
        />
      </div>
      <div>
        <div className="p-2">
          <Link to={"/product/" + id}>
            <p className="text-gray-600 cursor-pointer">{name}</p>
          </Link>
          <p className="font-bold">Rs.{price}.00</p>
        </div>
        <div className="flex justify-center my-2">
          <button
            onClick={addTocart}
            className="shadow-lg hover:drop-shadow-2xl hover:shadow-2xl   bg-black py-2 px-2  mx-2 mb-2  text-white rounded-xl w-full text-xl "
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
