import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { ShelfLife } from 'src/app/models/shelflife';
import { CustomerService } from 'src/app/services/customer.service';
import { ShelflifeService } from 'src/app/services/shelflife.service';


interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  public customers!: Customer[]; 
  public shelfLife!: ShelfLife[];

  constructor(private customerService: CustomerService, private shelfLifeService: ShelflifeService) { }

  ngOnInit(): void {
      this.getCustomers();
      this.getShelfLifeList();
  }

  public getCustomers(): void {
    this.customerService.getCustomers().subscribe(  
      (response: Customer[]) => {
        this.customers = response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }   

  public getShelfLifeList(): void {
    this.shelfLifeService.getShelfLifeList().subscribe(  
      (response: ShelfLife[]) => {
        this.shelfLife = response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  } 
}
