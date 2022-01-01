import { Component, OnInit } from '@angular/core';
import { SortingAlgo } from '../shared/sortingalgo';

@Component({
  selector: 'app-bigocheatsheet',
  templateUrl: './bigocheatsheet.component.html',
  styleUrls: ['./bigocheatsheet.component.scss']
})
export class BigocheatsheetComponent implements OnInit {

  sortingAlgoList: SortingAlgo[] = [
    { 
      name: 'Insertion Sort',
      sc_worst: 'O(1)',
      tc_best: 'O(n)',
      tc_average: 'O(n2)',
      tc_worst: 'O(n2)' 
    },
    { 
      name: 'Selection Sort',
      sc_worst: 'O(1)',
      tc_best: 'O(n2)',
      tc_average: 'O(n2)',
      tc_worst: 'O(n2)' 
    },
    {
      name: 'Bubble Sort',
      sc_worst: 'O(1)',
      tc_best: 'O(n)',
      tc_average: 'O(n2)',
      tc_worst: 'O(n2)'
    },
    {
      name: 'Shell Sort',
      sc_worst: '',
      tc_best: '',
      tc_average: '',
      tc_worst: ''
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
