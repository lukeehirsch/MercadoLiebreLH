const express = require('express');
const path = require('path');
const fs = require ('fs');
const app = express();

app.set("port",process.env.PORT || 3000);

app.listen(app.get("port"), () => console.log("Server Start http://localhost:"+app.get("port")))

/* app.listen(3000, ()=>{
    console.log('Servidor funcionando');
}); */

app.use(express.static(path.resolve(__dirname,'../public')));

app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views','home.html'));
});

app.get('/login', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views', 'login.html'));
});

app.get('/register', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views','register.html'));
});