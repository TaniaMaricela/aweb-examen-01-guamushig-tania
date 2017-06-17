/**
 * Created by Tania Maricela on 17/06/2017.
 */

//_________________SERVIDOR HTTP____________________________
const express = require('express');
const app = express();
const fs = require('fs');

//El servidor tiene definido 1 ruta “/bienvenido”
// la cuál escucha solamente peticiones con el método http “GET”
// y responde con texto plano “Hello World”.
app.get('/bienvenido', function (req, res) {
    res.send('Hello World!')
});

 //_________RUTA INFORACIÓN PERSONAL_________________________

 //Mediante Express va a crear una ruta a la url: “/informacion”
 // que escuche peticiones solamente con el método http “POST”.
 // Usamos el método post por razones académicas.
 app.post('/informacion', function (req, res) {
    fs.readFile('Informacion.txt', 'utf-8', (err,data) => {
        if(err) throw (err);
        console.log(data);
        res.send(data)
    });
});

 //_________RUTA FACULTAD DE SISTEMAS________________________

 //Mediante Express va a crear una ruta a la url: “/facultaddesistemas”
 // que escuche peticiones solamente con el método http “GET”
 app.use('/facultaddesistemas', express.static('public')); //app.get

 //_________RUTA CABECERAS___________________________________

 //Mediante Express va a crear una ruta a la url: “/cabeceras”
 // que escuche peticiones solamente con el método http “POST”.
 app.post('/cabeceras', function (req, res) {
    fecha = new Date();
    res.append('fecha', fecha); //fecha: FechaServidor
    res.append('metodo', req.method); //metodo: método-del-request
    res.append('direccion-ip', req.ip); //dirección-ip: ip-del-request
    res.append('url-original', req.originalUrl); //url-original: url-del-request
    res.append('protocolo', req.protocol); //protocolo: protocolo-del-request
    res.send()
});

 //_________RUTA SET COOKIE__________________________________

 // Mediante Express va a crear una ruta a la url: “/setcookie”
 // que escuche peticiones solamente con el método http “GET”
 app.get('/setcookie', function (req, res) {
    res.cookie('tania',23);
    res.send('Cookie seteada');
});

//__________RUTA CLEAR COOKIE________________________________

app.get('/clearcookie', function (req, res) {
    res.clearCookie("guamushig");
    res.send('Cookie eliminada')
});

//_________PUERTO ESCUCHA 8080______________________________
app.listen(8080, function () {
    console.log('index.js listening on port 8080!')
});