import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-common-dropdown',
  templateUrl: './common-dropdown.component.html',
  styleUrls: ['./common-dropdown.component.css']
})
export class CommonDropdownComponent implements OnInit {

  @Input() selectedUser: String = '';
  @Input() userList: Array<String> = [];

  @Output() onUserSelectCallback = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onUserSelect(value: any) {
    this.onUserSelectCallback.emit(value.target.value);
  }

}
