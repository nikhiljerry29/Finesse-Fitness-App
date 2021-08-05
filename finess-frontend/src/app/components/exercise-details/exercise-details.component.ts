import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExerciseData } from 'src/app/data/exercise';
import { Exercise } from 'src/app/models/Exercise';

@Component({
  selector: 'app-exercise-details',
  templateUrl: './exercise-details.component.html',
  styleUrls: ['./exercise-details.component.css'],
})
export class ExerciseDetailsComponent implements OnInit {
  id: any;
  exerciseInfo: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    for (let exercise of ExerciseData.getExerciseData()) {
      if (this.id == exercise.exrId) {
        this.exerciseInfo = { ...exercise };
        break;
      }
    }
  }

  counter(i: number) {
    return new Array(i);
  }
}
