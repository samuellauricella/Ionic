import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {Observable} from "rxjs/Observable";
import {User} from "../../models/user";
import {UsersService} from "../../services/users-service";
import {AppStore} from "../../models/appStore";
import {Store} from '@ngrx/store';
import {selectedUser} from "../../store/selected-user-reducer";
import {Http} from "@angular/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{

  users:Observable<Array<User>>;
  selected:Observable<User>;
  individualSelected:any;


  constructor(public navCtrl: NavController,
              private http: Http,
              private usersService:UsersService,
              private store: Store<AppStore>
              ) {

    this.users = usersService.users;
    this.selected = store.select('selectedUser')
    this.selected.subscribe(v =>this.individualSelected = v)
    usersService.loadUsers()
  }


  selectedUser(user){
    this.store.dispatch({type: 'SELECT_USER', payload: user});
  }


}
