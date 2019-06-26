import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update_profile',
  templateUrl: './update_profile.component.html',
  styleUrls: ['./update_profile.component.css']
})
export class Update_profileComponent implements OnInit {

  x= 0

  constructor() { }

  provinces = [
    {value: 'Gauteng', abrv: 'Paris'},
    {value: 'Limpopo', abrv: 'Miami'},
    {value: 'Mpumalanga', abrv: 'Bucharest'},
    {value: 'North West', abrv: 'New York'},
    {value: 'Free State', abrv: 'London'},
    {value: 'Kwazulu Natal', abrv: 'Barcelona'},
    {value: 'Eastern Cape', abrv: 'Moscow'},
    {value: 'Western Cape', abrv: 'Moscow'},
    {value: 'Northern Cape', abrv: 'Moscow'}
  ];

  ngOnInit() {
  }

}
