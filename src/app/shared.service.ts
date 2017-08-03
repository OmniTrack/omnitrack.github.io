import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable()
export class SharedService {

  @Output() readonly gnbElementChanged  = new EventEmitter<Array<any>>()

  private _currentGnbElements

  constructor() { }

  public setGnbElements(list: Array<any>)
  {
    this._currentGnbElements = list
    this.gnbElementChanged.emit(list)
  }

  public currentGnbElements(): Array<any>{
    return this._currentGnbElements
  }

}
