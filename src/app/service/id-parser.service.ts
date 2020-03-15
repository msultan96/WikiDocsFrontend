import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdParserService {

  constructor() { }

  hex(length, n) {
    n = n.toString(16);
    return (n.length===length)? n : "00000000".substring(n.length, length) + n;
     }
     
  parse(idToParse){
    return this.hex(8,idToParse.timestamp)+ this.hex(6,idToParse.machineIdentifier)
      +this.hex(4,idToParse.processIdentifier)+this.hex(6,idToParse.counter);
  }
}
