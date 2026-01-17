import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { CONTACT_INFO } from "../data/contact-data";
import { PERSONAL_INFO, DIPLOME, CERTIFICATION } from "../data/personalInfo-data";
import { Certification, Diplome, PersonalInfo } from "../models/personalInfo-model";
import { ContactInfo } from "../models/contactInfo-model";


@Injectable({
    providedIn: 'root'
})

export class PortfolioService {
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

}

