import axios from "axios";

const API_URL = "https://api.knowcancer.braynixai.com";

export const getAllReview = async () => {
  try {
    const token = localStorage.getItem("token");
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${API_URL}/v1/review?$populate=patient&entityType=patient`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        $populate: ["user"],
      },
    };

    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    return error.response.data.message;
  }
};

export const addReview = async () => {
  try {
    const token = localStorage.getItem("token");
    let data = JSON.stringify({
      entityType: doctor,
      doctor: doctor,
      review: review,
      rating: 3,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${API_URL}/v1/review`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    return error.response.data.message;
  }
};
