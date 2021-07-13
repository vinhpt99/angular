import { Component, OnInit } from '@angular/core';
import { DataService } from "../common/shared.service";


@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css'],

})
export class AssessmentComponent implements OnInit {
 
 
 

  constructor(public dataServ:DataService) { 
       
  }




  ngOnInit(): void {
     
  }
  

  
  
}
