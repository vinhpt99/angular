import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  id: number;
  ngay_nhan: string;
  so_to_trinh: number;
  danh_hieu: string;
  nguoi_nop: string;
  don_vi: string;
  hanh_dong: number
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, ngay_nhan: '27/04/2021', so_to_trinh: 0.39444, danh_hieu: 'Bằng khen cấp bộ, ban nghành', nguoi_nop: 'Lê Văn Hải', don_vi: 'Sở xây dựng', hanh_dong: 1},
  {id: 2, ngay_nhan: '21/03/2020', so_to_trinh: 1.0079, danh_hieu:  'Bằng khen cấp sở', nguoi_nop: 'Lê Văn Hải', don_vi: 'Sở xây dựng', hanh_dong: 1},
  {id: 3, ngay_nhan: '27/04/2021', so_to_trinh: 1.0079, danh_hieu:  'Bằng khen cấp huyện', nguoi_nop: 'Lê Văn Hải', don_vi: 'Sở xây dựng', hanh_dong: 1},
  {id: 4, ngay_nhan: '27/04/2021', so_to_trinh: 1.0079, danh_hieu:  'Bằng khen cấp xã', nguoi_nop: 'Lê Văn Hải', don_vi: 'Sở xây dựng', hanh_dong: 1},
  
];
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {
  displayedColumns: string[] = ['id', 'ngay_nhan', 'so_to_trinh', 'danh_hieu', 'nguoi_nop', 'don_vi','hanh_dong'];
  dataSource = ELEMENT_DATA;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onSave() {
    alert('Show button clicked!');
  }
  checkCheckBoxvalue(event: any){
    console.log(event.source.value);
  }

}
