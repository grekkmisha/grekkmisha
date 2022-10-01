const title = "Yoga skunk",
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