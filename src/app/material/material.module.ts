import { NgModule } from '@angular/core';

import {MatButtonModule, MatCheckboxModule,MatToolbarModule,
  MatIconModule,MatMenuModule,MatCardModule,MatStepperModule,MatFormFieldModule,MatGridListModule,MatTabsModule,
MatInputModule,MatTableModule,MatPaginatorModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,MatToolbarModule,MatStepperModule,MatFormFieldModule,MatGridListModule,MatTabsModule,
    MatIconModule,MatMenuModule,MatCardModule,MatInputModule,MatTableModule,MatPaginatorModule],
  exports: [MatButtonModule, MatCheckboxModule,MatToolbarModule,MatStepperModule,MatFormFieldModule,MatGridListModule,MatTabsModule,
    MatIconModule,MatMenuModule,MatCardModule,MatInputModule,MatTableModule,MatPaginatorModule],
})
export class MaterialModule { }
