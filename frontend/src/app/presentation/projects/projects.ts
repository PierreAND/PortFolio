import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { Modal } from '../shared/modal/modal/modal';
import { PortfolioService } from '../../services/portfolio-service';
import { Project } from '../../models/projectInfo-model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, Modal],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects implements OnInit {
  projectInfo = signal<Project[] | null>(null);
  isProjectModalOpen = signal(false);
  isDetailModalOpen = signal(false);
  dossierProjectPdfUrl = signal<SafeResourceUrl | null>(null);
  selectedProject = signal <Project | null> (null)

  constructor(
    private sanitizer: DomSanitizer,
    private portfolioservice: PortfolioService,
  ) {}

  ngOnInit(): void {
    this.portfolioservice.getProjectInfo().subscribe((data) => this.projectInfo.set(data));
  }

  openProjectModal(): void {
    this.isProjectModalOpen.set(true);
  }

  closeProjectModal(): void {
    this.isProjectModalOpen.set(false);
  }

  openDetailsProject(project: Project): void {
    this.selectedProject.set(project)
    this.isDetailModalOpen.set(true);
  }

  closeDetailproject(): void {
    this.selectedProject.set(null)
    this.isDetailModalOpen.set(false);
  }

  isVideo(url : string): boolean{ 
    return url.includes('/preview')

  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }
}
