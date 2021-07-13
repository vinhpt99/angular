import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { DataService } from "../common/shared.service";
@Component({
  selector: 'app-update-assessment',
  templateUrl: './update-assessment.component.html',
  styleUrls: ['./update-assessment.component.css'],
})

export class UpdateAssessmentComponent implements OnInit {
  constructor(public dataServ:DataService) {
    // this.sharedService.comp2Val = "Component 2 initial value";
  }
 




 
  ngOnInit(): void {
     const test = this.dataServ.assessment;
     console.log(this.dataServ.test);
  }

}
