import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterEmployerComponent } from './components/register-employer/register-employer.component';
import { RegisterEmployeeComponent } from './components/register-employee/register-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployerListComponent } from './components/employer-list/employer-list.component';
import { RegisterAdminComponent } from './components/register-admin/register-admin.component';
import { LoginComponent } from './components/login/login.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { EmployerPageComponent } from './components/employer-page/employer-page.component';
import { EmployeePageComponent } from './components/employee-page/employee-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { UserRegistratioComponent } from './components/user-registratio/user-registratio.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PostJobComponent } from './components/post-job/post-job.component';
import { JobCategoryComponent } from './components/job-category/job-category.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { ListJobcategoriesComponent } from './components/list-jobcategories/list-jobcategories.component';
import { ListJobapplicationsComponent } from './components/list-jobapplications/list-jobapplications.component';
import { EmployeeJobapplicationsComponent } from './components/employee-jobapplications/employee-jobapplications.component';
import { EmployeeProfileComponent } from './components/employee-profile/employee-profile.component';
import { EmployerJobsComponent } from './components/employer-jobs/employer-jobs.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { LoginEmployerComponent } from './components/login-employer/login-employer.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { JobApplicationsByJobidComponent } from './components/job-applications-by-jobid/job-applications-by-jobid.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterAdminComponent,
    RegisterEmployerComponent,
    RegisterEmployeeComponent,
    EmployeeListComponent,
    EmployerListComponent,
    LoginComponent,
    AdminPageComponent,
    EmployerPageComponent,
    EmployeePageComponent,
    AboutUsComponent,
    ContactUsComponent,
    UserRegistratioComponent,
    HomePageComponent,
    PostJobComponent,
    JobCategoryComponent,
    JobListComponent,
    ListJobcategoriesComponent,
    ListJobapplicationsComponent,
    EmployeeJobapplicationsComponent,
    EmployeeProfileComponent,
    EmployerJobsComponent,
    JobsComponent,
    LoginEmployerComponent,
    LoginAdminComponent,
    JobDetailsComponent,
    JobApplicationsByJobidComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
