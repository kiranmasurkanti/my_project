import { Component } from '@angular/core';
import { JobService } from '../../service/job.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from '../../common/job';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { JobCategoryService } from '../../service/job-category.service';
import { JobCategory } from '../../common/job-category';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrl: './post-job.component.css'
})
export class PostJobComponent {
  // job: Job = new Job();
  jobFormGroup: FormGroup;
  categoryId: number;
  categories: JobCategory[] = [];

  // category: JobCategory;
  // categoryId: number=0;

  currentEmployerId: string | null = null;
  storage: Storage = localStorage
  constructor(
   
    private service: JobService,
    private router: Router,
    private jobCategoryService: JobCategoryService,
    
  ) { 
    this.currentEmployerId = this.storage.getItem('currentEmployer');
    this.currentEmployerId = JSON.parse(this.currentEmployerId ? this.currentEmployerId : "");
    var token = this.currentEmployerId
  }
  ngOnInit() {
    this.jobFormGroup = new FormGroup({
      title: new FormControl(['']),
      companyName: new FormControl(['']),
      jobDescription: new FormControl(['']),
      skillsRequired: new FormControl(['']),
      street: new FormControl(['']),
      city: new FormControl(['']),
      pincode: new FormControl(['']),
      state: new FormControl(['']),
      country: new FormControl(['']),
      jobType: new FormControl(['']),
      salaryRange: new FormControl(['']),
      experience: new FormControl(['']),
      category: new FormGroup({
        categoryId: new FormControl([''])
      }),
      employerjobs:new FormGroup({
        employerId:new FormControl([''])
      })


    })

    // this.jobCategoryService.getCategories().subscribe((data) => {
    //   this.categories = data;
    // this.jobFormGroup.get('categoryId').setValue(this.categories[0].id);
    // });
    this.jobCategoryService.getCategories()
      .subscribe((categories: JobCategory[]) => {
        this.categories = categories;
      });


  }


  addJob() {
    alert(JSON.stringify(this.jobFormGroup.value))
    // const categoryId = this.selectedCategoryId
    // console.log(categoryId)
    if (this.jobFormGroup.valid) {
      const job = this.jobFormGroup.value;


      this.service.createJob(job).subscribe(
        (data) => {
          alert("Job added successfully");
          console.log(data);
          // this.router.navigateByUrl('/job-list');
        },
        (error) => {
          console.error(error);
          //  alert("Error adding job");
          alert(job)

        }
      );
    } else {
      alert("Please fill all the fields correctly");
    }
  }
  loadCategories(): void {
    this.jobCategoryService.getCategories().subscribe(
      categories => {
        this.categories = categories;
        console.log(categories)
      },
      (error) => {

        console.error(error);

      }
    );


  }
  Logout() {
    localStorage.clear()
    this.router.navigateByUrl("/home-page")
  }

}
