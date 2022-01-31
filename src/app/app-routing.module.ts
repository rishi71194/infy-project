import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { BpcalculateComponent } from './modules/bpcalculate/bpcalculate.component';
import { ContractindexComponent } from './modules/contractindex/contractindex.component';
import { CustomersComponent } from './modules/customers/customers.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DemanddeliveryComponent } from './modules/demanddelivery/demanddelivery.component';
import { InventoryComponent } from './modules/inventory/inventory.component';
import { ProductionComponent } from './modules/production/production.component';
import { ProductsComponent } from './modules/products/products.component';

const routes: Routes = [{
  path: "",
  component: DefaultComponent,
  children: [{
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "contractindex",
    component: ContractindexComponent
  },
  {
    path: "customers",
    component: CustomersComponent
  },
  {
    path: "products",
    component: ProductsComponent
  },
  {
    path: "production",
    component: ProductionComponent
  },
  {
    path: "inventory",
    component: InventoryComponent
  },
  {
    path: "demanddelivery",
    component: DemanddeliveryComponent
  },
  {
    path: "bpcalculate",
    component: BpcalculateComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
