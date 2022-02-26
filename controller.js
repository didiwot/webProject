//Создали класс с описанием логики метода, который будет использоваться в router
class Controller {
    async appeal(request, response) {
        try {
            //Изменяем политику единого источника
            response.set('Access-Control-Allow-Origin', '*')
            //Ответ сервера
            response.json("Hello World!")
        } catch (error) {
            console.log(error)
        }
    }
}

//Экспорт модуля
module.exports = new Controller()