'use strict';
let title,
    screens,
    screenPrice,
    adaptive,
    rollback = 10,
    allServicePrices,
    fullPrice,
    servicePercentPrice,
    service1,
    service2;

const isNumber = function (num) {
    return (!isNaN(parseFloat(num)) && isFinite(num));
};

const asking = function () {
    title = prompt("Как называется Ваш проект?", "Yoga skunk");
    screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");

    // screenPrice = prompt("Сколько будет стоить данная работа?");

    // while (!isNumber(screenPrice)) {
    //     screenPrice = prompt("Сколько будет стоить данная работа?");
    // }

    do {
        screenPrice = Number(prompt("Сколько будет стоить данная работа?"));
    } while (!isNumber(screenPrice));

    adaptive = confirm("Нужен ли адаптив на сайте?");
};

const getAllServicePrices = function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            prompt("Какой дополнительный тип услуги нужен?", "Тестирование");
        } else if (i === 1) {
            prompt("Какой дополнительный тип услуги нужен?", "CMS");
        }

        let total;

        while (!isNumber(total)) {
            total = prompt("Сколько это будет стоить?");
        }

        sum += +total;

    }
    return sum;
};

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
};

const getFullPrice = function () {
    return screenPrice + allServicePrices;
};

const getServicePercentPrices = function () {
    return fullPrice - fullPrice * (rollback / 100);
};

const getTitle = function (name) {
    const nameWithLowerCase = name.trim().toLowerCase();
    return nameWithLowerCase.charAt(0).toUpperCase() + nameWithLowerCase.slice(1);
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

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle(title);

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log("allServicePrices", allServicePrices);
console.log(screens.toLowerCase().split(", "));
console.log(getRollbackMessage(fullPrice));