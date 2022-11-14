import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEntryComponent } from './create-entry/create-entry.component';
import { DeleteEntryComponent } from './delete-entry/delete-entry.component';
import { EditEntryComponent } from './edit-entry/edit-entry.component';
import { ListEntriesComponent } from './list-entries/list-entries.component';

const routes: Routes = [
  { path: 'create', component: CreateEntryComponent },
  { path: 'list-entries', component: ListEntriesComponent },
  { path: 'edit/:id', component: EditEntryComponent },
  { path: 'delete/:id', component: DeleteEntryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
