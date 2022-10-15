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

    isNumber: function (num) {
        return (!isNaN(parseFloat(num)) && isFinite(num));
    },

    asking: function () {
        appData.title = prompt("Как называется Ваш проект?", "Yoga skunk");
        appData.screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");

        do {
            appData.screenPrice = Number(prompt("Сколько будет стоить данная работа?"));
        } while (!appData.isNumber(appData.screenPrice));

        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },

    getAllServicePrices: function () {
        let sum = 0;

        for (let i = 0; i < 2; i++) {

            let total;

            if (i === 0) {
                appData.service1 = prompt("Какой дополнительный тип услуги нужен?", "Тестирование");
            } else if (i === 1) {
                appData.service2 = prompt("Какой дополнительный тип услуги нужен?", "CMS");
            }

            while (!appData.isNumber(total)) {
                total = prompt("Сколько это будет стоить?");
            }
            sum += +total;
        }
        return sum;
    },

    getFullPrice: function () {
        return appData.screenPrice + appData.allServicePrices;
    },

    getServicePercentPrices: function () {
        return appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
    },

    getTitle: function (name) {
        const nameWithLowerCase = name.trim().toLowerCase();
        return nameWithLowerCase.charAt(0).toUpperCase() + nameWithLowerCase.slice(1);
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
        for (let key in appData) {
            console.log(key + ": " + appData[key]);
        }
    },

    start: function () {
        appData.asking();
        appData.allServicePrices = appData.getAllServicePrices();
        appData.fullPrice = appData.getFullPrice();
        appData.servicePercentPrice = appData.getServicePercentPrices();
        appData.title = appData.getTitle(appData.title);
        appData.logger();
    },
};
appData.start();