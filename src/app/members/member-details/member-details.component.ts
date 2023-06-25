import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/_models/user';
import { AlertifyServiceService } from 'src/app/_services/AlertifyService.service';
import { UserService } from 'src/app/_services/user.service';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import * as $ from 'jquery';
import { IAlbum, Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})

export class MemberDetailsComponent implements OnInit {

  user: User;
  albums: IAlbum[] = [];
  
  @ViewChild('memberTabs', { static: true }) memberTabs: TabsetComponent;

  constructor(private userservice: UserService, private alertify: AlertifyServiceService, private route: ActivatedRoute, private lightbox: Lightbox) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data['user'];
      this.albums = this.user.photos.map((photo) => ({
        src: photo.url,
        caption: photo.description,
        thumb: photo.url
      }));
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

  openLightbox(index: number): void {
    this.lightbox.open(this.albums, index);
  }

}
