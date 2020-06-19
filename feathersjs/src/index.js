const express =require("@feathersjs/express");
const app = require('./app');

const mainApp = express().use('/api',app);
const server = mainApp.listen(3030, ()=>{
    console.log('running on http://localhost:3030');
});

app.setup(server);

process.setMaxListeners(15);