import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseInterface, UserInfoInterface } from '../interface/app.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  userList() {
    const url = "http://localhost:1234/api/user/list/"
    return this.http.get<UserInfoInterface[]>(url, {
      params: {
        page: 1,
        count: 10
      } as any
    })
  }

  fetchUserInfo(id: number) {
    const url = `http://localhost:1234/api/user/${id}/`
    return this.http.get<ResponseInterface>(url);
  }

  filterUsers(searchStr: string) {
    const url = "http://localhost:1234/api/user/filter"
    return this.http.get<ResponseInterface>(url, {
      params: {
        searchStr: searchStr
      } as any
    })
  }

  fetchFriendList(id: number) {
    const url = `http://localhost:1234/api/user/${id}/friends/`
    return this.http.get<ResponseInterface>(url);
  }
}
