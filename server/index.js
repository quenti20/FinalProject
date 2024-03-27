const express = require("express")
const cors = require('cors');
const mongoose = require("mongoose")
const app = express()
const dataRoutes = require("./routes/routes")
const bodyparser = require('body-parser')

app.use(bodyparser.json());

app.use(cors({
    origin: 'http://localhost:3000'
}));

mongoose.connect("mongodb+srv://dhiyanesh7338942092:Z0OCfm5Xl98okjjX@finalproject.uxzpm.mongodb.net/")

app.use('/', dataRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("Server running on port: " + PORT) 
})

// Z0OCfm5Xl98okjjX
// dhiyanesh7338942092