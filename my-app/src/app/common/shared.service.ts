import { Injectable } from '@angular/core';
export interface PeriodicElement {
    id: number;
    received_date: string;
    number_of_reports: string;
    emulation_title: string;
    submitter      : string;
    unit           : string;
    
   
  }
const ELEMENT_DATA: PeriodicElement[] = [
    {id: 1, received_date: '27/04/2021', number_of_reports: '039444', 
    emulation_title: 'Giấy khen cấp huyện, sở, nghành và tương đương', submitter: 'Lê Văn Hải',unit: 'Phòng nội vụ'},
    {id: 2, received_date: '21/03/2020', number_of_reports: '039489',
     emulation_title: 'Tặng danh hiệu Lao động tiên tiến', submitter: 'Lê Thị Mai', unit: 'Phòng tư pháp'},
    {id: 3, received_date: '23/04/2019', number_of_reports: '039487',
     emulation_title: 'Tặng danh hiệu Chiến sĩ thi đua', submitter:'Trần Văn Cường', unit: 'Phòng nội vụ'},
  ];
const result : string[] = ['44534t'];
@Injectable({
  providedIn: 'root',
})
export class DataService {
    public value;
    public assessment;
    public idCheck;
    test  = result;
    displayedColumns: string[] = ['checkbox', 'received date', 'number of reports', 'emulation title', 'submitter', 'unit', 'action'];
 
    dataSource = ELEMENT_DATA;

    getData(id){
        this.idCheck = id;
     }
    onEdit($event){    
       this.assessment =  this.dataSource.find(data => data.id == this.idCheck); 
       result.push('ptv');
     
     }
}