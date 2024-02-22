import { useSelector } from "react-redux";
import Header from "./Header";
import { RootState } from "../utils/Rootstate";
import { CartCard } from "./CartCard";
interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
}
const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  console.log(cartItems);

  return (
    <>
      <Header />
      {cartItems.length > 0 ? (
        <div className=" w-full  flex justify-center items-center">
          <ul>
            {cartItems.map((item: CartItem) => (
              <li key={item.id}>
                <CartCard
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="font-bold flex justify-center  text-5xl mt-10">
          No items are in the Cart.Add some items from the Homepage.
        </p>
      )}
    </>
  );
};
export default Cart;
