import { Injectable } from '@angular/core';
import { SortingAlgo } from '../shared/sortingalgo';
import { SORTINGALGOLIST } from '../shared/sortingalgolist';

@Injectable({
  providedIn: 'root'
})
export class SortingalgolistService {

  constructor() { }

  getSortAlgoList(): SortingAlgo[] {
    return SORTINGALGOLIST;
  }
}
