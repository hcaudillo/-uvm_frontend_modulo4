const axios = require ('axios');
let mUrl = "http://api.weatherapi.com/v1/current.json?key=7f4f5e25a03842a996e65142240811";

async function getClimaByCiudad (mCiudad) {

    const options = {
        method: "GET",
        url:  mUrl,
        params: {
            q: mCiudad,
        },
    };
    
    try {
        const result = await axios.request(options);
        //console.log('Result....', result.data);
            let detalle = null;
            detalle = {
                country: result.data.location.country,
                name: result.data.location.name,
                horaLocal: result.data.location.localtime,
                temperaturaActual: result.data.current.temp_c,
                descripcionClima: result.data.current.condition.text,
                imagenClima: result.data.current.condition.icon,
                velocidadViento: result.data.current.wind_kph,
                direccionViento: result.data.current.wind_dir,
                humedad: result.data.current.humidity,
                sensacion: result.data.current.feelslike_c,
                indiceUv: result.data.current.uv,
                visibilidad: result.data.current.vis_km
            }
            //console.log('CLIMA: ...', detalle)
            return detalle;
        
    } catch (error) {
        console.error('Error climaApi...', error);
        return error;
    }
};

module.exports = {
    getClimaByCiudad
}
