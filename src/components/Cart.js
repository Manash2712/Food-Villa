import { useDispatch, useSelector } from "react-redux"
import FoodItem from "./FoodItem"
import { clearCart } from "../utils/cartSlice"

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items) // subscribing to the specific portion of store
    // console.log('cartIems isde cart', cartItems);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart())
    }
    return (
        <div>
            <h1 className="font-bold text-3xl">Cart Items - {cartItems.length}</h1>
            <button className="bg-green-100 p-2 m-5" onClick={() => handleClearCart()}>Clear Cart</button>
            <div className="flex">
                {cartItems.map((cartItem) => <FoodItem key={cartItem.id} {...cartItem} />)}
            </div>

        </div>
    )
}

export default Cart