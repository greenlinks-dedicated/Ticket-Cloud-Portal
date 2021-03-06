import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Edit_Attandee',
  templateUrl: './Edit_Attandee.component.html',
  styleUrls: ['./Edit_Attandee.component.css']
})
export class Edit_AttandeeComponent implements OnInit {

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
