'use strict';

let title = "Yoga skunk",
    screens = "Простые, Сложные, Интерактивные",
    screenPrice = 15000,
    rollback = 10,
    fullPrice = 100000,
    adaptive = true;

console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log(screens.toLowerCase().split(", "));
console.log("Стоимость вёрскти экранов " + screenPrice + " рублей");
console.log("Откат посреднику за работу " + fullPrice * (rollback / 100) + " рублей");

title = prompt("Как называется Ваш проект?");
screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
screenPrice = prompt("Сколько будет стоить данная работа?", "15000");
adaptive = prompt("Нужен ли адаптив на сайте?");

console.log(title);
console.log(screens);
console.log(Number(screenPrice));
console.log(!!adaptive);

let service1 = "Услуга 1",
    service2 = "Услуга 2",
    servicePrice1 = 5000,
    servicePrice2 = 7000;

service1 = prompt("Какой дополнительный тип услуги нужен?", "Услуга 1");
if (service1 == "Услуга 1") {
    console.log(service1);
    console.log(servicePrice1 = +prompt("Сколько это будет стоить?", "5000"));
}

service2 = prompt("Какой дополнительный тип услуги нужен?", "Услуга 2");
if (service2 == "Услуга 2") {
    console.log(service2);
    console.log(servicePrice2 = +prompt("Сколько это будет стоить?", "7000"));
}

fullPrice = Number(screenPrice) + servicePrice1 + servicePrice2;
console.log("Итоговая стоимость работы " + fullPrice + " рублей");

let servicePercentPrice = fullPrice - (fullPrice * (rollback / 100));
console.log("Итоговая стоимость за вычетом отката посреднику " + servicePercentPrice + " рублей");

switch (true) {
    case fullPrice >= 30000:
        console.log("Скидка 10%");
        break;
    case 15000 <= fullPrice && fullPrice <= 30000:
        console.log("Скидка 5%");
        break;
    case 0 <= fullPrice && fullPrice <= 15000:
        console.log("Скидка не предусмотрена");
        break;
    default:
        console.log("Что-то пошло не так");
}