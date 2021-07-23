import { ExercisesService } from './../../services/exercises.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-display',
  templateUrl: './exercise-display.component.html',
  styleUrls: ['./exercise-display.component.css'],
})
export class ExerciseDisplayComponent implements OnInit {
  exerciseList: any = {};
  constructor(private exerciseService: ExercisesService) {}

  ngOnInit(): void {
    this.exerciseList = this.exerciseService.getExercisesDetail();
    
  }
}
