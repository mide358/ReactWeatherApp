import axios from "axios";

const baseUrl = "https://api.weatherapi.com/v1/current.json?";
const apiKey = "a7e2efc703cf47d89cd130932212105";

export const getWeatherData = async (city) => {
  try {
    const { data } = await axios.get(baseUrl + `key=${apiKey}&q=${city}`);
    return data;
  } catch (error) {
    throw error;
  }
};
