import React from "react";
import styles from "./MenuItem.module.css";
import CounterButton from "../CounterButton/CounterButton";

const MenuItem = ({
	item,
	cartContent,
	setCartContent,
	addToCartButtonActive,
	setAddToCartButtonActive,
	itemQuantity,
}) => {
	const addItemToCart = () => {
		setCartContent((prev) => {
			// Find existing item
			const itemIndex = prev.findIndex(
				(cartItem) => cartItem.menuItemNum === item.id
			);

			// Add item of non exiting
			if (itemIndex === -1) {
				return [...prev, { menuItemNum: item.id, qty: 1 }];
			}

			// Add if exist
			const updatedCart = [...prev];
			updatedCart[itemIndex] = {
				...updatedCart[itemIndex],
				qty: updatedCart[itemIndex].qty + 1,
			};

			return updatedCart;
		});
	};

	const subtractItemFromCart = () => {
		setCartContent((prev) => {
			// Find existing item
			const itemIndex = prev.findIndex(
				(cartItem) => cartItem.menuItemNum === item.id
			);

      // If non existing return same reference
      if (itemIndex === -1) return prev;

      // Clone the specific item
      const updatedItem = { ...prev[itemIndex], qty: prev[itemIndex].qty -1 }

      // Create new cart array (instead of spread)
      const updatedCart = prev.map((item, i)=> i === itemIndex ? updatedItem : item)

      // Filter out items where qty have reached 0
      return updatedItem.qty === 0
      ? updatedCart.filter((_,i)=> i !== itemIndex)
      : updatedCart

		});
	};

	return (
		<div className={styles.menuItem}>
			<img src={item.imageUrl} />

			{itemQuantity || addToCartButtonActive == item.id ? (
				<CounterButton
					addItemToCart={addItemToCart}
					itemQuantity={itemQuantity}
          subtractItemFromCart={subtractItemFromCart}
				/>
			) : (
				<button onClick={() => setAddToCartButtonActive(item.id)}>
					Add to cart
				</button>
			)}
		</div>
	);
};

export default MenuItem;
