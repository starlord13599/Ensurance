class FlashState {
	flashMesssages = {};

	getFlash() {
		if (this.flashMesssages.message) {
			let message = this.flashMesssages.message;
			delete this.flashMesssages.message;
			return message;
		}
		return null;
	}

	setFlash(message) {
		this.flashMesssages.message = message;
		return this;
	}
}
export default new FlashState();
