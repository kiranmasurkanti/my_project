import { Employer } from "./employer"
import { JobCategory } from "./job-category"

export class Job {
    jobId: number
    title: string
    companyName: string
    jobDescription: string
    skillsRequired: string
    street: string
    city: string
    pincode: number
    state: string
    country: string
    jobType: string
    salaryRange: string
    experience: string
    category: JobCategory
    employerjobs: Employer

}
