//  Оголошуємо константи для значень параметрів
const date = "202202";
const format = "json";

// Створюємо змінну-об'єкт класу URL
const myUrl = new URL("https://bank.gov.ua/");

// Встановлюємо шлях (pathname) до API
myUrl.pathname = "NBUStatService/v1/statdirectory/res";

// Додаємо параметри, використовуючи searchParams
myUrl.searchParams.append("date", date);
myUrl.searchParams.set("json", "");

// Виводимо повний URL у консоль
console.log(myUrl.href);
