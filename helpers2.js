import prices from "./prices.js";

export const getPrice = (currency) => {
	console.log(prices);
	console.log(currency);
	switch (currency) {
		case "usd":
			return prices.ethereum.usd ?? "Нет данных";
		case "eur":
			return prices.ethereum.eur ?? "Нет данных";
		case "rub":
			return prices.ethereum.rub ?? "Нет данных";
		case "gbp":
			return prices.ethereum.gbp ?? "Нет данных";
		case "jpy":
			return prices.ethereum.jpy ?? "Нет данных";
	}
};
