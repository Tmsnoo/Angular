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

    <section class="about" id="o-mnie" aria-labelledby="about-title">
      <div class="about-image">
        <img
          src="https://cdn.myportfolio.com/1ae1782f-bf75-40a2-a983-b0b5ac077fec/f048183b-3630-4a39-89df-1adb51b02293_rw_1200.jpg?h=e25033b36573ae17116e61b083cae2a7"
          alt="Portret Mateusza Czecha"
          loading="lazy"
          decoding="async">
        <span aria-hidden="true">MATEUSZ CZECH / FOTOGRAF</span>
      </div>
      <div class="about-copy">
        <p class="eyebrow"><span></span> O mnie / 01</p>
        <h2 id="about-title">Liczy się cała<br><em>opowieść.</em></h2>
        <blockquote>
          <p>To, co naprawdę oddziela fotografa od doświadczonego fotografa, to powtarzalność.</p>
          <p>Nie chodzi o to, by ustrzelić pojedyncze „zdjęcie życia”, kiedy gwiazdy są w idealnym układzie. Chodzi o to, by dostarczyć całą, spójną opowieść pełną potężnych emocji z każdym złapaniem za aparat.</p>
          <p>Ostatecznie moim celem jest kreowanie pełnych życia, energetycznych i autentycznych kadrów, które są tak wyjątkowe, jak ludzie na nich uwiecznieni.</p>
        </blockquote>
        <div class="about-contact" aria-label="Kontakt">
          <a href="tel:+48501455889">+48 501 455 889</a>
          <a href="mailto:kontakt@mateuszczech.com">kontakt&#64;mateuszczech.com</a>
        </div>
      </div>
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
