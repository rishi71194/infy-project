import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { ContractindexComponent } from 'src/app/modules/contractindex/contractindex.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomersComponent } from 'src/app/modules/customers/customers.component';
import { DemanddeliveryComponent } from 'src/app/modules/demanddelivery/demanddelivery.component';
import { BpcalculateComponent } from 'src/app/modules/bpcalculate/bpcalculate.component';
import { ProductsComponent } from 'src/app/modules/products/products.component';
import { ProductionComponent } from 'src/app/modules/production/production.component';
import { InventoryComponent } from 'src/app/modules/inventory/inventory.component';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    ContractindexComponent,
    CustomersComponent,
    DemanddeliveryComponent,
    BpcalculateComponent,
    ProductsComponent,
    ProductionComponent,
    InventoryComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule, 
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    FlexLayoutModule,
    MatSelectModule,
    MatFormFieldModule
  ]
})
export class DefaultModule { }
