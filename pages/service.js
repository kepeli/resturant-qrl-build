import axios from "axios";

const BASE_URL = "https://yourapp.com/restaurant";

const getShowDetails = async (restaurantId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${restaurantId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching restaurant details:", error);
    throw error;
  }
};

export default getShowDetails;
