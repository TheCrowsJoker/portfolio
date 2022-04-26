import { Component, OnInit } from '@angular/core';
import {
  faTimes,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  faTimes = faTimes;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  images = [
    'assets/images/gallery/rawcircus_10420212531_20265.jpg',
    'assets/images/gallery/rawcircus_10420212531_22579.jpg',
    'assets/images/gallery/rawcircus_10420212531_22723.jpg',
    'assets/images/gallery/rawcircusiceage_31720212540_8556.jpg',
    'assets/images/gallery/rawcircusiceage_31720212540_8716.jpg',
  ];

  fullImage: string | null = null;

  constructor() {}

  ngOnInit(): void {}

  goToImage(index: number) {
    const currentImage = this.images.findIndex((i) => i === this.fullImage);
    if (currentImage === this.images.length - 1 && index === 1) {
      this.fullImage = this.images[0];
    } else if (currentImage === 0 && index === -1) {
      this.fullImage = this.images[this.images.length - 1];
    } else {
      this.fullImage = this.images[currentImage + index];
    }
  }
}
