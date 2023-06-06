import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from "chart.js";

@Component({
	selector: 'app-chart2',
	templateUrl: './chart2.component.html',
	styleUrls: ['./chart2.component.scss']
})
export class Chart2Component implements OnInit {
	@ViewChild('floatingBarsCanvas') floatingBarsCanvas!: ElementRef<HTMLCanvasElement>;
	private chart!: Chart;

	ngOnInit(): void {
		this.getFloatingBars();
	}

	getFloatingBars(): void {
		console.log(this.generateLabels(3));
		// const DATA_COUNT = 7;
		//
		// const labels = this.generateLabels(DATA_COUNT);
		// const datasets = [
		// 	{
		// 		label: 'Dataset 1',
		// 		data: this.generateRandomData(DATA_COUNT),
		// 		backgroundColor: 'rgba(255, 99, 132, 0.5)'
		// 	},
		// 	{
		// 		label: 'Dataset 2',
		// 		data: this.generateRandomData(DATA_COUNT),
		// 		backgroundColor: 'rgba(50,157,229,0.5)'
		// 	}
		// ];
		//
		// Chart.register(...registerables);
		// const ctx = this.floatingBarsCanvas.nativeElement.getContext('2d');
		// if (this.chart) {
		// 	this.chart.destroy();
		// }
		// this.chart = new Chart(ctx, {
		// 	type: 'bar',
		// 	data: {labels, datasets},
		// 	options: {
		// 		responsive: true,
		// 		plugins: {
		// 			legend: {
		// 				position: 'top'
		// 			},
		// 			title: {
		// 				display: true,
		// 				text: 'Chart.js Floating Bar Chart'
		// 			}
		// 		}
		// 	}
		// });
	}

	private generateLabels(count: number): string[] {
		const monthNames = [
			'January', 'February', 'March', 'April', 'May', 'June', 'July',
			'August', 'September', 'October', 'November', 'December'
		];

		return monthNames.slice(0, count);
	}

	private generateRandomData(count: number): number[][] {
		const data: number[][] = [];
		for (let i = 0; i < count; i++) {
			data.push([this.randomNumber(-100, 100), this.randomNumber(-100, 100)]);
		}
		return data;
	}

	private randomNumber(min: number, max: number): number {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

}
