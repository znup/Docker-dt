let times = 0;

const syncDB = () => {
  times++;
  console.log("Tick en cada multiplo de 5: ", times);
  return times;
};
module.exports = {
  syncDB,
};
