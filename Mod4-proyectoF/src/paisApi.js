const axios = require ('axios');


async function getCiudad (mPais) {
    let mUrl = "https://restcountries.com/v3.1/name/"+mPais;

    const options = {
        method: "GET",
        url: mUrl
    };
    
    try {
        const result = await axios.request(options);
        //console.log('Response....', result.data);

        let capital =  result.data[0].capital[0];
        return capital;
    } catch (error) {
        console.error('Error paisApi...', error.status);
        return error.estatus;
    }
};

module.exports = {
    getCiudad
}
