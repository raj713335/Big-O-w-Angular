import { SortingAlgo } from "./sortingalgo";

export const SORTINGALGOLIST: SortingAlgo[] = [
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