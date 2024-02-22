import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct, deleteFromCard, removeProduct } from "../utils/cartSlice";
import { IoAddCircleOutline } from "react-icons/io5";
import { CiCircleMinus } from "react-icons/ci";
import { RootState } from "../utils/Rootstate";

interface Props {
  id: number;
  name: string;
  image: string;
  price: number;
}
export const CartCard = ({ id, name, image, price }: Props) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const product = cartItems.filter((product) => product.id === id);

  const dispatch = useDispatch();
  const addTocart = () => {
    const productToAdd = {
      id: id,
      name: name,
      price: price,
      image: image,
      quantity: 1,
    };
    dispatch(addProduct(productToAdd));
  };
  const removeFromCard = () => {
    dispatch(removeProduct(product[0]));
    };
    const removeFromCart = (id:number) => {
        dispatch(deleteFromCard(id))
    }
  return (
    product[0].quantity > 0 && (
      <div className="flex  justify-center">
        <div className="bg-[#faf5ef] my-3 w-4/5   rounded-lg shadow-lg h-fit flex-col ">
          <div className="w-full h-[50%] rounded-md p-1 object-cover">
            <img
              className="w-full   h-1/4 flex justify-center items-center object-cover rounded-lg"
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
            <div className="flex justify-around my-2">
              <button
                onClick={addTocart}
                className="flex items-center justify-center shadow-lg hover:drop-shadow-2xl hover:shadow-2xl   bg-black py-2 px-2  mx-2 mb-2  text-white rounded-xl w-1/4 text-xl "
              >
                <IoAddCircleOutline />
              </button>
              <button
                onClick={removeFromCard}
                className="flex items-center justify-center shadow-lg hover:drop-shadow-2xl hover:shadow-2xl   bg-black py-2 px-2  mx-2 mb-2  text-white rounded-xl w-1/4 text-xl "
              >
                <CiCircleMinus />
              </button>
              <p className="flex items-center font-bold   ">
                QTY: {product[0].quantity}
              </p>
                          <button
                              onClick={()=>removeFromCart(product[0].id)}
                className={`flex items-center justify-center shadow-lg hover:drop-shadow-2xl hover:shadow-2xl   bg-black py-2 px-2  mx-2 mb-2  text-white rounded-xl w-1/4 text-xl`}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
