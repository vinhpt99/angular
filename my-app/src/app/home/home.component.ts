import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpResponse } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  products: any = [];
  constructor(private dataService: DataService) { }
  dataSource = new MatTableDataSource();
  ngOnInit(): void {
    this.dataService.sendGetRequest().subscribe(data =>{
          // this.getAllStudents()
          this.products = data;
     })

  
  }
  getAllStudents() {
    this.dataService.getList().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }
  deleteProduct(id){
    this.dataService.deleteItem(id).subscribe((response: any) => {
      this.products = this.products.filter((o: Product) => {
        return o.id !== id ? o : false;
      })

      alert("Xóa thành công");
    });
  }
 

}
