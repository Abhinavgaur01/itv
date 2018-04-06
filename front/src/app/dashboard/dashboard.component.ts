import { Component, OnInit } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private http:Http) { }
   TV = [];
   ids = ["tt1520211","tt6845390","tt0413573","tt5580540","tt0944947","tt2708480","tt0094540","tt4276624","tt1796960","tt0475784","tt0460681","tt3107288","tt2193021","tt2364582","tt2357547","tt5420376","tt4270492","tt4052886","tt3749900","tt1632701","tt5615700","tt1586680","tt0452046","tt2306299","tt5555260","tt2085059","tt1442437","tt7221388","tt4834206","tt2261391","tt4532368","tt4574334","tt0386676","tt0108778","tt2741602","tt2788432","tt3865236","tt2442560","tt6468322","tt2261227","tt0364845","tt2861424","tt0898266","tt0203259","tt2467372","tt5011816","tt5296406","tt5834204","tt5511582","tt5664952","tt2575988","tt6470478","tt7053188","tt1843230","tt1837576","tt6873658","tt6483832","tt2661044","tt0106179","tt5348176","tt3205802","tt4604612","tt0903747","tt4643084","tt6712390","tt2149175","tt6461812","tt1837492","tt4061080","tt1378167","tt4124758","tt1844624","tt3501584","tt4145054","tt4786824","tt3743822","tt2712740","tt0157246","tt6297682","tt1600194","tt5853176","tt2372162","tt1405406","tt7879820","tt4016454","tt1124373","tt2707408","tt0460649","tt0436992","tt0108757","tt3566726","tt6916746","tt7768848","tt3032476","tt5114356","tt3006802","tt5827228","tt1826940","tt6487416","tt6466948"];
  ngOnInit() {
  	for(let i in this.ids){
  		//console.log(this.ids[i]);
  		this.getTv(this.ids[i]).subscribe(results => {
	  		this.TV.push(results);
	  		console.log(this.TV);
	  	},err => {
	  		console.log(err);
	  		return false;
	  	});	
  	}
  }

  getTv(id) {
    return this.http.get("http://www.omdbapi.com/?i="+id+"&apikey=b2050134")
    .map(response => response.json());
  }	
}
