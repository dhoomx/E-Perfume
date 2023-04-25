// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useLocation } from "react-router";
// import { userRequest } from "../requestMethods";
// import { Link } from "react-router-dom";

// const Success = () => {
//   const location = useLocation();
//   const data = location.state.stripeData;
//   const cart = location.state.cart;
//   const currentUser = useSelector((state) => state.user.currentUser);
//   const [orderId, setOrderId] = useState(null);

//   useEffect(() => {
//     const createOrder = async () => {
//       try {
//         const res = await userRequest.post("/orders", {
//           userId: currentUser._id,
//           products: cart.products.map((item) => ({
//             productId: item._id,
//             quantity: item._quantity,
//           })),
//           amount: cart.total,
//           address: data.billing_details.address,
//         });
//         setOrderId(res.data._id);
//       } catch {}
//     };
//     data && createOrder();
//   }, [cart, data, currentUser]);

//   return (
//     <div
//       style={{
//         height: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       {orderId
//         ? `Order has been created successfully. Your order number is ${orderId}`
//         : `Successfull. Your order is being prepared...`}
//       <Link to="/">
//         <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
//       </Link>
//     </div>
//   );
// };

// export default Success;

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { userRequest } from "../requestMethods";
import { Link } from "react-router-dom";
import { AiOutlineCheckCircle } from "react-icons/ai"; // Import success icon from react-icons library

const Success = () => {
  const location = useLocation();
  const data = location.state.stripeData;
  const cart = location.state.cart;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        setOrderId(res.data._id);
      } catch {}
    };
    data && createOrder();
  }, [cart, data, currentUser]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif", // Font family
        fontSize: "24px", // Font size
        color: "#333", // Font color
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1rem",
        }}
      >
        <AiOutlineCheckCircle
          style={{ fontSize: "48px", color: "green", marginRight: "0.5rem" }} // Success icon style
        />
        {orderId ? (
          <div style={{ textAlign: "center" }}>
            <p>
              Order has been created successfully. Your order number is{" "}
              <strong>{orderId}</strong>
            </p>
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>
            <p>Successfull. Your order is being prepared...</p>
          </div>
        )}
      </div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <button
          style={{
            padding: 10,
            marginTop: 20,
            backgroundColor: "#333", // Button background color
            color: "white", // Button text color
            border: "none",
            cursor: "pointer",
            borderRadius: 4,
          }}
        >
          Go to Homepage
        </button>
      </Link>
    </div>
  );
};

export default Success;
