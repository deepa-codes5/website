
import { useEffect, useState } from "react";
function Menu() {
  const [dishes, setDishes] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  function getData() {
    fetch("http://localhost:3001/dishes")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setDishes(data);
      });
  }
  return (
    <div className="menu-page">

      <h1 className="menu-title">Our Menu</h1>

      <div className="menu-container">

        {dishes.map((item) => {
          return (
            <div className="food-card" key={item.id}>
              <img
                src={item.image}
                alt={item.dishesname}
                className="food-image"
              />
              <div className="food-info">
                <h2>{item.dishesname}</h2>
                <div className="food-bottom">
                  <p>₹{item.price}</p>
                  <button>Add Cart</button>
                </div>
              </div>
            </div>
          );
        })}

      </div>

    </div>
  );
}

export default Menu;
