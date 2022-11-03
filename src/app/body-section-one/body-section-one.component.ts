import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-section-one',
  templateUrl: './body-section-one.component.html',
  styleUrls: ['./body-section-one.component.css']
})
export class BodySectionOneComponent implements OnInit {

  selectedUserName: String = 'User one';
  
  selectedUser: String = 'User one';

  userList: Array<String> = ['User one','User two','User three','User four','User five'];

  constructor() { }

  ngOnInit(): void {
  }

  onUserSelectHandler(value: String){
    this.selectedUserName = value;
  }
}
