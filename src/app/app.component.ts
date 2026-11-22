import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { portfolioCategories } from './portfolio-categories';

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
      <nav class="primary-nav" aria-label="Główna nawigacja">
        <a routerLink="/" fragment="o-mnie">O mnie</a>
        <a class="wedding-nav-link" routerLink="/" fragment="sluby">Śluby</a>
        <a class="publications-nav-link" routerLink="/" fragment="publikacje">Publikacje</a>
        @for (category of categories; track category.slug) {
          <a
            [class.portfolio-nav-link--portrait]="category.slug === 'portret'"
            [class.portfolio-nav-link--scene]="category.slug === 'scena'"
            routerLink="/"
            [fragment]="'portfolio-' + category.slug">{{ category.name }}</a>
        }
      </nav>
      <a class="source-link" href="https://mateuszczech.com/portfolio" target="_blank" rel="noopener noreferrer">
        Oryginalna strona <span aria-hidden="true">↗</span>
      </a>
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
  readonly currentYear = new Date().getFullYear();

  constructor(viewportScroller: ViewportScroller) {
    viewportScroller.setOffset(() => [0, document.querySelector('.site-header')?.getBoundingClientRect().height ?? 88]);
  }
}
