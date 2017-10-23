import {Injectable} from '@angular/core';
import {User} from "../models/user";
import {Observable} from "rxjs/Observable";
import {Store} from '@ngrx/store';
import {AppStore} from "../models/appStore";
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map'

const BASE_URL = 'https://api.github.com/users';

@Injectable()
export class UsersService {
  users: Observable<Array<User>>;
  userProfile;

  constructor(private http: Http, private store: Store<AppStore>) {
    this.users = store.select('users')
  }

  loadUsers() {
    this.http.get(BASE_URL)
      .map(res => res.json())
      .map(payload => ({type: 'ADD_USERS', payload}))
      .subscribe(action => this.store.dispatch(action));
  }



  loadUserRepos(user){
    this.http.get(`https://api.github.com/users/${user.login}`)
  }

}
