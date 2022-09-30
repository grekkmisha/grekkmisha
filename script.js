const title = "Yoga skunk",
    screens = "Простые, Сложные, Интерактивные",
    screenPrice = "Стоимость вёрскти экранов " + 15000 + " рублей",
    rollback = 10,
    fullPrice = "Стоимость разработки сайта " + 100000 + " рублей",
    adaptive = true;

console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log(screens.toLowerCase().split(", "));
console.log(screenPrice);
console.log("Откат посреднику за работу " + 10000 * (10 / 100) + " рублей");