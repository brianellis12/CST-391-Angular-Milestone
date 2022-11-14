import { Component, OnInit } from '@angular/core';
import { Entry } from '../models/entries.model';
import { MusicServiceService } from '../service/service.service';

@Component({
  selector: 'app-create-entry',
  templateUrl: './create-entry.component.html',
  styleUrls: ['./create-entry.component.css']
})
export class CreateEntryComponent implements OnInit {
  status: number = 0;
  entry: Entry = {
    id: Math.floor(Math.random() * 1000000),
    title: "",
    description: "",
    project: "",
    date: new Date(),
    start: "",
    end: "",
    image: "",
    secondImage: ""

  };
  wasSubmitted: boolean = false;

  constructor(private service: MusicServiceService) { }

  ngOnInit() {
  }

  public onSubmit() {
    console.log(this.entry);
    this.service.createEntry(this.entry, (status: number) => this.status = status);

    console.log("The return from createEntry() was " + this.status);
    this.wasSubmitted = true;
  }
}
