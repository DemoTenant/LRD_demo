load.initialize(async function () {
});

load.action("Action", async function () {
    // 2 pages + 40 resources (by 20 per page)
    load.WebRequest.defaults.headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
        "Connection": "Keep-Alive",
        "Accept-Language": "en-US,en;q=0.8",
        "Accept-Encoding": "gzip, deflate, sdch",
        "Accept": "*/*"
    };

    let T01 = new load.Transaction("Login");
    let T02 = new load.Transaction("Search");
    let T03 = new load.Transaction("Order");
    let T04 = new load.Transaction("Logout");

    let status01 = (Math.floor(Math.random() * 30) + 1) > 29 ? load.TransactionStatus.Failed : load.TransactionStatus.Passed;
    let status02 = (Math.floor(Math.random() * 30) + 1) > 29 ? load.TransactionStatus.Failed : load.TransactionStatus.Passed;
    let status03 = (Math.floor(Math.random() * 30) + 1) > 29 ? load.TransactionStatus.Failed : load.TransactionStatus.Passed;
    let status04 = (Math.floor(Math.random() * 30) + 1) > 29 ? load.TransactionStatus.Failed : load.TransactionStatus.Passed;

    let time01 = Math.floor(Math.random() * 4000) + 1000;   // returns a random in range 1000-5000
    let time02 = Math.floor(Math.random() * 3500) + 500;    // returns a random in range 500-4000
    let time03 = Math.floor(Math.random() * 7000) + 3000;   // returns a random in range 3000-10000
    let time04 = Math.floor(Math.random() * 6000) + 2000;   // returns a random in range 2000-8000

    T01.set(status01, time01);
    T02.set(status02, time02);
    T03.set(status03, time03);
    T04.set(status04, time04);
});

load.finalize(async function () {
});
