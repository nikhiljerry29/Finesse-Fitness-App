import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardNavbarComponent } from './components/dashboard-navbar/dashboard-navbar.component';
import { ExerciseDisplayComponent } from './components/exercise-display/exercise-display.component';
import { ExerciseDetailsComponent } from './components/exercise-details/exercise-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardNavbarComponent,
    ExerciseDisplayComponent,
    ExerciseDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
