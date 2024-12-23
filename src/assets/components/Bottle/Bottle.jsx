import './Bottle.css'
const Bottle = ({bottle, handelAddtoCart}) => {
    const {name, img, price} = bottle;
    return (
        <div className="bottle">
            <h3>Bottle: {name}</h3>
            <img src={img} alt="" />
            <p>Price: {price}</p>
            <button onClick={() => handelAddtoCart(bottle)}>Purches</button>
        </div>
    );
};

export default Bottle;