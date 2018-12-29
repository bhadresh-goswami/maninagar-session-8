import { Component, OnInit } from '@angular/core';
import { CountryModel } from '../../../Models/country-model';
import { CountryService } from '../../../services/country.service';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-countryedit',
  templateUrl: './countryedit.component.html',
  styleUrls: ['./countryedit.component.css']
})
export class CountryeditComponent implements OnInit {

  editID = 0;
  country: CountryModel = new CountryModel();
  constructor(
    private countryServ: CountryService,
    private route: ActivatedRoute,
    private router: Router, ) {

  }

  ngOnInit() {

    var Id = parseInt(this.route.snapshot.paramMap.get('id').toString());
    this.country = this.countryServ.getDetails(Id);
    //  this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //   this.editID = parseInt( params.get('id').toString());
    // );


    console.log("your data is:" + this.country);


  }

}
