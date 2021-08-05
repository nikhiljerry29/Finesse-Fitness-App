import { ExerciseDetailsComponent } from './components/exercise-details/exercise-details.component';
import { ExerciseDisplayComponent } from './components/exercise-display/exercise-display.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'exercises',
        component: ExerciseDisplayComponent,
      },
      {
        path: 'exercises/:id',
        component: ExerciseDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
