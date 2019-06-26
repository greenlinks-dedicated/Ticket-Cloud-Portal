import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Search_Event_Sales',
  templateUrl: './Search_Event_Sales.component.html',
  styleUrls: ['./Search_Event_Sales.component.css']
})
export class Search_Event_SalesComponent implements OnInit {

  isEmpty = false
  searchResult = false
  searchInput

  constructor(private router: Router) { }

  ngOnInit() {
    this.searchInput = document.querySelector('#searchText')
  }

  changeEmpty() {
    this.isEmpty = false
  }

  searchEvent() {

    if (this.searchInput.value == '') {
      this.isEmpty = true
      this.searchResult = false
    } else {
      this.isEmpty = false
      this.searchResult = true
    }
  }

  gotoViewSales() {
    this.router.navigate(['/sales/viewsales'])
  }

}
