export function getNextAge(age) {
	if (age == "") {
		return 0;
	} else {
		return parseInt(age, 10) + 1;
	}
}
