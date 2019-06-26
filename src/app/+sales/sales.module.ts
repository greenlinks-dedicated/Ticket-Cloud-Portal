import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { TagInputModule } from 'ngx-chips';
import { SelectModule } from 'ng2-select';
import { MaterialModule } from '../app.module';

import { SalesRoutes } from './sales.routing';


import { View_SalesComponent } from './View_Sales/View_Sales.component';
import { Search_Event_SalesComponent } from './Search_Event_Sales/Search_Event_Sales.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(SalesRoutes),
        FormsModule,
        ReactiveFormsModule,
        NouisliderModule,
        TagInputModule,
        MaterialModule
    ],
    declarations: [
        View_SalesComponent,
        Search_Event_SalesComponent        
    ]
})

export class SalesModule { }
