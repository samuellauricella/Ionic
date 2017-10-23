import {Component, OnChanges, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {Observable} from "rxjs/Observable";
import {User} from "../../models/user";
import {UsersService} from "../../services/users-service";
import {AppStore} from "../../models/appStore";
import {Store} from '@ngrx/store';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/find'

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage{
  users:Observable<Array<User>>;
  selected:Observable<User>;
  individualSelected:any;
  searchedUser:any;
  clicker:boolean = false;
  clickNumber;


  constructor(public navCtrl: NavController,
              private http: Http,
              private usersService:UsersService,
              private store: Store<AppStore>,
) {

    this.users = usersService.users;
    this.selected = store.select('selectedUser')
    this.selected.subscribe(v =>this.individualSelected = v)
    usersService.loadUsers();
    
  }

  selectedUser(user){
    this.store.dispatch({type: 'SELECT_USER', payload: user});
  }

   getItems(event){
     this.searchedUser = ''
       this.users.subscribe((user)=>{
         user.filter((x)=>{
           if(x.login == event.target.value) {
             this.searchedUser = Object.assign({}, x)
           }
         })
       })
   }


   onClick(number,user){
     this.http.get(`https://api.github.com/users/${user}`).map(res=> console.log)
     this.clickNumber = number
     this.clicker = !this.clicker

   }

}
