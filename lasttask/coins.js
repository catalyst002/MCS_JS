
export class Coin {
	constructor(name, price) {
		this.name = name;
		this.price = price;
		this.count = 0;
	}

	collect() {
		this.count++;
	}

	getValue() {
		return this.price * this.count;
	}
	getMessage() {
		return this.count;
	}
}

export class Ether extends Coin {
	constructor(name, price) {
		super(name, price);
		this.name = "Ether"
		this.price = 3000;
	}
}

export class Bitcoin extends Coin {
	constructor(name, price) {
		super(name, price);
		this.name = "Bitcoin"
		this.price = 50000;
	}
}
