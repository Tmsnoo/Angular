import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { portfolioCategories } from './portfolio-categories';
import { publicationProjects } from './publication-projects';
import { weddingStories } from './wedding-stories';

interface ArchiveTab {
  readonly id: string;
  readonly label: string;
  readonly number: string;
  readonly style: 'about' | 'wedding' | 'publications' | 'portrait' | 'scene' | 'gastro' | 'voice';
  readonly images: readonly string[];
}

function mosaicImages(images: readonly string[]): readonly string[] {
  return images.slice(0, 4);
}

@Component({
  selector: 'mc-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <a class="skip-link" href="#main">Przejdź do treści</a>
    <header class="site-header">
      <a class="wordmark" routerLink="/" aria-label="Mateusz Czech, strona główna">
        <span class="wordmark-mark" aria-hidden="true">MC</span>
        <span class="wordmark-name">Mateusz Czech<span>fotografia & dźwięk</span></span>
      </a>
      <a class="source-link" href="https://mateuszczech.com/portfolio" target="_blank" rel="noopener noreferrer">
        Oryginalna strona <span aria-hidden="true">↗</span>
      </a>
      <div class="tab-carousel">
        <button class="tab-scroll-button" type="button" aria-label="Przewiń zakładki w lewo" (click)="scrollTabs(-1)">←</button>
        <nav #tabStrip class="primary-nav" aria-label="Przewijane zakładki portfolio" (scroll)="updateActiveTile()">
          @for (tab of navigationItems; track tab.id; let index = $index) {
            <a
              class="album-tile"
              [class.album-tile--about]="tab.style === 'about'"
              [class.album-tile--wedding]="tab.style === 'wedding'"
              [class.album-tile--publications]="tab.style === 'publications'"
              [class.album-tile--portrait]="tab.style === 'portrait'"
              [class.album-tile--scene]="tab.style === 'scene'"
              [class.album-tile--gastro]="tab.style === 'gastro'"
              [class.album-tile--voice]="tab.style === 'voice'"
              [class.album-tile--active]="activeIndex() === index"
              [class.album-tile--left]="index < activeIndex()"
              [class.album-tile--right]="index > activeIndex()"
              (click)="selectTile(index)"
              (focus)="selectTile(index)"
              routerLink="/"
              [fragment]="tab.id"
              [attr.aria-label]="'Przejdź do sekcji: ' + tab.label">
              <span
                class="album-mosaic"
                [class.album-mosaic--single]="tab.images.length === 1"
                [class.album-mosaic--double]="tab.images.length === 2"
                [class.album-mosaic--triple]="tab.images.length === 3"
                aria-hidden="true">
                @for (image of tab.images; track $index) {
                  <img [src]="image" alt="" [attr.loading]="index < 3 ? 'eager' : 'lazy'" decoding="async">
                }
              </span>
              <span class="album-spine" aria-hidden="true"></span>
              <span class="album-caption">
                <span class="album-number">{{ tab.number }}</span>
                <span class="album-label">{{ tab.label }}</span>
              </span>
            </a>
          }
        </nav>
        <button class="tab-scroll-button" type="button" aria-label="Przewiń zakładki w prawo" (click)="scrollTabs(1)">→</button>
      </div>
    </header>

    <main id="main">
      <router-outlet></router-outlet>
    </main>

    <footer class="site-footer">
      <a class="footer-brand" routerLink="/">Mateusz Czech<span>Fotografia / dźwięk</span></a>
      <nav aria-label="Kategorie portfolio">
        <a routerLink="/" fragment="sluby">Śluby</a>
        <a routerLink="/" fragment="publikacje">Publikacje</a>
        @for (category of categories; track category.slug) {
          <a [routerLink]="['/portfolio', category.slug]">{{ category.name }}</a>
        }
      </nav>
      <span class="footer-year">© {{ currentYear }} Mateusz Czech</span>
    </footer>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly categories = portfolioCategories;
  readonly tabStrip = viewChild<ElementRef<HTMLElement>>('tabStrip');
  readonly activeIndex = signal(0);
  readonly navigationItems: readonly ArchiveTab[] = [
    {
      id: 'o-mnie',
      label: 'O mnie',
      number: '00',
      style: 'about',
      images: mosaicImages([
        'https://cdn.myportfolio.com/1ae1782f-bf75-40a2-a983-b0b5ac077fec/f048183b-3630-4a39-89df-1adb51b02293_rw_1200.jpg?h=e25033b36573ae17116e61b083cae2a7',
        'https://cdn.myportfolio.com/1ae1782f-bf75-40a2-a983-b0b5ac077fec/504c93cd-b027-4e23-b0a3-30989abbf3b4_rw_1920.jpg?h=5557b417686c815c28a0e8e44219db9b'
      ])
    },
    {
      id: 'sluby',
      label: 'Śluby',
      number: '01',
      style: 'wedding',
      images: mosaicImages(weddingStories.map((story) => story.coverImage))
    },
    {
      id: 'publikacje',
      label: 'Publikacje',
      number: '02',
      style: 'publications',
      images: mosaicImages(publicationProjects.flatMap((project) => project.images.slice(0, 1)))
    },
    ...portfolioCategories.map((category, index): ArchiveTab => ({
      id: `portfolio-${category.slug}`,
      label: category.name,
      number: String(index + 3).padStart(2, '0'),
      style: category.slug === 'portret'
        ? 'portrait'
        : category.slug === 'scena'
          ? 'scene'
          : category.slug === 'gastro'
            ? 'gastro'
            : 'voice',
      images: mosaicImages(category.images.length ? category.images.slice(0, 4) : [category.coverImage])
    }))
  ];
  readonly currentYear = new Date().getFullYear();

  constructor(viewportScroller: ViewportScroller) {
    viewportScroller.setOffset(() => [0, document.querySelector('.site-header')?.getBoundingClientRect().height ?? 88]);
  }

  scrollTabs(direction: -1 | 1): void {
    const strip = this.tabStrip()?.nativeElement;
    if (!strip) {
      return;
    }

    const tile = strip.querySelector<HTMLElement>('.album-tile');
    const gap = Number.parseFloat(getComputedStyle(strip).columnGap) || 0;
    const step = tile ? tile.getBoundingClientRect().width + gap : strip.clientWidth * 0.8;
    strip.scrollBy({
      left: direction * step,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
    });
  }

  selectTile(index: number): void {
    this.activeIndex.set(index);
  }

  updateActiveTile(): void {
    const strip = this.tabStrip()?.nativeElement;
    if (!strip) {
      return;
    }

    const center = strip.getBoundingClientRect().left + strip.clientWidth / 2;
    const nearestIndex = Array.from(strip.querySelectorAll<HTMLElement>('.album-tile'))
      .reduce((nearest, tile, index, tiles) => {
        const distance = Math.abs(tile.getBoundingClientRect().left + tile.offsetWidth / 2 - center);
        const nearestDistance = Math.abs(tiles[nearest].getBoundingClientRect().left + tiles[nearest].offsetWidth / 2 - center);
        return distance < nearestDistance ? index : nearest;
      }, 0);

    this.activeIndex.set(nearestIndex);
  }
}
