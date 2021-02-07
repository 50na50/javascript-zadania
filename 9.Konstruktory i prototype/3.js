function RND() {
	this.changeNumber = () => {
		RND.prototype.interval = setInterval(() => {
			RND.prototype.num = Math.round(Math.random() * 10);
			console.log(RND.prototype.num);
		}, 1000);
	};
	this.isMoreThan5 = () => {
		RND.prototype.check = setInterval(() => {
			if (RND.prototype.num > 5) {
        console.log("Większa niż 5, koniec");
				clearInterval(RND.prototype.interval);
				clearInterval(RND.prototype.check);
			}
		}, 1000);
	};
}
const randNumChange = new RND();
const randNumCheck = new RND();
randNumChange.changeNumber();
randNumCheck.isMoreThan5();
