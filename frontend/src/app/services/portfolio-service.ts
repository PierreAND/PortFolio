import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { CONTACT_INFO } from "../data/contact-data";
import { PERSONAL_INFO, DIPLOME, CERTIFICATION } from "../data/personalInfo-data";
import { Certification, Diplome, PersonalInfo } from "../models/personalInfo-model";
import { ContactInfo } from "../models/contactInfo-model";
import { Project } from "../models/projectInfo-model";
import { PROJECT_DATA } from "../data/project-data";


@Injectable({
    providedIn: 'root'
})

export class PortfolioService {
    set(data: any) {
      throw new Error('Method not implemented.');
    }
    GetPersonalInfo(): Observable<PersonalInfo> {
        return of(PERSONAL_INFO)
    }

    getContactInfo(): Observable<ContactInfo> {
        return of(CONTACT_INFO)
    }

    getDiplomeInfo(): Observable<Diplome> {
        return of(DIPLOME)
    }
    
    getCertificationInfo(): Observable<Certification[]> {
        return of(CERTIFICATION)
    }
    
    getProjectInfo(): Observable<Project[]> {
        return of(PROJECT_DATA)
    }

    
    getCVdownload():  void {
    const link = document.createElement('a');
    link.href = "mon-cv.pdf"
    link.download = 'CV_ANDRIEU_Pierre.pdf';
    link.click()
}



}