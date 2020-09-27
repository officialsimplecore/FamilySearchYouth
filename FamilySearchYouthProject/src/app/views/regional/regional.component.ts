import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fsp-regional',
  templateUrl: './regional.component.html',
  styleUrls: ['./regional.component.scss']
})
export class RegionalComponent implements OnInit {

  constructor() { }

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
  }

}
