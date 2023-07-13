const { syncDB } = require("../../tasks/sync-db");

describe("test function Sync-DB", () => {
  test("you must run the process twice", () => {
    syncDB();
    const times = syncDB();
    console.log("was it called?", times);

    expect(times).toBe(2);
  });
});
