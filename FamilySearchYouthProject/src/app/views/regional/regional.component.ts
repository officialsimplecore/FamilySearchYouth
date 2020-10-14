import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {RegionsDataService} from "../../services/regions-data.service";

@Component({
  selector: 'fsp-regional',
  templateUrl: './regional.component.html',
  styleUrls: ['./regional.component.scss']
})
export class RegionalComponent implements OnInit {

  public regionId: number;

  public regionInformation: any;

  public year: number = 1600; // To-do: This is a placeholder for user input

  public modalOpen: boolean;

  public activeCardTitle: string;

  constructor(private route: ActivatedRoute, private router: Router, private regionData: RegionsDataService) { }

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
    {
      category: 'Culture',
      title: 'Sports',
      icon: 'https://edge.fscdn.org/assets/img/about/tileicons/icon_population-growth-2000f23395c3090b243d0c728a70a218.svg'
    },
    {
      category: 'Social',
      title: 'Family Structure',
      icon: 'https://edge.fscdn.org/assets/img/about/tileicons/icon_population-growth-2000f23395c3090b243d0c728a70a218.svg'
    },
    {
      category: 'Government',
      title: 'Money',
      icon: 'https://edge.fscdn.org/assets/img/about/tileicons/icon_population-growth-2000f23395c3090b243d0c728a70a218.svg'
    },
    {
      category: 'Government',
      title: 'Economy',
      icon: 'https://edge.fscdn.org/assets/img/about/tileicons/icon_population-growth-2000f23395c3090b243d0c728a70a218.svg'
    },
    {
      category: 'Technology',
      title: 'Innovations',
      icon: 'https://edge.fscdn.org/assets/img/about/tileicons/icon_population-growth-2000f23395c3090b243d0c728a70a218.svg'
    },
    {
      category: 'Social',
      title: 'Occupations',
      icon: 'https://edge.fscdn.org/assets/img/about/tileicons/icon_population-growth-2000f23395c3090b243d0c728a70a218.svg'
    },
    {
      category: 'Government',
      title: 'Military',
      icon: 'https://edge.fscdn.org/assets/img/about/tileicons/icon_population-growth-2000f23395c3090b243d0c728a70a218.svg'
    },
    {
      category: 'Culture',
      title: 'Historical Events',
      icon: 'https://edge.fscdn.org/assets/img/about/tileicons/icon_population-growth-2000f23395c3090b243d0c728a70a218.svg'
    },
    {
      category: 'Physical',
      title: 'Geography',
      icon: 'https://edge.fscdn.org/assets/img/about/tileicons/icon_population-growth-2000f23395c3090b243d0c728a70a218.svg'
    },
    {
      category: 'Physical',
      title: 'Wildlife',
      icon: 'https://edge.fscdn.org/assets/img/about/tileicons/icon_population-growth-2000f23395c3090b243d0c728a70a218.svg'
    },
    {
      category: 'Government',
      title: 'Wars',
      icon: 'https://edge.fscdn.org/assets/img/about/tileicons/icon_population-growth-2000f23395c3090b243d0c728a70a218.svg'
    },
    {
      category: 'Social',
      title: 'Migrations',
      icon: 'https://edge.fscdn.org/assets/img/about/tileicons/icon_population-growth-2000f23395c3090b243d0c728a70a218.svg'
    },
    {
      category: 'Culture',
      title: 'Holidays and Folklore',
      icon: 'https://edge.fscdn.org/assets/img/about/tileicons/icon_population-growth-2000f23395c3090b243d0c728a70a218.svg'
    },
    {
      category: 'Social',
      title: 'Famous People',
      icon: 'https://edge.fscdn.org/assets/img/about/tileicons/icon_population-growth-2000f23395c3090b243d0c728a70a218.svg'
    },
    {
      category: 'The Church',
      title: 'The Church Story',
      icon: 'https://edge.fscdn.org/assets/img/about/tileicons/icon_population-growth-2000f23395c3090b243d0c728a70a218.svg'
    },
    {
      category: 'The Church',
      title: 'Temples',
      icon: 'https://edge.fscdn.org/assets/img/about/tileicons/icon_population-growth-2000f23395c3090b243d0c728a70a218.svg'
    },
    {
      category: 'The Church',
      title: 'Pioneers',
      icon: 'https://edge.fscdn.org/assets/img/about/tileicons/icon_population-growth-2000f23395c3090b243d0c728a70a218.svg'
    },
  ];

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['regionId'] == null) {
        this.router.navigate(["youth"]);
      } else {
        this.regionId = params['regionId']; // To-do: Check if parse needed
      }
    });

    this.setRegionalInformation();

    // Shuffle cards data on page load
    this.cardsData = this.shuffleArray(this.cardsData);
  }
  // To-do: Change placeholder year
  private setRegionalInformation(): void {
    this.regionData.getRegionalInformation(this.regionId, this.year).subscribe(data => {
      this.regionInformation = data;
      console.log(data);
    });
  }

  public changeModal(option, title) {
    if (option)
      this.modalOpen = true;
    else
      this.modalOpen = false;
    console.log(title)
    this.activeCardTitle = title.toLowerCase();
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
      case 'Social':
        return '#FC4F6E';
      case 'Technology':
        return '#3cb2c3';
      case 'Government':
        return '#b7865e';
      case 'The Church':
        return '#ba84cf'
      default:
        return '#BED21F';
    }

  }

}
