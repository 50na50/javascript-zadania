function Ladder(steps) {
    this.steps = steps;
    this.where = 0;
    this.climb = () => {
        if(this.where > 0) {
            console.log("Musisz najpierw zejść z drabiny");
        } else {
            console.log("Rozpoczynasz wchodzenie na drabine");
            for(var i = 0; i<=this.steps; i++) {
                console.log("Stopien " + this.where++);
            }
        }
      console.log(this.where);
    }

    this.getOff = () => {
        if(this.where == 0) {
            console.log("Musisz najpierw wejść na drabine");
        } else {
            console.log("Rozpoczynasz schodzenie z drabiny");
            for(var i; i<=this.steps; i++) {
                console.log("Stopień " + this.where--);
            }
        }
    }
}

const newLadder = new Ladder(10);

newLadder.climb();
newLadder.climb();

newLadder.getOff();
newLadder.getOff();
console.log("Zrobione");
