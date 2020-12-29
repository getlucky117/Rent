import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { MatToolbarModule } from '@angular/material/toolbar';

import { MatIconModule } from '@angular/material/icon';

import { MatSidenavModule } from '@angular/material/sidenav';

import { MatListModule } from '@angular/material/list';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


import {MatDividerModule} from '@angular/material/divider'; 


import {MatChipsModule} from '@angular/material/chips';  



import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 




import {MatTableModule} from '@angular/material/table'; 
import { MatSortModule } from '@angular/material/sort';


import {MatGridListModule} from '@angular/material/grid-list'; 



import {MatDatepickerModule} from '@angular/material/datepicker'; 



const mymodule=[ MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatProgressSpinnerModule,
  MatDividerModule,
  MatTableModule,
  MatChipsModule,
  MatSortModule,
  MatGridListModule,
  MatDatepickerModule,
  MatButtonModule,
  MatListModule];



@NgModule({
  declarations: [],
  imports: [ CommonModule,mymodule ],
  exports:[mymodule]
})
export class MaterialModule { }
 