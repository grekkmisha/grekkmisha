'use strict';

const appData = {
    title: "",
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},

    start: function () {
        appData.asking();
        appData.addPrices();
        appData.getFullPrice();
        appData.getServicePercentPrices();
        appData.getTitle(appData.title);
        appData.logger();
    },

    isNumber: function (num) {
        return (!isNaN(parseFloat(num)) && isFinite(num));
    },

    asking: function () {
        appData.title = prompt("Как называется Ваш проект?", "Калькулятор вёрстки");

        for (let i = 0; i < 2; i++) {
            let name = prompt("Какие типы экранов нужно разработать?");
            let price = 0;

            do {
                price = Number(prompt("Сколько будет стоить данная работа?"));
            } while (!appData.isNumber(price));

            appData.screens.push({ id: i, name: name, price: price });
        }

        for (let i = 0; i < 2; i++) {

            let name = prompt("Какой дополнительный тип услуги нужен?");
            let price;

            while (!appData.isNumber(price)) {
                price = prompt("Сколько это будет стоить?");
            }
            appData.services[name] = +price;
        }

        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },

    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;
        }

        for (let key in appData.services) {
            appData.allServicePrices += appData.services[key];
        }
    },

    getAllServicePrices: function () {
    },

    getFullPrice: function () {
        appData.fullPrice = appData.screenPrice + appData.allServicePrices;
    },

    getServicePercentPrices: function () {
        appData.servicePercentPrice = appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
    },

    getTitle: function (name) {
        const nameWithLowerCase = name.trim().toLowerCase();
        appData.title = nameWithLowerCase.charAt(0).toUpperCase() + nameWithLowerCase.slice(1);
    },

    getRollbackMessage: function (price) {
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
    },

    logger: function () {
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.screens);
    },
};
appData.start();