import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { portfolioCategories } from './portfolio-categories';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow"><span></span> Portfolio / Fotografia i dźwięk</p>
        <h1>Mateusz<br><em>Czech.</em></h1>
        <p class="hero-intro">Fotografia portretowa, sceniczna i gastronomiczna.<br>Nagrania lektorskie.</p>
        <a class="hero-link" routerLink="/" fragment="portfolio">
          Przeglądaj portfolio <span aria-hidden="true">↓</span>
        </a>
      </div>
      <div class="hero-visual" aria-label="Wybrane fotografie z portfolio">
        @for (category of categories; track category.slug; let index = $index) {
          <a class="hero-image" [class]="'hero-image image-' + index" [routerLink]="['/portfolio', category.slug]">
            <img
              [src]="category.coverImage"
              [alt]="'Zobacz kategorię ' + category.name"
              [attr.fetchpriority]="index === 0 ? 'high' : 'auto'"
              [attr.loading]="index === 0 ? 'eager' : 'lazy'">
            <span>{{ category.name }}</span>
          </a>
        }
        <span class="visual-caption" aria-hidden="true">01 — 04 / Wybrane kadry</span>
      </div>
      <span class="hero-coordinate" aria-hidden="true">MATEUSZ CZECH / PL</span>
    </section>

    <section class="portfolio" id="portfolio" aria-labelledby="portfolio-title">
      <div class="section-heading">
        <div>
          <p class="eyebrow">01 / Kategorie</p>
          <h2 id="portfolio-title">Portfolio<span>.</span></h2>
        </div>
        <p class="section-aside">Wybierz kategorię,<br>aby zobaczyć pełną galerię.</p>
      </div>
      <div class="category-grid">
        @for (category of categories; track category.slug; let index = $index) {
          <a class="category-card" [routerLink]="['/portfolio', category.slug]">
            <div class="card-image">
              <img
                [src]="category.coverImage"
                [alt]="'Fotografia z kategorii ' + category.name"
                loading="lazy">
              <span class="card-index">0{{ index + 1 }}</span>
              <span class="card-arrow" aria-hidden="true">↗</span>
            </div>
            <div class="card-label">
              <h3>{{ category.name }}</h3>
              <span>Otwórz galerię</span>
            </div>
          </a>
        }
      </div>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly categories = portfolioCategories;
}
