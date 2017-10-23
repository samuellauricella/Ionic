import {User} from "./user";

export interface AppStore {
  users: User[];
  selectedUser: User,
  searchedUser?: any,
}
