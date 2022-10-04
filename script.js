'use strict';
const title = prompt("Как называется Ваш проект?", "Yoga skunk"),
    screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные"),
    screenPrice = +prompt("Сколько будет стоить данная работа?", "15000"),
    rollback = 10,
    adaptive = confirm("Нужен ли адаптив на сайте?"),
    service1 = prompt("Какой дополнительный тип услуги нужен?", "Тестирование"),
    servicePrice1 = +prompt("Сколько это будет стоить?", "5000"),
    service2 = prompt("Какой дополнительный тип услуги нужен?", "CMS"),
    servicePrice2 = +prompt("Сколько это будет стоить?", "7000"),
    fullPrice = screenPrice + servicePrice1 + servicePrice2,
    servicePercentPrice = fullPrice - (fullPrice * (rollback / 100));

console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log(screens.toLowerCase().split(", "));
console.log("Стоимость вёрскти экранов " + screenPrice + " рублей");
console.log("Откат посреднику за работу " + fullPrice * (rollback / 100) + " рублей");
console.log(title);
console.log(screens);
console.log(screenPrice);
console.log(adaptive);
console.log(service1);
console.log(servicePrice1);
console.log(service2);
console.log(servicePrice2);
console.log(fullPrice);
console.log(servicePercentPrice);

switch (true) {
    case fullPrice > 30000:
        console.log("Скидка 10%");
        break;
    case fullPrice > 15000:
        console.log("Скидка 5%");
        break;
    case fullPrice >= 0:
        console.log("Скидка не предусмотрена");
        break;
    default:
        console.log("Что-то пошло не так");
}