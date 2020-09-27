import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fsp-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  public navigationItems = [
    {
      title: 'Family Tree',
      link: ''
    },
    {
      title: 'Search',
      link: ''
    },
    {
      title: 'Memories',
      link: ''
    },
    {
      title: 'Indexing',
      link: ''
    },
    {
      title: 'Activities',
      link: ''
    },

    {
      title: 'Youth',
      link: '/youth'
    },

    {
      title: 'Temple',
      link: ''
    }
  ];

  ngOnInit(): void {
  }

}
