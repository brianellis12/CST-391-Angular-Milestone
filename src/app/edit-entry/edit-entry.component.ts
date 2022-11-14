import { Component, OnInit } from '@angular/core';
import { Entry } from '../models/entries.model';
import { MusicServiceService } from '../service/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-entry',
  templateUrl: './edit-entry.component.html',
  styleUrls: ['./edit-entry.component.css']
})
export class EditEntryComponent implements OnInit {
  status: Number = 0;
  entry: Entry = {
    id: Math.floor(Math.random() * 1000000),
    title: "",
    description: "tester",
    project: "",
    date: new Date(),
    start: "",
    end: "",
    image: "",
    secondImage: ""

  };

  wasSubmitted: boolean = false;

  constructor(private service: MusicServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.service.getEntry(Number(this.route.snapshot.paramMap.get('id')), (entry: Entry) => this.entry = entry)
  }

  public onSubmit() {
    console.log(this.entry);
    this.service.updateEntry(this.entry, (status: number) => this.status = status);

    console.log("The return from updateEntry() was " + this.status);
    this.wasSubmitted = true;
  }
}
