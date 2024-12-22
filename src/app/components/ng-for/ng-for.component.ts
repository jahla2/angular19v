import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {

  cityList: string[] = ["Tandag","Bislig","Davo","Cebu","Butuan"];

  employeeList: any[] = [
    {empId: 1, name: "Marc", city: "Tandag", contactNo: '09321312'},
    {empId: 1, name: "Eman", city: "Davao", contactNo: '0932332'},
    {empId: 1, name: "Calr", city: "Cebu", contactNo: '0923412'},
    {empId: 1, name: "KASJ", city: "Butan", contactNo: '0923452'},
    {empId: 1, name: "MWO", city: "Taguig", contactNo: '0932233'},
    {empId: 1, name: "ASD", city: "Pampanga", contactNo: '0932235'},
  ];



  
}
