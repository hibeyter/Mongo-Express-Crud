const express = require('express');
const mongoose = require('mongoose')
const controller = require("./app/controller/controller")
const constant = require("./app/utils/constants")


const app = express();
mongoose.connect( process.env.DATABASE_URL || constant.DATABASE_URL , { useNewUrlParser: true,useUnifiedTopology: true  })
const db = mongoose.connection

db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())


app.get("/", controller.allUser) 

app.get("/:id", controller.getUser)

app.post("/",controller.insertUser)

app.patch("/:id",controller.updateUser)

app.delete("/:id",controller.deleteUser)

const PORT = process.env.PORT || constant.PORT
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});

module.exports =  app