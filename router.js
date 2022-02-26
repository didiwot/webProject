//Создали маршруты для потоков данных
const Router = require("express")
const router = new Router()
const controller = require("./controller")

//создали Get-метод 
router.get("/hello", controller.appeal)

//Экспорт модуля
module.exports = router