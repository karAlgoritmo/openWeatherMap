import { Injectable } from '@angular/core';
import  axios from 'axios'
@Injectable({
  providedIn: 'root'
})
export class MasterService {
public host='https://api.openweathermap.org/data/2.5/weather?'
public apiKey='80f7c110dfb3ac57e25bddcbc029907c'
  public get = async (city: string) => {
    
    return await axios.get(`${this.host}q=${city}&appid=${this.apiKey}`)
  }

  constructor() { }
}
