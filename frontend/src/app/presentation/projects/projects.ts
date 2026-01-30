import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { Modal } from '../shared/modal/modal/modal';
import { PortfolioService } from '../../services/portfolio-service';
import { Project } from '../../models/projectInfo-model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, Modal],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects implements OnInit {
  projectInfo = signal<Project[] | null >(null)
  isProjectModalOpen = signal(false)

  constructor(private portfolioservice : PortfolioService) {}


  ngOnInit(): void {
    this.portfolioservice.getProjectInfo().subscribe(
      data => this.projectInfo.set(data)
    )
  }

  openProjectModal(): void {
    this.isProjectModalOpen.set(true)
  }

  closeProjectModal(): void {
    this.isProjectModalOpen.set(false)
  }
}
