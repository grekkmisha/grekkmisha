'use strict';

const appData = {
    title: "",
    screens: "",
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    service1: "",
    service2: "",

    asking: function () {
        appData.title = prompt("Как называется Ваш проект?", "Yoga skunk");
        appData.screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");

        do {
            appData.screenPrice = Number(prompt("Сколько будет стоить данная работа?"));
        } while (!isNumber(appData.screenPrice));

        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },
};

const isNumber = function (num) {
    return (!isNaN(parseFloat(num)) && isFinite(num));
};

const getAllServicePrices = function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {

        let total;

        if (i === 0) {
            prompt("Какой дополнительный тип услуги нужен?", "Тестирование");
        } else if (i === 1) {
            prompt("Какой дополнительный тип услуги нужен?", "CMS");
        }

        while (!isNumber(total)) {
            total = prompt("Сколько это будет стоить?");
        }
        sum += +total;
    }
    return sum;
};

const getFullPrice = function () {
    return appData.screenPrice + appData.allServicePrices;
};

const getServicePercentPrices = function () {
    return appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
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

appData.asking();
appData.allServicePrices = getAllServicePrices();
appData.fullPrice = getFullPrice();
appData.servicePercentPrice = getServicePercentPrices();
appData.title = getTitle(appData.title);

console.log(appData.fullPrice);
console.log(appData.servicePercentPrice);