'use strict';
let title = prompt("Как называется Ваш проект?", "Yoga skunk"),
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

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
};

const getRollbackMessage = function (price) {
    switch (true) {
        case price > 30000:
            return "Скидка 10%";
        case price > 15000:
            return "Скидка 5%";
        case price >= 0:
            return "Скидка не предусмотрена";
        default:
            return "Что-то пошло не так";
    }
};

const getAllServicePrices = function (price1, price2) {
    return price1 + price2;
};

function getFullPrice(price1, price2) {
    return price1 + price2;
}

const getTitle = function (name) {
    const nameWithLowerCase = name.trim().toLowerCase();
    return nameWithLowerCase.charAt(0).toUpperCase() + nameWithLowerCase.slice(1);
};

const getServicePercentPrices = function () {
    return fullPrice - fullPrice * (rollback / 100);
};

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

getAllServicePrices(servicePrice1, servicePrice2);
const allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

getFullPrice(screenPrice, allServicePrices);

title = getTitle(title);

servicePercentPrice = getServicePercentPrices();

console.log(screens.toLowerCase().split(", "));
console.log(getRollbackMessage(fullPrice));
console.log(getAllServicePrices(servicePrice1, servicePrice2));