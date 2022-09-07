import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imageObject = [
    {
      image: './assets/images/children-s-bright-clothes-hang-display-baby-clothing-store-girls-section.jpg',
      thumbImage: './assets/images/children-s-bright-clothes-hang-display-baby-clothing-store-girls-section.jpg',
      title: 'Children Collections'
  }, {
      image: './assets/images/fashion-portrait-young-businessman-handsome-model-man-casual-cloth-suit-with-accessories-hands.jpg',
      thumbImage: './assets/images/fashion-portrait-young-businessman-handsome-model-man-casual-cloth-suit-with-accessories-hands.jpg',
      title: 'Mens Collections'
    }, 
  {
    image: './assets/images/children-s-bright-clothes-hang-display-baby-clothing-store-girls-section.jpg',
    thumbImage: './assets/images/children-s-bright-clothes-hang-display-baby-clothing-store-girls-section.jpg',
    title: 'Children Collections'
}, {
    image: './assets/images/fashion-portrait-young-businessman-handsome-model-man-casual-cloth-suit-with-accessories-hands.jpg',
    thumbImage: './assets/images/fashion-portrait-young-businessman-handsome-model-man-casual-cloth-suit-with-accessories-hands.jpg',
    title: 'Men Collections'
  }, 
{
  image: './assets/images/children-s-bright-clothes-hang-display-baby-clothing-store-girls-section.jpg',
  thumbImage: './assets/images/children-s-bright-clothes-hang-display-baby-clothing-store-girls-section.jpg',
  title: 'Children Collections'
}, {
  image: './assets/images/fashion-portrait-young-businessman-handsome-model-man-casual-cloth-suit-with-accessories-hands.jpg',
  thumbImage: './assets/images/fashion-portrait-young-businessman-handsome-model-man-casual-cloth-suit-with-accessories-hands.jpg'
}, 
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
