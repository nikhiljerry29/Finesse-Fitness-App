import { ExerciseData } from './../data/exercise';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExercisesService {
  constructor() {}

  getExercisesDetail() {
    return ExerciseData.getCategoryWiseExerciseData();
  }
}
