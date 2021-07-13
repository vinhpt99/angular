import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpResponse } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';

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
          this.products = data;
     })
  }
  deleteProduct(id) {
    this.dataService.deleteItem(id).subscribe((response: any) => {

      // Approach #1 to update datatable data on local itself without fetching new data from server
      this.dataSource.data = this.dataSource.data.filter((o: Student) => {
        return o.id !== id ? o : false;
      })

      console.log(this.dataSource.data);

      // Approach #2 to re-call getAllStudents() to fetch updated data
      // this.getAllStudents()
    });
  }

}
