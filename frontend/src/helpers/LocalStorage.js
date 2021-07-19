class LocalStorage {
	setItem(key, value) {
		localStorage.setItem(key, value);
		return this;
	}

	getItem(key) {
		const value = localStorage.getItem(key);

		if (!value) {
			return null;
		}
		return value;
	}

	deleteItem(key) {
		localStorage.removeItem(key);
		return this;
	}

	deleteAllItems() {
		localStorage.clear();
	}
}

// localStorage.setItem('myCat', 'Tom');
// localStorage.getItem('myCat');
// localStorage.removeItem('myCat');
// localStorage.clear();

export default new LocalStorage();
