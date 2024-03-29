import { Component, OnInit, HostListener } from '@angular/core';
import {
  faTimes,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-circus-gallery',
  templateUrl: './circus-gallery.component.html',
  styleUrls: ['./circus-gallery.component.scss'],
})
export class CircusGalleryComponent implements OnInit {
  faTimes = faTimes;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  images = [
    'assets/images/gallery/rawcircus_10420212531_14458.jpg',
    'assets/images/gallery/rawcircus_10420212531_20199.jpg',
    'assets/images/gallery/rawcircus_10420212531_20211.jpg',
    'assets/images/gallery/rawcircus_10420212531_20265.jpg',
    'assets/images/gallery/rawcircus_10420212531_22538.jpg',
    'assets/images/gallery/rawcircus_10420212531_22577.jpg',
    'assets/images/gallery/rawcircus_10420212531_22632.jpg',
    'assets/images/gallery/rawcircus_10420212531_22723.jpg',
    'assets/images/gallery/rawcircusiceage_31720212540_8556.jpg',
    'assets/images/gallery/rawcircusiceage_31720212540_8716.jpg',
    'assets/images/gallery/rawcircusiceage_31720212540_8747.jpg',
    'assets/images/gallery/IMG_2022-07-30-16-35-29_2629.jpg',
    'assets/images/gallery/rawcircus_41220222569_02274.jpg',
    'assets/images/gallery/rawcircus_41220222569_02315.jpg'
  ];

  fullImage: string | null = null;

  @HostListener('document:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.fullImage = null;
    } else if (event.key === 'ArrowLeft') {
      this.goToImage(-1);
    } else if (event.key === 'ArrowRight') {
      this.goToImage(1);
    }
  }

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

