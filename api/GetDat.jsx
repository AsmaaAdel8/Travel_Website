import axios from "axios";
import get_city_info from "./GetCityData";

function getData(data, city_id, country_name) {
  const { location, InDate, OutDate, guests , rooms} = data;
  const url = `https://api.makcorps.com/${location}`;
  get_city_info(location);
  console.log(city_id, country_name);
  const params = {
    cityid: city_id,
    pagination: "0",
    cur: country_name,
    rooms: rooms,
    adults: guests,
    checkin: InDate,
    checkout: OutDate,
    api_key: "67fd5ed42de874c9fecaa409",
  };

  axios
    .get(url, { params })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(`Error: ${error.message}`);
    });
}
export default getData;
