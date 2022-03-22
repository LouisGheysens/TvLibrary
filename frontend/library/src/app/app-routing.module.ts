import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MoviesDetailComponent } from './components/movies/movies-detail/movies-detail.component';
import { MoviesListComponent } from './components/movies/movies-list/movies-list.component';
import { RecordingsComponent } from './components/recordings/recordings.component';
import { AdminGuard } from './services/authentication/admin.guard';
import { AuthenticationGuard } from './services/authentication/authentication.guard';

const routes: Routes = [
  {path: '/', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent, data: { hideLayout: true}},
  {
    path: 'movies',
    component: MoviesListComponent,
    canActivate: [AuthenticationGuard, AdminGuard]
  },
  {
    path: 'recordings',
    component: RecordingsComponent,
    canActivate: [AuthenticationGuard, AdminGuard]
  },
  {
    path: 'movies/:id',
    component: MoviesDetailComponent,
    canActivate: [AuthenticationGuard, AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
