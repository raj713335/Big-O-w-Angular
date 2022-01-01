import { Component, OnInit } from '@angular/core';
import { SortingAlgo } from '../shared/sortingalgo';
import { DataStructure } from '../shared/datastructure';

const DATASTRUCTURE: DataStructure[] = [
  {
    name: 'Array',
    ac_search: 'O(n)',
    ac_insert: 'N/A',
    ac_delete: 'N/A',
    wc_search: 'O(n)',
    wc_insert: 'N/A',
    wc_delete: 'N/A',
  },
  {
    name: 'Sorted Array',
    ac_search: 'O(n log n)',
    ac_insert: 'O(n)',
    ac_delete: 'O(n)',
    wc_search: 'O(n log n)',
    wc_insert: 'O(n)',
    wc_delete: 'O(n)',
  },
  {
    name: 'Linked List',
    ac_search: 'O(n)',
    ac_insert: 'O(1)',
    ac_delete: 'O(1)',
    wc_search: 'O(n)',
    wc_insert: 'O(1)',
    wc_delete: 'O(1)',
  }
];

const SORTINGALGOLIST: SortingAlgo[] = [
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
    sc_worst: 'O(1)',
    tc_best: 'O(n)',
    tc_average: 'O(n log n2)',
    tc_worst: 'O(n log n2)'
  },
  {
    name: 'Merge Sort',
    sc_worst: 'O(n)',
    tc_best: 'O(n)',
    tc_average: 'O(n log n)',
    tc_worst: 'O(n log n)'
  },
  {
    name: 'Quick Sort',
    sc_worst: 'O(log n)',
    tc_best: 'O(n)',
    tc_average: 'O(n log n)',
    tc_worst: 'O(n log n)'
  },
  {
    name: 'Heap Sort',
    sc_worst: 'O(1)',
    tc_best: 'O(n)',
    tc_average: 'O(n log n)',
    tc_worst: 'O(n log n)'
  }
];

@Component({
  selector: 'app-bigocheatsheet',
  templateUrl: './bigocheatsheet.component.html',
  styleUrls: ['./bigocheatsheet.component.scss']
})
export class BigocheatsheetComponent implements OnInit {

  sortingAlgoList: SortingAlgo[] = SORTINGALGOLIST;
  dataStructureList: DataStructure[] = DATASTRUCTURE;
  
  constructor() { }

  ngOnInit() {
  }

}
