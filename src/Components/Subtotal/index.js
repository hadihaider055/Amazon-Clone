import React from "react";
import "./style.css";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../Global State/StateProvider";
import { getBasketTotal } from "../../Global State/Reducer";
function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  const handlePayment = () => {
    if (basket.length !== 0) {
      history.push("/payment");
    } else {
      alert("Please buy any product to proceed");
    }
  };
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={handlePayment}>Proceed to Checkout</button>
    </div>
  );
}
export default Subtotal;
