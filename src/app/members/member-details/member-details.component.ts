import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/_models/user';
import { AlertifyServiceService } from 'src/app/_services/AlertifyService.service';
import { UserService } from 'src/app/_services/user.service';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import * as $ from 'jquery';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {

  user: User;

  constructor(private userservice: UserService, private alertify: AlertifyServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.loadUser();
    this.route.data.subscribe(data => {
      this.user = data['user'];
    });
  }

  ngAfterViewInit() {
    this.initializeTabs();
  }

  private initializeTabs() {
    $('.nav-tabs a').on('click', function (e) {
      e.preventDefault();
      $(this).tab('show');
    });
  }

  // loadUser(){
  //   this.userservice.getUser(+this.route.snapshot.params['id']).subscribe((user: User) => {
  //     this.user = user;
  //   }, error => {
  //     this.alertify.error(error);
  //   })
  // }

}
