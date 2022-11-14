import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEntriesComponent } from './list-entries/list-entries.component';
import { CreateEntryComponent } from './create-entry/create-entry.component';
import { EditEntryComponent } from './edit-entry/edit-entry.component';
import { DeleteEntryComponent } from './delete-entry/delete-entry.component';
import { DisplayEntryComponent } from './display-entry/display-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEntriesComponent,
    CreateEntryComponent,
    EditEntryComponent,
    DeleteEntryComponent,
    DisplayEntryComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
