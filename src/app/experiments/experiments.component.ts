import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experimentBeingEdited: string = null;

  experiments = ['Mars soil sample', 'Plant growth in habitat', 'Human bone density'];

  constructor() { }

  ngOnInit() {
  }

  add(experimentItem: string) {
    this.experiments.push(experimentItem);
  }

  remove(experiment: string) {
    let index = this.experiments.indexOf(experiment);
    this.experiments.splice(index, 1);
  }

  edit(experiment: string) {
    this.experimentBeingEdited = experiment;
 }

  save(newExperiment: string, oldName: string) {
    let index = this.experiments.indexOf(oldName);
    this.experiments[index] = newExperiment;
    this.experimentBeingEdited = null
  }

}
