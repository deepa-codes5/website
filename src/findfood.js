import food from "./images/briyani.jpg"
import pasta from "./images/pasta.jpg"
import salad from "./images/salad.jpg"
import traditionalpasta from  "./images/pasta2.jpg"
 function Findfood() {
    return (
        <>
            <div className="food">
                <div className="content">
                    <p>EASY WAY TO ORDER YOUR FOOD</p>
                    <h1>Order Tasty & <br /> Fresh Food <br /> <span style={{color:"red"}}>anytime!</span> </h1>
                    <p>just confirm your order and enjoy our <br />delicious fastest delivery</p>
                    <div className="button">
                        <button>order now</button>
                    </div>
                </div>
                <div className="image">
                    <img src={food} alt="food" />
                </div>

            </div>
            <div className="products">
            <div className="product-info">
                <img src={pasta} />
                <div className="product-details">
                    <h3>Special pasta</h3>
                    <p>★★★★★</p>
                    <p className="product-price">$45.00</p>
                    <button className="order-btn">
                        Order Now
                    </button>
                </div>
                <button className="cart-btn">
                    🛒
                </button>
            </div>
            <div className="product-info">
                <img src={salad} />
                <div className="product-details">
                    <h3>Salad</h3>
                    <p>★★★★★</p>
                    <p className="product-price">$70.00</p>
                    <button className="order-btn">
                        Order Now
                    </button>
                </div>
                <button className="cart-btn">
                    🛒
                </button>
            </div>
             <div className="product-info">
                <img src={traditionalpasta} />
                <div className="product-details">
                    <h3>traditinal Pasta</h3>
                    <p>★★★★★</p>
                    <p className="product-price">$60.00</p>
                    <button className="order-btn">
                        Order Now
                    </button>
                </div>
                <button className="cart-btn">
                    🛒
                </button>
            </div>
           
        </div >
    
</>
    )
}
export default Findfood