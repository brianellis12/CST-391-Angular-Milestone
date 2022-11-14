import { Component, Input, OnInit } from '@angular/core';
import { Entry } from '../models/entries.model';

@Component({
  selector: 'app-display-entry',
  templateUrl: './display-entry.component.html',
  styleUrls: ['./display-entry.component.css'],
})
export class DisplayEntryComponent implements OnInit {
  @Input() entry: Entry | null = null;

  constructor() {}

  ngOnInit(): void {}
}
