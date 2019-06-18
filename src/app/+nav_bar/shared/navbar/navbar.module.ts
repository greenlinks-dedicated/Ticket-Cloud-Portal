import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './navbar.component';
import { MatButtonModule } from '@angular/material';
@NgModule({
    imports: [ RouterModule, CommonModule, MatButtonModule ],
    declarations: [ NavBarComponent ],
    exports: [ NavBarComponent ]
})

export class NavBarModule {}
