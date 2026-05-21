import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { buildWhatsAppInquiryUrl } from '../../workshop-contact.config';
import { MOCK_PROJECTS } from './data/products.index'; // السطر السحري للاستيراد البسيط

export type ProductCategoryId = 'doors-windows' | 'living' | 'bedrooms' | 'kitchens';

export interface WorkshopProject {
  id: string;
  category: ProductCategoryId;
  title: string;
  description: string;
  images: string[];
}

@Component({
  selector: 'app-product-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-gallery.html',
  styleUrl: './product-gallery.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductGallery {
  readonly activeCategory = signal<ProductCategoryId>('doors-windows');
  readonly activeProject = signal<WorkshopProject | null>(null);
  readonly selectedImage = signal<string | null>(null);

  // سحبنا الداتا بكلمة واحدة!
  readonly projects = MOCK_PROJECTS;

  readonly categories: { id: ProductCategoryId; label: string }[] = [
    { id: 'doors-windows', label: 'الأبواب والشبابيك' },
    { id: 'living', label: 'الركن والأنتريهات' },
    { id: 'bedrooms', label: 'غرف النوم والشباب' },
    { id: 'kitchens', label: 'المطابخ والديكورات' },
  ];

  readonly filteredProjects = computed(() => {
    const cat = this.activeCategory();
    return this.projects.filter((p) => p.category === cat);
  });

  selectCategory(id: ProductCategoryId): void {
    this.activeCategory.set(id);
  }

  isActive(id: ProductCategoryId): boolean {
    return this.activeCategory() === id;
  }

  whatsappUrl(title: string): string {
    return buildWhatsAppInquiryUrl(title);
  }

  openProject(project: WorkshopProject): void {
    this.activeProject.set(project);
    this.selectedImage.set(project.images[0]);
  }

  selectModalImage(imgSrc: string): void {
    this.selectedImage.set(imgSrc);
  }

  closeModal(): void {
    this.activeProject.set(null);
    this.selectedImage.set(null);
  }
}