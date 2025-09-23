import { ItemCounter } from './shopping-cart/ItemCounter';

interface ItemInCart {
    productName: string
    quantity: number
}

const itemsInCart: ItemInCart[] = [
    { productName: 'Nintendo Switch 2', quantity: 5 },
    { productName: 'Pro Controller', quantity: 3 },
    { productName: 'Super Smash', quantity: 4 }
]

export function FirstStepsApp() {
    return (
        <>
            <h1>Shopping Cart</h1>
            
            {/* <ItemCounter name="Nintendo Switch 2" quantity={5} />
            <ItemCounter name="Pro Controller" quantity={3} />
            <ItemCounter name="Super Smash" quantity={1} /> */}

            { itemsInCart.map(({ productName, quantity }) => (
                <ItemCounter key={productName} name={productName} quantity={quantity} />
            )) }
        </>
    )
}