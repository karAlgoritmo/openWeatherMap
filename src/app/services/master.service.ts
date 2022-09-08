import { Injectable } from '@angular/core';
import  axios from 'axios'
import {environment} from 'src/environments/environment'
import Swal from 'sweetalert2'
@Injectable({
  providedIn: 'root'
})
export class MasterService {
  /*
  * variables
  */ 
public host=environment.host
public apiKey=environment.apiKey
/*
  * functions
  */ 
  public get = async (city: string) => {
    const x=await axios.get(`${this.host}q=${city}&appid=${this.apiKey}`).catch(error=>{
      return error
    })
    return x
  }
  // show a modal alert
  public showAlert = (title: string, text: string, icon: any) => {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      confirmButtonText: 'Continue'
    })
  }

  constructor() { }
}
