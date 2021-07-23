import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercise-details',
  templateUrl: './exercise-details.component.html',
  styleUrls: ['./exercise-details.component.css'],
})
export class ExerciseDetailsComponent implements OnInit {
  id: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams
      .subscribe((params: any) => {
        console.log(params); // { order: "popular" }

        this.id = params.id;
        console.log(this.id); // popular
      });
  }
}
