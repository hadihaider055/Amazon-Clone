import React from "react";
import Subtotal from "../../Subtotal";
import { useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../../Global State/Reducer";
import { useStateValue } from "../../../Global State/StateProvider";
import "./style.css";
import CheckoutProduct from "../../Checkout Product";
import Button from "@material-ui/core/Button";

function PlaceOrderForm() {
  const history = useHistory();

  const [{ basket, user }, dispatch] = useStateValue();
  const handlePlaceOrder = (e) => {
    alert("Your Order has been Placed!");
    history.push("/");
  };
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="Checkout Banner"
        />

        <div>
          {basket.map((item, index) => (
            <CheckoutProduct
              id={item.id}
              key={index}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              alt=""
            />
          ))}
          <div className="checkout__right">
            <CurrencyFormat
              renderText={(value) => (
                <>
                  <p>
                    {/* Part of the homework */}
                    Subtotal ({basket.length} items): <strong>{value}</strong>
                  </p>
                </>
              )}
              decimalScale={2}
              value={getBasketTotal(basket)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </div>
        </div>
        <Button
          variant="contained"
          className="checkout-btn"
          style={{ width: "100%" }}
          type="submit"
          color="primary"
          onClick={handlePlaceOrder}
        >
          Place Order!
        </Button>
      </div>
    </div>
  );
}

export default PlaceOrderForm;
