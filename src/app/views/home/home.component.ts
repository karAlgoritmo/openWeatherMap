import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service'
import { city } from '../../interfaces/city.interface'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  /*
  * variables
  */
  // value for search cities
  public modelCity: string = ''
  // city values default
  public city: city = {
    id: 0,
    name: '',
    cod: 0,
    temp_min: 0,
    temp_max: 0,
    humidity: 0,
    windSpeed: 0,
    country: ''
  };
  /*
  * functions
  */
  public searchCity = async (cityName: string) => {
    (document.getElementById('closeButton') as HTMLButtonElement).click();
    this.modelCity = ''
    const res = await this.ms.get(cityName)
    if (!res.data) {
      this.ms.showAlert('Bad request', 'We can`t found some city, please try again', 'warning')
    } else {
      
      debugger
      this.city = {
        id: res.data.id,
        name: res.data.name,
        cod: res.data.cod,
        temp_min: res.data.main.temp_min,
        temp_max: res.data.main.temp_max,
        humidity: res.data.main.humidity,
        windSpeed: res.data.wind.speed,
        country: res.data.sys.country
      }
    }

  }
  /*
  * life cycles
  */
  constructor(private ms: MasterService) { }

  ngOnInit(): void {
  }

}
