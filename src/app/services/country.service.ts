import { Injectable } from '@angular/core';
import { CountryModel } from '../Models/country-model';
import { Observable, ObservableInput } from '../../../node_modules/rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CountryData } from '../Models/country-data';
@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  private countryList: CountryModel[] = [
    { countryId: 1, countryName: "India", code: "" },
    { countryId: 2, countryName: "USA", code: "" },
    { countryId: 3, countryName: "UK", code: "" },
    { countryId: 4, countryName: "Other", code: "" },
  ];
  public EditId: ObservableInput<number>;

  public getList(): CountryModel[] {
    return this.countryList;
  }

  public getDetails(id: number): CountryModel {
    //this.EditId = id;
    // console.log(id);
    // var data = this.countryList.find(this.findById);
    // console.log(data);
    var data = new CountryModel();
    this.countryList.forEach(element => {
      if (element.countryId == id) {
        data = element;

      }
    });
    return data;
  }



  public getC(): Observable<CountryData[]> {

    return this.http.get<CountryData[]>("https://restcountries.eu/rest/v2/all");

  }

  //   private findById(item:CountryModel){
  //     console.log(this.EditId);
  // console.log(item);
  //     return item.countryId == this.EditId;
  //   }
}
