const Web3 = require("web3");
const web3 = new Web3(
	new Web3.providers.WebsocketProvider("ws://" + "127.0.0.1" + ":" + "8546")
);

const newAccount = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    const x = await web3.eth.personal.newAccount("hello123");
    console.log(x);
	console.log(
		await web3.eth.sendTransaction(
			{
				from: accounts[0],
				to: x,
				gas: "1000000",
				value: "9999",
				data: "",
			},
			"mypc@0806"
		)
	);
};

newAccount();
