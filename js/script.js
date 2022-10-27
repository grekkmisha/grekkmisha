'use strict';

const title = document.getElementsByTagName("h1")[0],
    [startButton, resetButton] = document.getElementsByClassName("handler_btn"),
    plusButton = document.querySelector(".screen-btn"),
    otherItemPercent = document.querySelectorAll(".percent"),
    otherItemNumber = document.querySelectorAll(".number"),
    inputTypeRange = document.querySelector(".rollback input"),
    rangeValue = document.querySelector(".rollback .range-value"),
    [layoutCost,
        totalScreens,
        addServicesCost,
        totalCost,
        costWithRollback] = document.getElementsByClassName("total-input");
// screenInput = document.querySelector(".screen input"),
// screenSelect = document.querySelector(".screen select");
let screens = document.querySelectorAll(".screen");

// console.dir(screenSelect);
// console.dir(screenInput);

const appData = {
    title: "",
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    totalScreens: 0,
    init: function () {
        appData.addTitle();
        startButton.addEventListener('click', function () {
            if (appData.validation() === true) {
                appData.start();
            }
        });
        // startButton.addEventListener('click', appData.start);
        plusButton.addEventListener('click', appData.addScreenBlock);
        inputTypeRange.addEventListener('input', appData.changerRollback);
    },

    validation: function () {
        let select = '',
            input = '';

        screens.forEach(function (item) {
            select = item.querySelector('select');
            input = item.querySelector('input');
        });
        if (select.value === '' || input.value === '') {
            return false;
        } else {
            return true;
        }
    },

    addTitle: function () {
        document.title = title.textContent;
    },

    start: function () {
        appData.addScreens();
        appData.addServices();
        appData.addPrices();
        appData.showResult();
    },

    showResult: function () {
        layoutCost.value = appData.screenPrice;
        addServicesCost.value = appData.servicePricesPercent + appData.servicePricesNumber;
        totalCost.value = appData.fullPrice;
        costWithRollback.value = appData.servicePercentPrice;
        totalScreens.value = appData.totalScreens;
    },

    addScreens: function () {
        screens = document.querySelectorAll(".screen");

        screens.forEach(function (screen, index) {
            const select = screen.querySelector('select'),
                input = screen.querySelector('input'),
                selectName = select.options[select.selectedIndex].textContent;

            appData.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value,
                count: +input.value
            });
        });
    },

    addServices: function () {
        otherItemPercent.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                appData.servicesPercent[label.textContent] = +input.value;
            }
        });

        otherItemNumber.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value;
            }
        });
    },

    addScreenBlock: function () {
        const cloneScreen = screens[0].cloneNode(true);
        screens[screens.length - 1].after(cloneScreen);
    },

    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;
        }

        for (let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key];
        }

        for (let key in appData.servicesPercent) {
            appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100);
        }

        appData.fullPrice = +appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;

        appData.servicePercentPrice = appData.fullPrice - appData.fullPrice * (appData.rollback / 100);

        appData.totalScreens = appData.screens.reduce(function (sum, item) {
            return sum + item.count;
        }, 0);
    },

    changerRollback: function (e) {
        rangeValue.textContent = e.target.value + '%';
        appData.rollback = +e.target.value;
    },
};
appData.init();