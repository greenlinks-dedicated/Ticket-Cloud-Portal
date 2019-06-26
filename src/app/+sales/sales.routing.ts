import { Routes } from '@angular/router';

import { View_SalesComponent } from './View_Sales/View_Sales.component';
import { Search_Event_SalesComponent } from './Search_Event_Sales/Search_Event_Sales.component';

export const SalesRoutes: Routes = [
    {
        path: '',
        children: [{
            path: 'viewsales',
            component: View_SalesComponent
        }]
    },     {
        path: '',
        children: [{
            path: 'searcheventsales',
            component: Search_Event_SalesComponent
        }]
    }
];
