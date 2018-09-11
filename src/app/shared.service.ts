import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable()
export class SharedService {

  @Output() readonly gnbElementChanged  = new EventEmitter<{route: Array<string>, elements: Array<any>}>()

  private _currentGnbElements
  private _routes

  constructor() { }

  public setGnbElements(list: Array<any>, route: Array<string>)
  {
    this._routes = route
    this._currentGnbElements = list
    this.gnbElementChanged.emit({route: route, elements: list})
  }

  public currentGnbElements(): Array<any>{
    return this._currentGnbElements
  }

  public currentGnbRoutes(): Array<string>{
    return this._routes
  }

}
