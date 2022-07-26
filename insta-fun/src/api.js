const axios = require("axios");

export const captions = ({ photo }) => {
  const baseURL = "https://instagram-captions.p.rapidapi.com/captions/search";
  const options = {
    params: { word: photo },
    headers: {
      "X-RapidAPI-Key": "4b5dfff135msha195286986074d9p1e23dajsnb02a1eb16b67",
      "X-RapidAPI-Host": "instagram-captions.p.rapidapi.com",
    },
  };

  return axios
    .get(baseURL, options)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};
