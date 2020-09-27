import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'fsp-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() category: string;
  @Input() title: string;
  @Input() iconUrl: string;
  @Input() backgroundColor: string;

  constructor() { }

  ngOnInit(): void {
  }

}
