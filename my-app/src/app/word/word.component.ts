import { Component, OnInit } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';
const   arrWord = [
  {id: 1, en: 'action',   vn: 'hành động', memorized: true},
  {id: 2, en: 'actor',    vn: 'diễn viên', memorized: false},
  {id: 3, en: 'activity', vn: 'hoạt động', memorized: true},
  {id: 4, en: 'active',   vn: 'chủ động',  memorized: true},
  {id: 5, en: 'bath',     vn: 'tắm',       memorized: false},
  {id: 6, en: 'bedroom',  vn: 'phòng ngủ', memorized: true},
 ];
@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
  newEn = '';
  newVn = '';
  isShowForm = false;

  dataSource =  arrWord;
  constructor() { }

  ngOnInit(): void {
  }
  addWord(){
     this.dataSource.unshift({
       id:this.dataSource.length + 1,
       en:this.newEn,
       vn:this.newVn,
       memorized: false,
     });
     this.newVn = '';
     this.newEn = '';
     this.isShowForm = false;
  }
}
