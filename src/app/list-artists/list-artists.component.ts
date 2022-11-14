import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artist } from '../models/artists.model';
import { MusicServiceService } from '../service/music-service.service';

@Component({
  selector: 'app-list-artists',
  templateUrl: './list-artists.component.html',
  styleUrls: ['./list-artists.component.css'],
})
export class ListArtistsComponent implements OnInit {
  selectedArtist: Artist | null = null;
  artists: Artist[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: MusicServiceService
  ) {}

  ngOnInit() {
    // this.route.queryParams.subscribe(params => {
    //   console.log("Getting data....", params);
    //   this.service.getArtists((artists: Artist[]) => this.artists = artists);
    //   this.selectedArtist = null;
    this.service.getArtists((artists: Artist[]) => {
      this.artists = artists;
    });
  }

  onSelectArtist(artist: Artist) {
    this.selectedArtist = artist;
  }
}
