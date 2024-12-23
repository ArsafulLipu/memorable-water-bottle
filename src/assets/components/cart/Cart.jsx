import './cart.css'

const Cart = ({cart}) => {
    return (
        <div>
            <h2>Cart: {cart.length}</h2>
            <div className="divimg">
                {
                    cart.map(bottle => <img src={bottle.img}></img>)
                }
            </div>
        </div>
    );
};

export default Cart;