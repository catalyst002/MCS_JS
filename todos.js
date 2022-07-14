export default class Todos {


	constructor() {
		this.todos = [
			{
				title: "Изучить Solidity",
				category: "работа"
			},
			{
				title: "Продлить Netflix",
				category: "личное"
			}
		]
	}


	getAll() {
		return this.todos;
	}

	getCount() {
		return this.todos.length;
	}

	add(title, category) {
		this.todos.push({ title, category });
	}

	getWork() {
		return this.todos.filter(x => x.category == "работа");
	}

	getWorkCount() {
		let workcnt = 0;
		this.todos.filter(x => x.category == "работа").forEach(x => workcnt += 1);
		return workcnt;
	}

	getPersonal() {
		return this.todos.filter(x => x.category == "личное");
	}

	getPersonalCount() {
		let perscnt = 0;
		this.todos.filter(x => x.category == "личное").forEach(x => perscnt += 1);
		return perscnt;
	}
}
