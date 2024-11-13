const express = require('express')
const app = express()
const paisApi = require('./src/paisApi')
const climaApi = require('./src/climaApi')
const port = 3000;
let cors = require("cors");
app.use(cors());

app.get('', (req, res) => {
    res.send('Hello express!')
});


app.get('/weather', async (req, res) => {
    //console.log('Res... ', req.query.address)
    let clima = null;
    let capital = await paisApi.getCiudad(req.query.address);
    //console.log('CAPdesdeAPI..  ', capital )
    if(capital === null || capital === undefined ){
        clima = '404';
    } else {
        clima =  await climaApi.getClimaByCiudad(capital)
    }
    
   // console.log('CLIdesdeAPI..  ', clima )
    res.send(clima);
});


app.listen(port, () => {
    console.log(`Servidor ejecutandose sobre el puerto ${port}.`)
}) 
