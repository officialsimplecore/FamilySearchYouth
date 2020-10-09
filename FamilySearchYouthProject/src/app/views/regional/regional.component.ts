import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'fsp-regional',
  templateUrl: './regional.component.html',
  styleUrls: ['./regional.component.scss']
})
export class RegionalComponent implements OnInit {

  public regionId: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  cardsData = [
    {
      category: 'Culture',
      title: 'Music',
      icon: 'https://edge.fscdn.org/assets/img/about/tileicons/icon_population-growth-2000f23395c3090b243d0c728a70a218.svg'
    },
    {
      category: 'Culture',
      title: 'Food',
      icon: 'https://i.pinimg.com/originals/5e/fa/77/5efa77186bd7ca39e06aae2bad562351.png'
    },
    {
      category: 'Culture',
      title: 'Clothing',
      icon: 'https://edge.fscdn.org/assets/img/about/tileicons/icon_population-growth-2000f23395c3090b243d0c728a70a218.svg'
    },    {
      category: 'Culture',
      title: 'Religion',
      icon: 'https://edge.fscdn.org/assets/img/about/tileicons/icon_population-growth-2000f23395c3090b243d0c728a70a218.svg'
    },
    {
      category: 'Physical',
      title: 'Weather',
      icon: 'https://edge.fscdn.org/assets/img/about/tileicons/icon_population-growth-2000f23395c3090b243d0c728a70a218.svg'
    },
  ];

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params['regionId'])
      if (params['regionId'] == null) {
        this.router.navigate(["youth"]);
      } else {
        this.regionId = params['regionId']; // To-do: Check if parse needed
      }
    });

    // Shuffle cards data on page load
    this.cardsData = this.shuffleArray(this.cardsData);
  }

  private shuffleArray(array): any[] {
    // tslint:disable-next-line:one-variable-per-declaration
    let currentIndex = array.length, temporaryValue, randomIndex;

    // Check if there are remaining elements to shuffle
    while (0 !== currentIndex) {
      // Pick a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // Swap with current element
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }


  // Used to get category color
  public getColor(category): string {
    switch (category) {
      case 'Culture':
        return '#FFB81D';
      case 'Physical':
        return '#BED21F';
      case 'Religion':
        return '#FC4F6E';
      case 'Technology':
        return '#3cb2c3';
      case 'Government':
        return '#ba84cf';
      default:
        return '#BED21F';
    }

  }

}
