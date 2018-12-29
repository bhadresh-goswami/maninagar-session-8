import { Component, OnInit } from '@angular/core';
import { CategoryServService } from '../../services/category-serv.service';
import { CategoryModel } from '../../Models/category-model';
import { ResClass } from '../../Models/res-class';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  list: CategoryModel[] = [];
  catModel = new CategoryModel();
  constructor(private catServ: CategoryServService) {

    this.fillData();

  }

  ngOnInit() {
  }
  fillData() {
    this.catServ.GET().subscribe(cats => {
      this.list = cats;
    });

  }

  res = new ResClass();
  onSaveClick() {

    this.catServ.POST(this.catModel).subscribe(res => {
      //console.log(res);
      this.res = res;
      this.fillData();
    });

  }
}
