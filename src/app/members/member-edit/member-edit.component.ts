import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/_models/user';
import { AlertifyServiceService } from 'src/app/_services/AlertifyService.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editform') editForm: NgForm;
  user: User;

  constructor(private route: ActivatedRoute, private alertify: AlertifyServiceService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data['user']
    })
  }

  updateUser(){
    console.log(this.user);
    this.alertify.success("Your profile is updated successfully!")
    this.editForm.reset(this.user);
  }

}
