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
  projectInfo = signal<Project[] | null>(null);
  

  isProjectExpanded = signal(false);
  
 
  selectedProject = signal<Project | null>(null);
  
 
  imagePreviewUrl = signal<string | null>(null);
  
  isProjectModalOpen = signal(false);

  constructor(private portfolioservice: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioservice.getProjectInfo().subscribe(
      data => this.projectInfo.set(data)
    );
  }


  toggleProject(): void {
    this.isProjectExpanded.update(value => !value);
  }

  selectProject(project: Project): void {
    this.selectedProject.set(project);
    console.log('Projet sélectionné:', project);
  }

  openImagePreview(imageUrl: string): void {
    this.imagePreviewUrl.set(imageUrl);
  }

  closeImagePreview(): void {
    this.imagePreviewUrl.set(null);
  }

  openProjectModal(): void {
    this.isProjectModalOpen.set(true);
  }

  closeProjectModal(): void {
    this.isProjectModalOpen.set(false);
  }
}