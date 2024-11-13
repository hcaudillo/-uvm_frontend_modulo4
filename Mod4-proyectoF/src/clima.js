async function getClima() {

    let headers = new Headers();
    let seccion = document.getElementById('clima');
    let icono = document.getElementById('icono');
    const search = document.querySelector('input');
    const datoIn = search.value;
    let climaResponse = document.getElementById("descripcion");
    let donde = document.getElementById("nombre");
    let url= 'http://localhost:3000/weather?address='+datoIn;

    seccion.style.display = "block";
    try {
        // GET request
        const response = await fetch(url, { 
            method: 'GET', 
            headers: headers,  
        });
            if (response.status === 200) {
                const data = await response.json();
                
                if(data.country != null || data.country != undefined){
                    seccion.style.display = "block";
                    
                    icono.src = data.imagenClima;
                    donde.innerHTML = "El clima de " + data.name +' - ' + data.country ;
                    climaResponse.innerHTML = ` Clima:              ${data.descripcionClima} <br><br>
                                                Temp. Actual(C):    ${data.temperaturaActual} <br>
                                                Sensacion (C):      ${data.sensacion} <br>
                                                Humedad:            ${data.humedad} <br><br>
                                                Indice UV:          ${data.indiceUv} <br><br>
                                                Direccion del Viento:       ${data.direccionViento} <br>
                                                Velocidad del viento(KPH):  ${data.velocidadViento} <br><br>
                                                Visibilidad (KM):   ${data.visibilidad} <br>
                                                Hora local:         ${data.horaLocal} <br>
                                               `
                }else {
                    icono.src = "";
                    donde.innerHTML = "Pais no Encontrado...";
                    climaResponse.innerHTML = "";
                }
            } else {
                seccion.style.display = "none";
                if (response.status === 400) this.errors = ['Invalid app_permissions value. (err.400)'];
                if (response.status === 401) this.errors = ['Acces denied. (err.401)'];
            }
    
    } catch (error) {
        console.log(error);
        this.errors = ["Se disparo un error al momento de recuperar la información desde la Url."]
    }

        search.value=null;
}

