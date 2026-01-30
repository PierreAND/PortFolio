import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PersonalInfo, Diplome, Certification } from '../../models/personalInfo-model';
import { PortfolioService } from '../../services/portfolio-service';
import { Modal } from '../shared/modal/modal/modal';
import { Contact } from '../contact/contact';
import { Projects } from '../projects/projects';

@Component({
  selector: 'app-about',
  imports: [CommonModule, Modal, Contact, Projects],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About implements OnInit {
  personalInfo = signal<PersonalInfo | null>(null);
  
  
  isProfileModalOpen = signal(false);
  isDiplomesModalOpen = signal(false);
  isCertificationsModalOpen = signal(false);
 
  

  selectedCertification = signal<Certification | null>(null);
  isCertificationDetailModalOpen = signal(false);

  constructor(private portfolioService: PortfolioService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.portfolioService.GetPersonalInfo().subscribe(
      data => this.personalInfo.set(data)
    );
  }
  


  openProfileModal(): void {
    this.isProfileModalOpen.set(true);
  }
  
  closeProfileModal(): void {
    this.isProfileModalOpen.set(false);
  }
  
  openDiplomesModal(): void {
    this.isDiplomesModalOpen.set(true);
  }
  
  closeDiplomesModal(): void {
    this.isDiplomesModalOpen.set(false);
  }
  
  openCertificationsModal(): void {
    this.isCertificationsModalOpen.set(true);
  }
  
  closeCertificationsModal(): void {
    this.isCertificationsModalOpen.set(false);
  }
  
  openCertificationDetail(cert: Certification): void {
    this.selectedCertification.set(cert);
    this.isCertificationDetailModalOpen.set(true);
  }
  
  closeCertificationDetail(): void {
    this.isCertificationDetailModalOpen.set(false);
    this.selectedCertification.set(null);
  }
  
  openCertificationLink(link: string): void {
    window.open(link, '_blank');
  }

   downloadCV(): void {
    this.portfolioService.getCVdownload();
  }
}
