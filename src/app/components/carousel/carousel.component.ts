import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  cards = [
      {
        title: 'Chili',
        description: ' 40 min ',
        buttonText: 'Recipe',
        img: '../../../assets/img/recipe/Chili.jpg'
      },
      {
        title: 'Coleslaw',
        description: ' 60 min ',
        buttonText: 'Recipe',
        img: '../../../assets/img/recipe/Coleslaw.jpg'
      },
      {
        title: 'Sauce',
        description: ' 30 min',
        buttonText: 'Recipe',
        img: '../../../assets/img/recipe/Sauce.jpg'
      },
      {
        title: 'Pepperoni Pizzas',
        description: '50 min',
        buttonText: 'Recipe',
        img: '../../../assets/img/recipe/pizz.jpg'
      },
      {
        title: 'Sous Vide Bacon ',
        description: '60 min',
        buttonText: 'Recipe',
        img: '../../../assets/img/recipe/Sous Vide Bacon.jpg'
      },
      {
        title: ' Fried Apples',
        description: '30 min',
        buttonText: 'Recipe',
        img: '../../../assets/img/recipe/Fried Apples.jpg'
      },
      {
        title: 'Double Cheeseburger',
        description: '30 min',
        buttonText: 'Recipe',
        img: '../../../assets/img/recipe/chesburger.jpg'
      },
      {
        title: 'Pineapple Dole Whip',
        description: ' 60 min ',
        buttonText: 'Recipe',
        img: '../../../assets/img/recipe/Pineapple Dole™ Whip.jpg'
      },

  ];
  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit() {
    this.slides = this.chunk(this.cards, 4);
  }
}
