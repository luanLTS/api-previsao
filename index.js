const axios = require("axios");
const key = "abfe510dc62eecff75c7e32beea72aeb";
const locale = "Itu";
const url = `http://api.openweathermap.org/data/2.5/forecast?q=${locale}&appid=${key}`;

axios.get(url).then((result) => {
    console.log(result);
});
