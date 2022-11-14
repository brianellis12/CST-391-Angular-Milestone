import { Component, Input, OnInit } from '@angular/core';
import { MusicServiceService } from '../service/service.service';
import { Entry } from '../models/entries.model';
@Component({
  selector: 'app-list-entries',
  templateUrl: './list-entries.component.html',
  styleUrls: ['./list-entries.component.css'],
})
export class ListEntriesComponent implements OnInit {
  entries: Entry[] = [];
  selectedEntry: Entry | null = null;
  status: number = 0;

  constructor(private service: MusicServiceService) {}

  ngOnInit(): void {
    this.service.getEntries(
      (entries: Entry[]) => this.entries = entries);

  }

  public onSelectEntry(entry: Entry) {
    this.selectedEntry = entry;
  }
}
