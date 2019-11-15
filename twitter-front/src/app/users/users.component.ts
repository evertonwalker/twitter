import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FollowService } from '../follow.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = [];
  idFollows = new Set<number>();
  hasUser = false;

  constructor(private userService: UserService, private followService: FollowService) { }

  ngOnInit() {

    this.userService.getAllUsers(1)
      .subscribe(r => {
        this.users = r.result;
        this.userService.getAllUsersFollow(1)
          .subscribe(rFollows => {
            rFollows.results.forEach(element => {
              this.idFollows.add(element.fk_another_user);
            });
            this.hasUser = true;
          });
      }, error => console.log(error));
  }


  followUser(id: number): void {
    this.followService.followUser(1, id)
      .subscribe(() => {
        this.idFollows.add(id);
      }, error => console.log(error));
  }

  unfollowUser(id: number): void {
    this.followService.unfollowUser(1, id)
      .subscribe(() => {
        this.idFollows.delete(id);
      }, error => console.log(error));
  }

  hasFollow(id: number): boolean {
    return !this.idFollows.has(id);
  }

}
