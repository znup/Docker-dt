const cron = require("node-cron");
let times = 0;

cron.schedule("1-59/5 * * * * *", () => {
  times++;
  console.log("Tick en cada multiplo de 5: ", times);
});

console.log("inicio de la app");
