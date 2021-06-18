// import React, { useState, useEffect } from "react";

// import { getWeatherData } from "./data/weatherapi";

// // import ReactDOM from "react-dom";
// import Modal from "react-bootstrap/Modal";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Change = (props) => {
//   const [weatherdata, setweatherData] = useState(null);
//   const [city, setCity] = useState("Abuja");

//   const getData = async () => {
//     try {
//       const data = await getWeatherData(city, country);
//       setweatherData(data);
//       console.log(data);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);
//   return <></>;
// };

// export default Change;
