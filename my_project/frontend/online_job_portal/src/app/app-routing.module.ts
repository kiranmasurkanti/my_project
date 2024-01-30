import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterEmployeeComponent } from './components/register-employee/register-employee.component';
import { RegisterEmployerComponent } from './components/register-employer/register-employer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterAdminComponent } from './components/register-admin/register-admin.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployerListComponent } from './components/employer-list/employer-list.component';
import { EmployerPageComponent } from './components/employer-page/employer-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';

import { JobCategoryComponent } from './components/job-category/job-category.component';
import { PostJobComponent } from './components/post-job/post-job.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { ListJobcategoriesComponent } from './components/list-jobcategories/list-jobcategories.component';
import { ListJobapplicationsComponent } from './components/list-jobapplications/list-jobapplications.component';
import { EmployeeJobapplicationsComponent } from './components/employee-jobapplications/employee-jobapplications.component';
import { EmployeeProfileComponent } from './components/employee-profile/employee-profile.component';
import { EmployeePageComponent } from './components/employee-page/employee-page.component';
import { EmployerJobsComponent } from './components/employer-jobs/employer-jobs.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { LoginEmployerComponent } from './components/login-employer/login-employer.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { JobApplicationsByJobidComponent } from './components/job-applications-by-jobid/job-applications-by-jobid.component';



const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: "register-admin", component: RegisterAdminComponent },
  { path: "register-employee", component: RegisterEmployeeComponent },
  { path: "register-employer", component: RegisterEmployerComponent },
  { path: "login", component: LoginComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "contact-us", component: ContactUsComponent },
  { path: "admin-page", component: AdminPageComponent },
  { path: "employee-list", component: EmployeeListComponent },
  { path: "employer-list", component: EmployerListComponent },
  { path: "employer-page", component: EmployerPageComponent },
  { path: "home-page", component: HomePageComponent },
  { path: "job-category", component: JobCategoryComponent },
  { path: "post-job", component: PostJobComponent },
  { path: "job-list", component: JobListComponent },
  { path: "list-jobcategories", component: ListJobcategoriesComponent },
  { path: "list-jobapplications", component: ListJobapplicationsComponent },
  { path: "employee-jobapplications", component: EmployeeJobapplicationsComponent },
  { path: "employee-profile", component: EmployeeProfileComponent },
  { path: "employee-page", component: EmployeePageComponent },
  { path: "employer-jobs", component: EmployerJobsComponent },
  { path: "jobs", component: JobsComponent },
  { path: "login-employer", component: LoginEmployerComponent },
  { path: "login-admin", component: LoginAdminComponent },
  { path: "job-details", component: JobDetailsComponent },
  { path: "job/:id", component: JobDetailsComponent },
  { path: "jai/:id", component: JobApplicationsByJobidComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
