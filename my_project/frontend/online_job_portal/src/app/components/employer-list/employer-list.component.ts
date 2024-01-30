import { Component } from '@angular/core';
import { Employer } from '../../common/employer';
import { EmployerService } from '../../service/employer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employer-list',
  templateUrl: './employer-list.component.html',
  styleUrl: './employer-list.component.css'
})
export class EmployerListComponent {
  employers:Employer[]=[];
  constructor(private service:EmployerService, private router:Router){}
  
  ngOnInit(){
    this.displayEmployers();
  }

  displayEmployers(){
    this.service.getEmployers().subscribe((data)=>{
      console.log(data)
      this.employers=data;
    })
  }
  removeEmployer(id:number){
    if (confirm("Are you sure to delete?")) {
      this.service.deleteEmployer(id).subscribe((data)=>{
        alert("deleted successfully!")

        this.router.navigate(['app.component.html']);
      })
    }
    
  }
  showEdit(id:number){
    this.router.navigate(['employer-edit',id]);
  }
  Logout() {
    localStorage.clear()
    this.router.navigateByUrl("/home-page")
  }

}
