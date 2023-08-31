// export const calcAnim = () => {
// 	const stats = {
// 		power: 12.0,
// 		energy: 10.0,
// 		luck: 23.4,

// 		renderStat: (stat) => { },
// 	};
// };
const powerEl = document.querySelector("#power");
const energyEl = document.querySelector("#energy");
const luckEl = document.querySelector("#luck");
const scoreEl = document.querySelector("#score");
const summEl = document.querySelector("#summ");
export class CalcStats {
	constructor(
		powerStat,
		energyStat,
		luckStat,
		scorePoint,
		staticScore,
		totalSumm
	) {
		this.stats = {
			power: powerStat,
			energy: energyStat,
			luck: luckStat,
		};
		this.staticScore = staticScore;
		this.score = scorePoint;
		this.summ = totalSumm;
	}
	render() {
		powerEl.textContent = this.stats.power.toFixed(1);
		energyEl.textContent = this.stats.energy.toFixed(1);
		luckEl.textContent = this.stats.luck.toFixed(1);
		scoreEl.textContent =
			this.score.toFixed(1) == 0.0 ? 0 : `+${this.score.toFixed(1)}`;
		summEl.textContent = `$${this.summ.toFixed(0)}`;
	}
	setStat() {
		return {
			stats: this.stats,
			score: this.score,
			summ: this.summ,
		};
	}

	statPlus(stat) {
		if (this.score.toFixed(1) > 0) {
			this.stats[stat] += 0.1;
			this.score -= 0.1;
			this.summ += 0.1;
			this.render();
		}
	}
	statMinus(stat) {
		if (this.score.toFixed(1) < this.staticScore) {
			this.stats[stat] -= 0.1;
			this.score += 0.1;
			this.summ -= 0.1;
			this.render();
		}
	}
}
