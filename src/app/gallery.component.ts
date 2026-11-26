import {
  AfterViewInit,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  Renderer2,
  RendererStyleFlags2,
  computed,
  effect,
  inject,
  signal,
  viewChild
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DomSanitizer, SafeResourceUrl, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { portfolioCategories } from './portfolio-categories';
import { publicationPlaceholderDescription, publicationProjects } from './publication-projects';
import { weddingStories } from './wedding-stories';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    @if (category(); as currentCategory) {
      <section class="gallery-page" [class.publication-gallery-page]="isPublication()">
        @if (publication(); as project) {
          <div class="publication-showcase publication-sheet" [class.publication-sheet--reversed]="isReversedPublication()">
            <button
              class="publication-stage publication-visual"
              type="button"
              [attr.aria-label]="'Zamknij katalog ' + currentCategory.name + ' i wróć do publikacji'"
              (click)="returnToPublications()"
              (pointerenter)="publicationCursorVisible.set(true)"
              (pointerleave)="publicationCursorVisible.set(false)">
              @if (publicationImage(); as image) {
                <img
                  [src]="image"
                  [alt]="currentCategory.name + ' — fotografia ' + (publicationImageIndex() + 1)"
                  fetchpriority="high"
                  decoding="async">
              }
              <span class="visually-hidden">Kliknij zdjęcie, aby zamknąć katalog i wrócić do listy publikacji.</span>
            </button>

            <aside class="publication-panel">
              <div class="publication-panel-top">
                <a class="publication-back" routerLink="/publikacje">
                  <span aria-hidden="true">←</span> Publikacje
                </a>
              </div>
              <div class="publication-description">
                <p>{{ project.description ?? placeholderDescription }}</p>
                <div class="publication-slideshow-controls" role="group" aria-label="Nawigacja po zdjęciach">
                  <button
                    type="button"
                    aria-label="Poprzednie zdjęcie"
                    [disabled]="publicationImageIndex() === 0"
                    (click)="movePublicationImage(-1)">←</button>
                  <span aria-live="polite" aria-atomic="true">
                    {{ publicationImageIndex() + 1 }} / {{ currentCategory.images.length }}
                  </span>
                  <button
                    type="button"
                    aria-label="Następne zdjęcie"
                    [disabled]="publicationImageIndex() === currentCategory.images.length - 1"
                    (click)="movePublicationImage(1)">→</button>
                </div>
                <a class="publication-original" [href]="project.sourceUrl" target="_blank" rel="noopener noreferrer">
                  Zobacz oryginalną publikację <span aria-hidden="true">↗</span>
                </a>
              </div>
              <div class="publication-caption">
                <h1 class="publication-name">{{ project.name }}</h1>
                <span class="publication-number">{{ project.number }}</span>
              </div>
            </aside>
          </div>
        } @else {
          <div class="gallery-heading">
            <a class="back-link" routerLink="/" [fragment]="isWedding() ? 'sluby' : 'portfolio'">
              <span aria-hidden="true">←</span> Wszystkie kategorie
            </a>
            <p class="eyebrow">
              {{ currentCategory.number }} / {{ isWedding() ? 'Ślub' : 'Portfolio' }}
            </p>
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
        }
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

    @if (isPublication()) {
      <div #publicationCursor class="publication-detail-cursor" [class.is-visible]="publicationCursorVisible()" aria-hidden="true">
        <span class="cursor-arrow">↖</span>
        <span>ZAMKNIJ</span>
      </div>
    }
  `,
  styleUrls: ['./gallery.component.css', './publication-layout.css']
})
export class GalleryComponent implements AfterViewInit, OnDestroy {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly title = inject(Title);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly renderer = inject(Renderer2);
  private readonly zone = inject(NgZone);
  private readonly lightbox = viewChild<ElementRef<HTMLDialogElement>>('lightbox');
  private readonly publicationCursor = viewChild<ElementRef<HTMLElement>>('publicationCursor');
  private removePointerListener?: () => void;
  private resizeObserver?: ResizeObserver;
  private readonly categorySlug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('category'))),
    { initialValue: this.route.snapshot.paramMap.get('category') }
  );

  readonly categories = portfolioCategories;
  readonly weddings = weddingStories;
  readonly placeholderDescription = publicationPlaceholderDescription;
  readonly publication = computed(() => publicationProjects.find(({ slug }) => slug === this.categorySlug()));
  readonly isReversedPublication = computed(() => (
    publicationProjects.findIndex(({ slug }) => slug === this.categorySlug()) % 2 === 1
  ));
  readonly category = computed(() => (
    portfolioCategories.find(({ slug }) => slug === this.categorySlug())
    ?? weddingStories.find(({ slug }) => slug === this.categorySlug())
    ?? publicationProjects.find(({ slug }) => slug === this.categorySlug())
  ));
  readonly isWedding = computed(() => weddingStories.some(({ slug }) => slug === this.categorySlug()));
  readonly isPublication = computed(() => publicationProjects.some(({ slug }) => slug === this.categorySlug()));
  readonly safeVideoUrl = computed<SafeResourceUrl | null>(() => {
    const url = this.category()?.videoEmbedUrl;
    return url ? this.sanitizer.bypassSecurityTrustResourceUrl(url) : null;
  });
  readonly publicationImageIndex = signal(0);
  readonly publicationCursorVisible = signal(false);
  readonly publicationImage = computed(() => {
    const category = this.category();
    return this.isPublication() ? category?.images[this.publicationImageIndex()] ?? null : null;
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
      this.publicationImageIndex.set(0);
      this.title.setTitle(currentCategory ? `${currentCategory.name} — Mateusz Czech` : 'Portfolio — Mateusz Czech');
    });

    this.zone.runOutsideAngular(() => {
      this.removePointerListener = this.renderer.listen('document', 'pointermove', (event: PointerEvent) => {
        const cursor = this.publicationCursor()?.nativeElement;
        if (!cursor) {
          return;
        }
        this.renderer.setStyle(cursor, 'left', `${event.clientX}px`);
        this.renderer.setStyle(cursor, 'top', `${event.clientY}px`);
      });
    });
  }

  ngAfterViewInit(): void {
    if (this.isPublication()) {
      const header = document.querySelector<HTMLElement>('.site-header');
      const updateHeaderHeight = (): void => {
        this.renderer.setStyle(
          document.documentElement,
          '--site-header-height',
          `${header?.getBoundingClientRect().height ?? 0}px`,
          RendererStyleFlags2.DashCase
        );
      };
      updateHeaderHeight();
      if (header) {
        this.resizeObserver = new ResizeObserver(updateHeaderHeight);
        this.resizeObserver.observe(header);
      }
    }
    window.scrollTo({ left: 0, top: 0, behavior: 'instant' });
  }

  ngOnDestroy(): void {
    this.removePointerListener?.();
    this.resizeObserver?.disconnect();
    if (this.isPublication()) {
      this.renderer.removeStyle(document.documentElement, '--site-header-height', RendererStyleFlags2.DashCase);
    }
  }

  movePublicationImage(direction: -1 | 1): void {
    const imageCount = this.category()?.images.length ?? 0;
    this.publicationImageIndex.update((index) => Math.min(imageCount - 1, Math.max(0, index + direction)));
  }

  returnToPublications(): void {
    void this.router.navigate(['/publikacje']);
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
