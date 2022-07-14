export default class Wallet {
	constructor() {
		this.coins = [];
	}

	addCoin(coin) {
		this.coins.push(coin);
	}

	getBalance() {
		let summary = 0;
		this.coins.forEach(x => summary += x.getValue());
		return summary;
	}
}
