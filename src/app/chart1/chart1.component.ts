import { Component, OnDestroy, OnInit } from '@angular/core';
import { Chart, registerables } from "chart.js";

@Component({
	selector: 'app-chart1',
	templateUrl: './chart1.component.html',
	styleUrls: ['./chart1.component.scss']
})
export class Chart1Component implements OnInit, OnDestroy {
	chart: any[] = [];

	ngOnInit() {
		this.getBarChart();
		this.doughnutAndPieChart();
		this.MixedChartTypes();
		this.lineChart();
		this.PolarAreaChart();
		this.RadarChart();
	}

	doughnutAndPieChart() {
		Chart.register(...registerables);
		const ctx: HTMLCanvasElement = document.getElementById('pieCharts') as HTMLCanvasElement;
		const existingChart = Chart.getChart(ctx);
		const myChart = new Chart(ctx, {
			type: 'doughnut',
			data: {
				labels: [
					'Red',
					'Blue',
					'Yellow'
				],
				datasets: [{
					label: 'My First Dataset',
					data: [300, 50, 100],
					backgroundColor: [
						'rgb(255, 99, 132)',
						'rgb(54, 162, 235)',
						'rgb(255, 205, 86)'
					],
					hoverOffset: 4
				}]
			},
			options: {
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		})
	}

	RadarChart() {
		Chart.register(...registerables);
		const ctx: HTMLCanvasElement = document.getElementById('radarChart') as HTMLCanvasElement;
		const myChart = new Chart(ctx, {
			type: 'radar',
			data: {
				labels: [
					'Eating',
					'Drinking',
					'Sleeping',
					'Designing',
					'Coding',
					'Cycling',
					'Running'
				],
				datasets: [{
					label: 'My First Dataset',
					data: [65, 59, 90, 81, 56, 55, 40],
					fill: true,
					backgroundColor: 'rgba(255, 99, 132, 0.2)',
					borderColor: 'rgb(255, 99, 132)',
					pointBackgroundColor: 'rgb(255, 99, 132)',
					pointBorderColor: '#fff',
					pointHoverBackgroundColor: '#fff',
					pointHoverBorderColor: 'rgb(255, 99, 132)'
				}, {
					label: 'My Second Dataset',
					data: [28, 48, 40, 19, 96, 27, 100],
					fill: true,
					backgroundColor: 'rgba(54, 162, 235, 0.2)',
					borderColor: 'rgb(54, 162, 235)',
					pointBackgroundColor: 'rgb(54, 162, 235)',
					pointBorderColor: '#fff',
					pointHoverBackgroundColor: '#fff',
					pointHoverBorderColor: 'rgb(54, 162, 235)'
				}]
			},
			options: {
				elements: {
					line: {
						borderWidth: 3
					}
				}
			},
		})
	}

	MixedChartTypes() {
		Chart.register(...registerables);
		const ctx: HTMLCanvasElement = document.getElementById('mixedChartTypes') as HTMLCanvasElement;
		const myChart = new Chart(ctx, {
			type: 'scatter',
			data: {
				labels: [
					'January',
					'February',
					'March',
					'April'
				],
				datasets: [{
					type: 'bar',
					label: 'Bar Dataset',
					data: [10, 20, 30, 40],
					borderColor: 'rgb(255, 99, 132)',
					backgroundColor: 'rgba(255, 99, 132, 0.2)'
				}, {
					type: 'line',
					label: 'Line Dataset',
					data: [50, 50, 50, 50],
					fill: false,
					borderColor: 'rgb(54, 162, 235)'
				}]
			},
			options: {
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		})
	}

	lineChart() {
		Chart.register(...registerables);
		const ctx: HTMLCanvasElement = document.getElementById('lineChart') as HTMLCanvasElement;
		const myChart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: [
					'Red',
					'Blue',
					'Yellow',
					'Pink'
				],
				datasets: [{
					label: 'My First Dataset',
					data: [300, 50, 100, 120],
					backgroundColor: [
						'rgb(255, 99, 132)',
						'rgb(54, 162, 235)',
						'rgb(255, 205, 86)'
					],
				}]
			},
			options: {
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		})
	}

	PolarAreaChart() {
		Chart.register(...registerables);
		const ctx: HTMLCanvasElement = document.getElementById('polarAreaChart') as HTMLCanvasElement;
		const myChart = new Chart(ctx, {
			type: 'polarArea',
			data: {
				labels: [
					'Red',
					'Green',
					'Yellow',
					'Grey',
					'Blue'
				],
				datasets: [{
					label: 'My First Dataset',
					data: [11, 16, 7, 3, 14],
					backgroundColor: [
						'rgb(255, 99, 132)',
						'rgb(75, 192, 192)',
						'rgb(255, 205, 86)',
						'rgb(201, 203, 207)',
						'rgb(54, 162, 235)'
					]
				}]
			},
			options: {
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		})
	}

	getBarChart() {
		Chart.register(...registerables);
		const ctx: HTMLCanvasElement = document.getElementById('barChart') as HTMLCanvasElement;
		const myChart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
				datasets: [{
					label: '# of Votes',
					data: [12, 19, 3, 5, 2, 3],
					backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(255, 206, 86, 0.2)',
						'rgba(75, 192, 192, 0.2)',
						'rgba(153, 102, 255, 0.2)',
						'rgba(255, 159, 64, 0.2)'
					],
					borderColor: [
						'rgba(255, 99, 132, 1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(153, 102, 255, 1)',
						'rgba(255, 159, 64, 1)'
					],
					borderWidth: 2
				}]
			},
			options: {
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		});
	}

	ngOnDestroy() {

	}

}
