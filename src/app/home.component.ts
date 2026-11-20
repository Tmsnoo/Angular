import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { portfolioCategories } from './portfolio-categories';
import { weddingStories } from './wedding-stories';

interface FolderSection {
  readonly id: string;
  readonly slug: string;
  readonly name: string;
  readonly number: string;
  readonly kind: 'wedding' | 'portfolio';
  readonly backgroundImages: readonly string[];
}

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="about" id="o-mnie" aria-labelledby="about-title">
      <div class="about-image">
        <img
          src="https://cdn.myportfolio.com/1ae1782f-bf75-40a2-a983-b0b5ac077fec/f048183b-3630-4a39-89df-1adb51b02293_rw_1200.jpg?h=e25033b36573ae17116e61b083cae2a7"
          alt="Portret Mateusza Czecha"
          loading="lazy"
          decoding="async">
        <div class="about-bts">
          <img
            src="https://cdn.myportfolio.com/1ae1782f-bf75-40a2-a983-b0b5ac077fec/504c93cd-b027-4e23-b0a3-30989abbf3b4_rw_1920.jpg?h=5557b417686c815c28a0e8e44219db9b"
            alt="Mateusz fotografuje wśród publiczności podczas koncertu"
            loading="lazy"
            decoding="async">
          <span>Po drugiej stronie obiektywu</span>
        </div>
        <span aria-hidden="true">MATEUSZ CZECH / FOTOGRAF</span>
      </div>
      <div class="about-copy">
        <p class="eyebrow"><span></span> O mnie</p>
        <h1 id="about-title">Liczy się cała<br><em>opowieść.</em></h1>
        <blockquote>
          <p>Najważniejsze kadry nie czekają na powtórkę — trzeba być gotowym, zanim wydarzą się naprawdę.</p>
          <p>Praca na planach filmowych, w studiu i przy dużych produkcjach nauczyła mnie uważności, tempa i spokoju tam, gdzie nie ma miejsca na dubel. To doświadczenie przenoszę do każdej sesji: słucham, obserwuję i reaguję na to, co dzieje się przed obiektywem.</p>
          <p>Tworzę pełne życia, energetyczne i autentyczne kadry — portrety, obrazy sceniczne i kulinarne historie, które zostają z odbiorcą na dłużej.</p>
        </blockquote>
        <div class="about-contact" aria-label="Kontakt">
          <a href="tel:+48501455889">+48 501 455 889</a>
          <a href="mailto:kontakt@mateuszczech.com">kontakt&#64;mateuszczech.com</a>
        </div>
      </div>
    </section>

    <section class="experience" aria-labelledby="experience-title">
      <div class="experience-heading">
        <p class="eyebrow"><span></span> Sposób pracy</p>
        <h2 id="experience-title">Uważność<br>z <em>każdego planu.</em></h2>
        <p>Różne przestrzenie, ta sama zasada: być blisko wydarzeń i nie odbierać im naturalności.</p>
      </div>
      <div class="experience-list">
        <article>
          <span>01</span>
          <div>
            <h3>Plan filmowy</h3>
            <p>Refleks, przewidywanie momentu i gotowość, gdy nie ma miejsca na dubel.</p>
          </div>
        </article>
        <article>
          <span>02</span>
          <div>
            <h3>Studio</h3>
            <p>Świadoma praca ze światłem i przestrzenią — bez utraty autentyczności.</p>
          </div>
        </article>
        <article>
          <span>03</span>
          <div>
            <h3>Duże produkcje</h3>
            <p>Spokój, współpraca i konsekwencja w dynamicznym środowisku.</p>
          </div>
        </article>
      </div>
    </section>

    @for (folder of folders; track folder.id) {
      <section
        class="folder-section"
        [class.folder-section--wedding]="folder.kind === 'wedding'"
        [id]="folder.id"
        [attr.aria-labelledby]="'folder-title-' + folder.id">
        <div class="folder-background" aria-hidden="true">
          @for (image of folder.backgroundImages; track image) {
            <img [src]="image" alt="" loading="lazy" decoding="async">
          }
        </div>
        <div class="folder-shade" aria-hidden="true"></div>
        <div class="folder-content">
          <div
            class="folder-tab"
            [class.folder-tab--wedding]="folder.kind === 'wedding'"
            [class.folder-tab--portrait]="folder.slug === 'portret'"
            [class.folder-tab--scene]="folder.slug === 'scena'"
            [class.folder-tab--gastro]="folder.slug === 'gastro'"
            [class.folder-tab--voice]="folder.slug === 'nagranialektorskie'">
            <span>{{ folder.number }}</span>{{ folder.name }}
          </div>

          @if (folder.kind === 'wedding') {
            <p class="eyebrow"><span></span> Reportaże ślubne / Polska i dalej</p>
            <h2 id="folder-title-sluby">Każda miłość<br><em>ma swoją historię.</em></h2>
            <p class="folder-description">Prawdziwe chwile, bliskie kadry i historie, które mają swój rytm.</p>
            <div class="wedding-grid">
              @for (story of weddings; track story.slug) {
                <a class="wedding-card" [routerLink]="['/sluby', story.slug]">
                  <div class="wedding-image">
                    <img [src]="story.coverImage" [alt]="'Ślubny reportaż: ' + story.name" loading="lazy" decoding="async">
                    <span class="wedding-title">{{ story.name }}</span>
                    <span class="wedding-arrow" aria-hidden="true">↗</span>
                  </div>
                  <div class="wedding-caption">
                    <span>Reportaż ślubny</span>
                    <span>Zobacz historię <span aria-hidden="true">↗</span></span>
                  </div>
                </a>
              }
            </div>
            <a class="folder-contact" href="mailto:kontakt@mateuszczech.com">Porozmawiajmy o Waszym dniu <span aria-hidden="true">↗</span></a>
          } @else {
            <p class="eyebrow"><span></span> Portfolio / {{ folder.number }}</p>
            <h2 [id]="'folder-title-' + folder.id">{{ folder.name }}</h2>
            <p class="folder-description">Wybrane kadry z tej zakładki. Otwórz pełną galerię i poznaj wszystkie historie.</p>
            <a class="folder-cta" [routerLink]="['/portfolio', folder.slug]">
              Otwórz pełną galerię <span aria-hidden="true">↗</span>
            </a>
          }
        </div>
      </section>
    }

    <section class="collaborators" aria-labelledby="collaborators-title">
      <div class="section-heading">
        <div>
          <p class="eyebrow">W dobrym towarzystwie</p>
          <h2 id="collaborators-title">Nasze<br><em>współprace.</em></h2>
        </div>
        <p class="section-aside">Marki i twórcy, z którymi<br>miałem przyjemność pracować.</p>
      </div>
      <a class="collaborator-artwork" href="assets/collaborators.png" target="_blank" rel="noopener noreferrer" aria-label="Otwórz planszę z logotypami partnerów">
        <img
          src="assets/collaborators.png"
          alt="Logotypy wybranych partnerów i współpracowników Mateusza Czecha"
          loading="lazy"
          decoding="async">
      </a>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly weddings = weddingStories;
  readonly folders: readonly FolderSection[] = [
    {
      id: 'sluby',
      slug: 'sluby',
      name: 'Śluby',
      number: '01',
      kind: 'wedding',
      backgroundImages: weddingStories.map((story) => story.images[1] ?? story.coverImage)
    },
    ...portfolioCategories.map((category, index): FolderSection => ({
      id: `portfolio-${category.slug}`,
      slug: category.slug,
      name: category.name,
      number: String(index + 2).padStart(2, '0'),
      kind: 'portfolio',
      backgroundImages: category.images.length ? category.images.slice(0, 3) : [category.coverImage]
    }))
  ];
}
