import prices from "./prices.js"

export const getPrice = (currency) => {
	console.log(prices)
	console.log(currency)
	switch (currency) {
		case "usd":
			return prices.ethereum.usd;
		case "eur":
			return prices.ethereum.eur;
		case "rub":
			return prices.ethereum.rub;
	}
}
