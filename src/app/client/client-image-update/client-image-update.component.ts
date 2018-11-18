import { Component, OnInit } from '@angular/core';
import {ClientImageUpdateService} from '../services/client-image-update.service';
import {CurrentUser} from '../../model/current-user';
import {ClientService} from '../services/client.service';

@Component({
  selector: 'app-client-image-update',
  templateUrl: './client-image-update.component.html',
  styleUrls: ['./client-image-update.component.css']
})
export class ClientImageUpdateComponent implements OnInit {

  images: FileList;
  image: File;
  user: any;

  constructor(private imageService: ClientImageUpdateService,
              private clientService: ClientService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.clientService.getUser().subscribe(
      data => {
        this.user = data;
      }
    );
  }

  selectImage(event) {
    this.images = event.target.files;
  }

  onSubmit() {
    this.image = this.images.item(0);
    this.imageService.save(this.image).subscribe(event => {
      console.log('ok');
      this.getUser();
    });
    this.images = undefined;
  }
}
