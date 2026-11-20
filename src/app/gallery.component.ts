import { Component, ElementRef, computed, effect, inject, signal, viewChild } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DomSanitizer, SafeResourceUrl, Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { portfolioCategories } from './portfolio-categories';
import { weddingStories } from './wedding-stories';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    @if (category(); as currentCategory) {
      <section class="gallery-page">
        <div class="gallery-heading">
          <a class="back-link" routerLink="/" [fragment]="isWedding() ? 'sluby' : 'portfolio'">
            <span aria-hidden="true">←</span> Wszystkie kategorie
          </a>
          <p class="eyebrow">{{ currentCategory.number }} / {{ isWedding() ? 'Ślub' : 'Portfolio' }}</p>
          <h1>{{ currentCategory.name }}<span>.</span></h1>
          <div class="gallery-meta">
            <p>
              @if (currentCategory.videoEmbedUrl) {
                Nagranie wideo
              } @else {
                {{ currentCategory.images.length }} fotografii
              }
            </p>
            <a [href]="currentCategory.sourceUrl" target="_blank" rel="noopener noreferrer">
              {{ isWedding() ? 'Oryginalny reportaż' : 'Oryginalna galeria' }} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        @if (currentCategory.videoEmbedUrl) {
          <section class="video-section" aria-label="Nagranie lektorskie">
            <div class="video-frame">
              <iframe
                [src]="safeVideoUrl()"
                title="Nagranie lektorskie Mateusza Czecha"
                loading="lazy"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
                referrerpolicy="strict-origin-when-cross-origin">
              </iframe>
            </div>
            <a [href]="currentCategory.sourceUrl" target="_blank" rel="noopener noreferrer">
              Zobacz materiał na oryginalnej stronie <span aria-hidden="true">↗</span>
            </a>
          </section>
        } @else {
          <div class="photo-grid" [attr.aria-label]="'Galeria: ' + currentCategory.name">
            @for (image of currentCategory.images; track image; let index = $index) {
              <button
                class="photo-card"
                type="button"
                [attr.aria-label]="'Powiększ zdjęcie ' + (index + 1) + ' z ' + currentCategory.images.length"
                (click)="openPhoto(index)">
                <img
                  [src]="image"
                  [alt]="currentCategory.name + ' — fotografia ' + (index + 1)"
                  [attr.loading]="index < 4 ? 'eager' : 'lazy'"
                  [attr.fetchpriority]="index === 0 ? 'high' : 'auto'"
                  decoding="async">
                <span class="photo-index" aria-hidden="true">{{ (index + 1).toString().padStart(2, '0') }}</span>
              </button>
            }
          </div>
        }

        <nav class="gallery-pagination" aria-label="Przejdź do innej kategorii">
          @if (isWedding()) {
            @for (story of weddings; track story.slug) {
              <a [routerLink]="['/sluby', story.slug]" [class.is-current]="story.slug === currentCategory.slug">
                <span>{{ story.number }}</span> {{ story.name }}
              </a>
            }
          } @else {
            @for (categoryLink of categories; track categoryLink.slug) {
              <a
                [routerLink]="['/portfolio', categoryLink.slug]"
                [class.is-current]="categoryLink.slug === currentCategory.slug">
                <span>{{ categoryLink.number }}</span> {{ categoryLink.name }}
              </a>
            }
          }
        </nav>
      </section>

      <dialog #lightbox class="lightbox" aria-label="Podgląd fotografii" (click)="closeOnBackdrop($event)" (close)="clearSelectedPhoto()" (keydown.arrowleft)="movePhoto(-1)" (keydown.arrowright)="movePhoto(1)">
        <button class="lightbox-close" type="button" aria-label="Zamknij podgląd" (click)="closeLightbox()">×</button>
        @if (selectedImage(); as image) {
          <button class="lightbox-control previous" type="button" aria-label="Poprzednie zdjęcie" (click)="movePhoto(-1)">←</button>
          <img [src]="image" [alt]="currentCategory.name + ' — powiększone zdjęcie'">
          <button class="lightbox-control next" type="button" aria-label="Następne zdjęcie" (click)="movePhoto(1)">→</button>
          <p>{{ (selectedIndex() ?? 0) + 1 }} / {{ currentCategory.images.length }}</p>
        }
      </dialog>
    } @else {
      <section class="gallery-missing">
        <p class="eyebrow">Nie znaleziono kategorii</p>
        <h1>Wróć do portfolio.</h1>
        <a routerLink="/" fragment="portfolio">Zobacz wszystkie kategorie</a>
      </section>
    }
  `,
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly title = inject(Title);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly lightbox = viewChild<ElementRef<HTMLDialogElement>>('lightbox');
  private readonly categorySlug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('category'))),
    { initialValue: this.route.snapshot.paramMap.get('category') }
  );

  readonly categories = portfolioCategories;
  readonly weddings = weddingStories;
  readonly category = computed(() => portfolioCategories.find(({ slug }) => slug === this.categorySlug()) ?? weddingStories.find(({ slug }) => slug === this.categorySlug()));
  readonly isWedding = computed(() => weddingStories.some(({ slug }) => slug === this.categorySlug()));
  readonly safeVideoUrl = computed<SafeResourceUrl | null>(() => {
    const url = this.category()?.videoEmbedUrl;
    return url ? this.sanitizer.bypassSecurityTrustResourceUrl(url) : null;
  });
  readonly selectedIndex = signal<number | null>(null);
  readonly selectedImage = computed(() => {
    const index = this.selectedIndex();
    const currentCategory = this.category();
    return index === null || !currentCategory ? null : currentCategory.images[index] ?? null;
  });

  constructor() {
    effect(() => {
      const currentCategory = this.category();
      this.title.setTitle(currentCategory ? `${currentCategory.name} — Mateusz Czech` : 'Portfolio — Mateusz Czech');
    });
  }

  openPhoto(index: number): void {
    this.selectedIndex.set(index);
    this.lightbox()?.nativeElement.showModal();
  }

  closeLightbox(): void {
    this.lightbox()?.nativeElement.close();
  }

  closeOnBackdrop(event: MouseEvent): void {
    if (event.target === this.lightbox()?.nativeElement) {
      this.closeLightbox();
    }
  }

  clearSelectedPhoto(): void {
    this.selectedIndex.set(null);
  }

  movePhoto(direction: -1 | 1): void {
    const count = this.category()?.images.length ?? 0;
    const currentIndex = this.selectedIndex();
    if (currentIndex === null || count === 0) {
      return;
    }
    this.selectedIndex.set((currentIndex + direction + count) % count);
  }
}
