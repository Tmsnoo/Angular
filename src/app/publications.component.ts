import { Component, OnDestroy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { publicationProjects } from './publication-projects';

interface PublicationTile {
  readonly project: (typeof publicationProjects)[number];
  readonly imageIndex: number;
}

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="publications-page" aria-labelledby="publications-title">
      <header class="publications-heading">
        <a class="back-link" routerLink="/" fragment="publikacje">
          <span aria-hidden="true">←</span> Wszystkie kategorie
        </a>
        <p class="eyebrow">Portfolio / Publikacje</p>
        <h1 id="publications-title">Publikacje<span>.</span></h1>
        <p class="publications-intro">Wybrane historie muzyczne, sceniczne i redakcyjne.</p>
      </header>

      <div class="publication-grid" aria-label="Projekty i publikacje">
        @for (tile of tiles(); track tile.project.slug; let index = $index) {
          <a
            class="publication-card"
            [routerLink]="['/publikacje', tile.project.slug]"
            [attr.aria-label]="'Otwórz publikację: ' + tile.project.name">
            @for (image of [tile.project.images[tile.imageIndex]]; track image) {
              <img
                [src]="image"
                [alt]="tile.project.name"
                [attr.loading]="index < 4 ? 'eager' : 'lazy'"
                decoding="async">
            }
            <span class="publication-title">{{ tile.project.name }}</span>
            <span class="publication-number" aria-hidden="true">{{ tile.project.number }}</span>
          </a>
        }
      </div>
    </section>
  `,
  styleUrl: './publications.component.css'
})
export class PublicationsComponent implements OnDestroy {
  readonly tiles = signal<readonly PublicationTile[]>(
    publicationProjects.map((project) => ({
      project,
      imageIndex: Math.floor(Math.random() * project.images.length)
    }))
  );
  private readonly rotationTimer: ReturnType<typeof setInterval> | null =
    typeof window !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? setInterval(() => this.rotateImages(), 4500)
      : null;

  ngOnDestroy(): void {
    if (this.rotationTimer !== null) {
      clearInterval(this.rotationTimer);
    }
  }

  private rotateImages(): void {
    this.tiles.update((tiles) =>
      tiles.map((tile) => {
        const imageCount = tile.project.images.length;
        if (imageCount < 2) {
          return tile;
        }

        const nextIndex = Math.floor(Math.random() * (imageCount - 1));
        return {
          ...tile,
          imageIndex: nextIndex >= tile.imageIndex ? nextIndex + 1 : nextIndex
        };
      })
    );
  }
}
