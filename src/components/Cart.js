import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  //how I will read the card info => Using subcribing => useSelector
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearCart());
  };

  const cartItems = useSelector((store) => store.cart.items);
//   console.log(cartItems, "cart");
  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-2xl">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClear}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && <h1>Your cart is empty🫙. Add some items!</h1>}
        <ItemList item={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
