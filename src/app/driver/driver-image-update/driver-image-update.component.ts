import { Component, OnInit } from '@angular/core';
import {DriverService} from '../services/driver.service';
import {DriverImageUpdateService} from '../services/driver-image-update.service';

@Component({
  selector: 'app-driver-image-update',
  templateUrl: './driver-image-update.component.html',
  styleUrls: ['./driver-image-update.component.css']
})
export class DriverImageUpdateComponent implements OnInit {

  images: FileList;
  image: File;
  user: any;

  constructor(private imageService: DriverImageUpdateService,
              private driverService: DriverService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.driverService.getUser().subscribe(
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
