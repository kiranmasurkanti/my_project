import { Component } from '@angular/core';
import { Employee } from '../../common/employee';
import { EmployeeService } from '../../service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  employees:Employee[]=[];
  constructor(private service :EmployeeService, private router:Router) {}
 
  ngOnInit(){
    this.displayEmployees();
  }

  displayEmployees(){
    this.service.getEmployees().subscribe((data)=>{
      console.log("Data received", data)
      this.employees=data;
    })
  }
  removeEmloyee(id:number){
    if(confirm("are you sure delete your profile")){
      this.service.deleteEmployee(id).subscribe((data)=>{
        alert('Profile deleted successfully');
      })
    }
  }
  showEdit(id:number){
    this.router.navigate(['employee-edit',id]);
  }
  Logout() {
    localStorage.clear()
    this.router.navigateByUrl("/home-page")
  }
}

