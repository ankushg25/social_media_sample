import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { map, startWith } from 'rxjs/operators';
import { UserInfoInterface } from './interface/app.interface';
import { AuthService } from './service/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dataSource: UserInfoInterface[] = [];
  displayedColumns = ['id', 'name', 'avatar'];
  searchList = [];
  searchStr = new FormControl('');
  filteredOptions: UserInfoInterface[] = [];

  friendList: UserInfoInterface[] = [];

  constructor(
    private userListService: AuthService,
  ) {
    // this.userListService.userList().subscribe(data => {
    //   this.dataSource = data;
    // });

    this.searchStr.valueChanges.pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.name),
    ).subscribe(name => this.userListService.filterUsers(name).subscribe(response => {
      this.filteredOptions = response.response;
    }));
  }

  displayFn(user: UserInfoInterface) {
    return user ? `${user.fname} ${user.lname}` : '';
  }

  fetchUserInfo(event) {
    const value = event.option.value;

    // Fetch the selected User information
    this.userListService.fetchUserInfo(value.id).subscribe(data => {
      this.dataSource = data.response;
    });

    // Fetch the selected User Friend List
    this.userListService.fetchFriendList(value.id).subscribe(data => {
      this.friendList = data.response;
    });

  }
}
