import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { Modal } from '../shared/modal/modal/modal';
import { ContactInfo } from '../../models/contactInfo-model';
import { PortfolioService } from '../../services/portfolio-service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, Modal],
  standalone: true,
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements OnInit  {
  contactInfo = signal<ContactInfo | null >(null)

  isContactInfoModalOpen = signal(false)
  constructor(private portfolioService : PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.getContactInfo().subscribe(
      data => this.contactInfo.set(data)
    )
  }

  openContactInfoModal(): void {
    this.isContactInfoModalOpen.set(true)
  }

  closeContactModal(): void {
    this.isContactInfoModalOpen.set(false)
  }
}
