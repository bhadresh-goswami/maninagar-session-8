import { Injectable } from '@angular/core';

import { Observable, ObservableInput } from '../../../node_modules/rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CategoryModel } from '../Models/category-model';
import { ResClass } from '../Models/res-class';
@Injectable({
  providedIn: 'root'
})
export class CategoryServService {

  url = 'http://localhost/apitest/category.php?method=';
  constructor(private http: HttpClient) { }



  public GET(): Observable<CategoryModel[]> {

    return this.http.get<CategoryModel[]>(this.url + "GET");

  }

  public POST(model:CategoryModel): Observable<ResClass> {

    return this.http.post<ResClass>(this.url + "POST",{
      name:model.name
    });

  }
}
