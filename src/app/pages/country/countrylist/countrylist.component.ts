import { Component, OnInit } from '@angular/core';
import {CountryService} from '../../../services/country.service';
import { CountryModel } from '../../../Models/country-model';
import { CountryData } from '../../../Models/country-data';
@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrls: ['./countrylist.component.css']
})
export class CountrylistComponent implements OnInit {

  list:CountryModel[] = [];
  listdata:CountryData[] = [];
  constructor(private countryServ:CountryService) { 

    countryServ.getC().subscribe(data=>{
      this.listdata = data;
    });


  }

  ngOnInit() {
    console.log(this.countryServ.getList());
    this.list = this.countryServ.getList();
  }

}
