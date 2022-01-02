import { Injectable } from '@angular/core';
import { DataStructure } from '../shared/datastructure';
import { DATASTRUCTURELIST } from '../shared/datastructurelist';

@Injectable({
  providedIn: 'root'
})
export class DatastructurelistService {

  constructor() { }

  getDataStructureList(): DataStructure[] {
    return DATASTRUCTURELIST;
  }
}
