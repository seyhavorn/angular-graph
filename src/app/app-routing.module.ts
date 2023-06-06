import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Chart3Component } from "./chart3/chart3.component";
import { Chart1Component } from "./chart1/chart1.component";
import { Chart2Component } from "./chart2/chart2.component";
import { Chart4Component } from "./chart4/chart4.component";
import { Chart5Component } from "./chart5/chart5.component";

const routes: Routes = [
	{
		path: '',
		component: Chart1Component
	},
	{
		path: 'chart2',
		component: Chart2Component
	},
	{
		path: 'chart3',
		component: Chart3Component
	},
	{
		path: 'chart4',
		component: Chart4Component
	},
	{
		path: 'chart5',
		component: Chart5Component
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
