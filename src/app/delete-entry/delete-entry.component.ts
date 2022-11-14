import { Component, Input, OnInit } from '@angular/core';
import { MusicServiceService } from '../service/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-entry',
  templateUrl: './delete-entry.component.html',
  styleUrls: ['./delete-entry.component.css']
})
export class DeleteEntryComponent implements OnInit {
  @Input() id: Number | null = null;
  status: number = 0;
  constructor(private service: MusicServiceService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.service.deleteEntry(Number(this.route.snapshot.paramMap.get('id')), (status: number) => this.status = status);
  }


}
