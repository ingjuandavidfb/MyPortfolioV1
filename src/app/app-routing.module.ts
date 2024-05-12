import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './project-body/home/home.component';
import { ProjectsComponent } from './project-body/projects/projects.component';
import { SkillsComponent } from './project-body/skills/skills.component';
import { ContactsComponent } from './project-body/contacts/contacts.component';
import { HomeStartComponent } from './project-body/home-start/home-start.component';

const routes: Routes = [
  {path: '', component: HomeStartComponent},
  {path: 'home', component: HomeComponent },
  {path: 'projects', component: ProjectsComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'contact', component: ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
