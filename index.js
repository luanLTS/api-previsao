require("dotenv").config();
const axios = require("axios");

const { PROTOCOL, BASE_URL, APPID, UNITS, Q, LANGUAGE, CNT } = process.env;

const url = `${PROTOCOL}://${BASE_URL}?q=${Q}&appid=${APPID}&cnt=${CNT}&lang=${LANGUAGE}&units=${UNITS}`;

// const res = axios.get(url);

axios
    .get(url)
    .then((res) => {
        return res.data;
    })
    .then((res) => {
        return res["list"];
    })
    .then((list) => {
        for (let i = 0; i < list.length; i++) {
            // console.log(`item ${i}`);
            let { temp_max, temp_min } = list[i].main;
            let { description } = list[i].weather[0];
            // console.log(`Min: ${temp_min}   Máx: ${temp_max}`);
            // console.log(`Descrição ${list[i].weather[0].description}`);
            // console.log(list[i].dt_txt);

            console.log(`
            ${list[i].dt_txt}
            ${description}
            Min: ${Math.round(temp_min)}   Máx: ${Math.round(temp_max)}
            `);
        }
    });
