class LocalStorage {
	data = null;

	setItem(key, value) {
		localStorage.setItem(key, value);
		return this;
	}

	getItem(key) {
		const value = localStorage.getItem(key);
		if (!value) {
			return null;
		}
		return JSON.parse(value);
	}

	deleteItem(key) {
		localStorage.removeItem(key);
		return this;
	}

	deleteAllItems() {
		localStorage.clear();
		return this;
	}
}

// localStorage.setItem('myCat', 'Tom');
// localStorage.getItem('myCat');
// localStorage.removeItem('myCat');
// localStorage.clear();

export default new LocalStorage();
