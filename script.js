'use strict';

const title = "Yoga skunk",
    screens = "Простые, Сложные, Интерактивные",
    screenPrice = 15000,
    rollback = 10,
    fullPrice = 27000,
    adaptive = true,
    service1 = "Тестирование",
    service2 = "CMS",
    servicePrice1 = 5000,
    servicePrice2 = 7000,
    servicePercentPrice = fullPrice - (fullPrice * (rollback / 100));

prompt("Как называется Ваш проект?", "Yoga skunk");
prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
prompt("Сколько будет стоить данная работа?", "15000");
prompt("Нужен ли адаптив на сайте?");
prompt("Какой дополнительный тип услуги нужен?", "Тестирование");
prompt("Сколько это будет стоить?", "5000");
prompt("Какой дополнительный тип услуги нужен?", "CMS");
prompt("Сколько это будет стоить?", "7000");

switch (true) {
    case 0 <= fullPrice && fullPrice <= 15000:
        console.log("Скидка не предусмотрена");
        break;
    case 15000 < fullPrice && fullPrice <= 30000:
        console.log("Скидка 5%");
        break;
    case fullPrice > 30000:
        console.log("Скидка 10%");
        break;
    default:
        console.log("Что-то пошло не так");
}

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
console.log("Итоговая стоимость работы " + Number(screenPrice + servicePrice1 + servicePrice2) + " рублей");
console.log("Итоговая стоимость за вычетом отката посреднику " + servicePercentPrice + " рублей");