import axios from "axios";
import getData from "./GetDat";

async function get_city_info(location) {
  const url = `https://nominatim.openstreetmap.org/search?q=${location}&format=json`;

  try {
    const response = await axios.get(url);
    const NewData = response.data;
    if (NewData && NewData.length > 0) {
      const city_id = NewData[0]["place_id"];
      const country_name = NewData[0]["address"]["display_name"];
    //   return { city_id, country_name }; // Return an object
      getData(city_id, country_name);
    } else {
      console.log("No data found for the specified location.");
      return null;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
export default get_city_info;
