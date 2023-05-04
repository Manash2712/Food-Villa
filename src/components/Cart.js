import { useSelector } from "react-redux"
import FoodItem from "./FoodItem"

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items) // subscribing to the specific portion of store
    console.log('cartIems isde cart', cartItems);
    return (
        <div>
            <h1 className="font-bold text-3xl">Cart Items - {cartItems.length}</h1>
            {cartItems.map((cartItem) => <FoodItem key={cartItem.id} {...cartItem} />)}

        </div>
    )
}

export default Cart