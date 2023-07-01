import axios from "axios";

const API_URL = "https://api.knowcancer.braynixai.com/v1";

// Send OTP function
export const sendOtp = async (phone) => {
  try {
    let data = JSON.stringify({
      strategy: "phoneOtp",
      action: "login",
      phone: phone,
      role: 2,
      deviceType: 1,
      deviceId: "sura",
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${API_URL}/authenticate`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const response = await axios.request(config);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

// Verify OTP function

export const verifyOtp = async (phone, otp) => {
  try {
    let data = JSON.stringify({
      strategy: "phoneOtp",
      action: "login",
      phone: phone,
      otp: otp,
      role: 2,
      deviceType: 1,
      deviceId: "sura",
    });

    let config = {
      method: "patch",
      maxBodyLength: Infinity,
      url: `${API_URL}/authenticate?$populate=doctorDetails`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const resposne = await axios.request(config);
    return resposne.data;
  } catch (error) {
    throw error.response.data.message;
  }
};
