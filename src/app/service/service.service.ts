import { Injectable } from '@angular/core';
import exampleData from '../../data/sample-music-data.json';
import { Entry } from '../models/entries.model';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' }) //Injectable declaration, allowing Angular to use dependency injection to reference the service's properties and methods in other files
export class MusicServiceService {
  //The json data from the same-music-data.json file being placed in an array of type Entry

  private host = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  public getEntries (callback: (entries: Entry[]) => void): void {
     // Return the list of Entries
    this.http.get<Entry[]>(this.host + "/entries").
      subscribe((entries: Entry[]) => {
        callback(entries);
    })
  }

  public getEntry (id: number, callback: (entries: Entry) => void): void {
    // Return the list of Entries
   this.http.get<Entry>(this.host + "/entries?entryId=5")
     .subscribe((entry: Entry) => {
       callback(entry);
   })
 }

  public createEntry (entry: Entry, callback: (status: number) => void): void {
    // Add a new Entry
    this.http.post<Entry>(this.host + "/entries", entry)
      .subscribe((data) => {
        callback(1);
      });
  }

  public updateEntry (entry: Entry, callback: (status: number) => void): void {
    this.http.put<Entry>(this.host + "/entries", entry)
      .subscribe((data) => {
        callback(1);
    });
  }

  public deleteEntry(id: number, callback: (status: number) => void): void {
    this.http.delete(this.host + "/entries/" + id)
      .subscribe((data) => {
      callback(1);
    });
  }
}
