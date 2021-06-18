import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { getWeatherData } from "./data/weatherapi";

function Weather() {
  const [weatherdata, setweatherData] = useState(null);
  const [city, setCity] = useState("Abuja");
  const [country, setCountry] = useState("Nigeria");
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };
  const getData = async () => {
    try {
      const data = await getWeatherData(city, country);
      setweatherData(data);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  function both() {
    getData();
    hideModal();
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="row mx-auto">
      {weatherdata !== null ? (
        <div className="col-md-7 left">
          <div className="day">
            <h3 id="date">
              Date: {weatherdata.location.localtime.slice(0, 10)}
            </h3>
          </div>
          <div className="row weather mx-auto mt-5">
            <div className="col mx-auto temp pt-1">
              <h2 id="temperature">{weatherdata.current.temp_c}&deg;C </h2>
            </div>
            <div className="col mx-auto">
              <div className="col mx-auto">
                <h3 id="location">
                  {weatherdata.location.name},{weatherdata.location.country}
                </h3>
              </div>
              <div className="col mx-auto">
                <p id="time">
                  <sub>Time: {weatherdata.location.localtime.slice(10)} </sub>
                </p>
              </div>
            </div>
            <div className="col img mx-auto">
              <div className="col">
                <img
                  id="weather-img"
                  src={weatherdata.current.condition.icon}
                  alt="imgicon"
                />
              </div>
              <div className="col">
                <p id="description">
                  <sub>{weatherdata.current.condition.text}</sub>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {weatherdata !== null ? (
        <div className="col-md-5 right mx-auto pt-5">
          <div id="">
            <h2 id="location-right">
              Location: &nbsp;
              {weatherdata.location.name}, {weatherdata.location.country}
            </h2>
          </div>

          <ul className="mx-auto " id="w-details">
            <li className="w-list" id="humidity">
              Humidity: {weatherdata.current.humidity}%
            </li>
            <li className="w-list" id="feels-like">
              Feels Like: &nbsp;{weatherdata.current.feelslike_c}&deg;C
            </li>
            <li className="w-list" id="wind">
              Wind: &nbsp;
              {weatherdata.current.wind_mph}
              <sub>mph</sub>
            </li>
            <li className="w-list" id="latlon">
              lat: {weatherdata.location.lat} & lon: {weatherdata.location.lon}
            </li>
          </ul>
          <div className="change mt-3 text-center">
            <button id="loc-btn" onClick={showModal}>
              Change Location
            </button>
            <Modal show={isOpen} onHide={hideModal}>
              <Modal.Title>Input Location</Modal.Title>

              <Modal.Body>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>city</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>country</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <button onClick={hideModal}>Close</button>
                <button onClick={both}>Save </button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Weather;
