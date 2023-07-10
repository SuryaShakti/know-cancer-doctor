import axios from "axios";

const API_URL = "https://api.knowcancer.braynixai.com/v1";

// fetch all Q and A
export const getAllQna = async () => {
  try {
    const token = localStorage.getItem("token");
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${API_URL}/qna?$limit=-1`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.request(config);
    console.log(response);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const addQna = async () => {
  try{
    const token = localStorage.getItem("token");
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${API_URL}/qna`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const response = await axios.request(config);
    console.log(respone);
    return response.data;
  }catch{
    throw error.response.data.message
  }
}