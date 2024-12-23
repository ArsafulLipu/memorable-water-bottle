import {useState, useEffect} from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLs, getStoredCart } from "../../../utilitis/localstorage";
import Cart from "../cart/cart";
const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setcart] = useState([])
    useEffect(()=>{
        fetch('bootle-data.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    }
        , [])
    useEffect(()=>{
        console.log('called the useEfect', bottles.length)
        if(bottles.length){
            const storedCart = getStoredCart();
            console.log(storedCart, bottles);
            const savedCart = [];

            for(const id of storedCart){
                console.log(id);
                const bottle = bottles.find(bottle => bottle.id === id);
                if(bottle){
                    savedCart.push(bottle)
                }
            }
            setcart(savedCart);
        }
    }
        ,[bottles])

    const handelAddtoCart = bottle =>{
        const newCart = [...cart, bottle]
        setcart(newCart);
        addToLs(bottle.id)
    }
    return (
        <div>
            <h2>Bottles Here: {bottles.length}</h2>
            <Cart cart={cart}></Cart>
            <div className="bottles-container">
            {
                bottles.map(bottle => <Bottle handelAddtoCart={handelAddtoCart} key={bottle.id} bottle={bottle}></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;