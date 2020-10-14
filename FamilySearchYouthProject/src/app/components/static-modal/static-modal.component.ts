import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'fsp-static-modal',
  templateUrl: './static-modal.component.html',
  styleUrls: ['./static-modal.component.scss']
})
export class StaticModalComponent implements OnInit {
  @Input() open: boolean;
  @Input() title: string;
  @Input() body: string;
  @Output() close = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  public closeModal() {
    this.close.emit(false);
  }

}
