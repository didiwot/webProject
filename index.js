//Подключили необходимые модули Node.js
const express = require("express")
const mongoose = require("mongoose")
const router = require("./router")
const PORT = process.env.PORT || 3000

//Создали приложение
const app = express()

//Даем возможность приложению парсить JSON
app.use(express.json())
app.use("/auth", router)

//Асинхронная функция запуска сервера
async function start() {
    try {
        await mongoose.connect("mongodb+srv://admin:Hero115@cluster0.cv8ib.mongodb.net/webProject?retryWrites=true&w=majority")
        app.listen(PORT, function() {
            return console.log(`Сервер успешно стартовал на ${PORT} порту`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()
