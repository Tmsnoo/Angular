import {
  AfterViewInit,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  Renderer2,
  RendererStyleFlags2,
  signal,
  viewChild
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { publicationPlaceholderDescription, publicationProjects } from './publication-projects';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <section #scroller class="publications-page" aria-labelledby="publications-title">
      <header class="publications-heading">
        <a class="back-link" routerLink="/" fragment="publikacje">
          <span aria-hidden="true">←</span> Wszystkie kategorie
        </a>
        <p class="eyebrow">Portfolio / Publikacje</p>
        <h1 id="publications-title">Publikacje<span>.</span></h1>
        <p class="publications-intro">Wybrane historie muzyczne, sceniczne i redakcyjne.</p>
      </header>

      <nav class="publication-grid" aria-label="Projekty i publikacje">
        @for (project of projects; track project.slug; let index = $index) {
          <a
            class="publication-card publication-sheet"
            [class.publication-sheet--reversed]="index % 2 === 1"
            [routerLink]="['/publikacje', project.slug]"
            [attr.aria-label]="'Otwórz publikację: ' + project.name"
            (pointerenter)="cursorVisible.set(true)"
            (pointerleave)="cursorVisible.set(false)">
            <span class="publication-image publication-visual">
              <img
                [src]="project.images[0]"
                [alt]="project.name"
                [attr.fetchpriority]="index === 0 ? 'high' : 'auto'"
                [attr.loading]="index < 2 ? 'eager' : 'lazy'"
                decoding="async">
            </span>
            <span class="publication-panel">
              <span class="publication-panel-top">Otwórz publikację ↗</span>
              <span class="publication-description">{{ project.description ?? placeholderDescription }}</span>
              <span class="publication-caption">
                <span class="publication-name">{{ project.name }}</span>
                <span class="publication-number">{{ project.number }}</span>
              </span>
            </span>
          </a>
        }
      </nav>

      <section class="publication-contact" aria-labelledby="publication-contact-title">
        <div>
          <p class="eyebrow">KONTAKT / WSPÓŁPRACA</p>
          <h2 id="publication-contact-title">Masz pomysł?<br><em>Porozmawiajmy.</em></h2>
          <p>Napisz kilka słów o swoim projekcie. Formularz przygotuje wiadomość w Twojej aplikacji pocztowej.</p>
          <a href="mailto:kontakt@mateuszczech.com">kontakt&#64;mateuszczech.com <span aria-hidden="true">↗</span></a>
        </div>
        <form class="publication-contact-form" (submit)="sendContact($event)">
          <label>
            <span>Imię</span>
            <input name="name" autocomplete="name" required>
          </label>
          <label>
            <span>Adres e-mail</span>
            <input name="email" type="email" autocomplete="email" required>
          </label>
          <label class="message-field">
            <span>Wiadomość</span>
            <textarea name="message" rows="4" required></textarea>
          </label>
          <button type="submit">Przygotuj wiadomość <span aria-hidden="true">↗</span></button>
          <p>Wiadomość wyślesz ze swojej domyślnej aplikacji pocztowej.</p>
        </form>
      </section>
    </section>

    <div #cursor class="publication-cursor" [class.is-visible]="cursorVisible()" aria-hidden="true">
      <span class="cursor-arrow">↖</span>
      <span>OTWÓRZ</span>
    </div>
  `,
  styleUrls: ['./publications.component.css', './publication-layout.css']
})
export class PublicationsComponent implements AfterViewInit, OnDestroy {
  readonly projects = publicationProjects;
  readonly placeholderDescription = publicationPlaceholderDescription;
  readonly cursorVisible = signal(false);

  private readonly scroller = viewChild.required<ElementRef<HTMLElement>>('scroller');
  private readonly cursor = viewChild.required<ElementRef<HTMLElement>>('cursor');
  private scrollFrame?: number;
  private removeScrollListener?: () => void;
  private removePointerListener?: () => void;
  private removeResizeListener?: () => void;
  private resizeObserver?: ResizeObserver;
  private reducedMotionQuery?: MediaQueryList;
  private prefersReducedMotion = false;
  private headerHeight = 0;
  private readonly onMotionPreferenceChange = (event: MediaQueryListEvent): void => {
    this.prefersReducedMotion = event.matches;
    this.scheduleScrollUpdate();
  };

  constructor(
    private readonly renderer: Renderer2,
    private readonly zone: NgZone
  ) {}

  ngAfterViewInit(): void {
    const header = document.querySelector<HTMLElement>('.site-header');
    const updateHeaderHeight = (): void => {
      this.headerHeight = header?.getBoundingClientRect().height ?? 0;
      this.renderer.setStyle(
        document.documentElement,
        '--site-header-height',
        `${this.headerHeight}px`,
        RendererStyleFlags2.DashCase
      );
      this.scheduleScrollUpdate();
    };

    this.reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.prefersReducedMotion = this.reducedMotionQuery.matches;
    this.reducedMotionQuery.addEventListener('change', this.onMotionPreferenceChange);
    this.renderer.addClass(document.documentElement, 'publications-scroll-snap');
    updateHeaderHeight();
    window.scrollTo({ left: 0, top: 0, behavior: 'instant' });
    if (header) {
      this.resizeObserver = new ResizeObserver(updateHeaderHeight);
      this.resizeObserver.observe(header);
    }

    this.zone.runOutsideAngular(() => {
      this.removeScrollListener = this.renderer.listen('window', 'scroll', () => {
        this.scheduleScrollUpdate();
      });
      this.removeResizeListener = this.renderer.listen('window', 'resize', () => {
        this.scheduleScrollUpdate();
      });

      this.removePointerListener = this.renderer.listen('document', 'pointermove', (event: PointerEvent) => {
        this.renderer.setStyle(this.cursor().nativeElement, 'left', `${event.clientX}px`);
        this.renderer.setStyle(this.cursor().nativeElement, 'top', `${event.clientY}px`);
      });
    });
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.documentElement, 'publications-scroll-snap');
    this.renderer.removeStyle(document.documentElement, '--site-header-height', RendererStyleFlags2.DashCase);
    this.resizeObserver?.disconnect();
    this.reducedMotionQuery?.removeEventListener('change', this.onMotionPreferenceChange);
    this.removeScrollListener?.();
    this.removePointerListener?.();
    this.removeResizeListener?.();
    if (this.scrollFrame !== undefined) {
      window.cancelAnimationFrame(this.scrollFrame);
    }
  }

  private scheduleScrollUpdate(): void {
    if (this.scrollFrame !== undefined) {
      return;
    }

    this.scrollFrame = window.requestAnimationFrame(() => {
      this.scrollFrame = undefined;
      this.updateImageParallax();
    });
  }

  private updateImageParallax(): void {
    const cards = this.scroller().nativeElement.querySelectorAll<HTMLElement>('.publication-card');
    const positions = Array.from(cards, (card) => {
      const rect = card.getBoundingClientRect();
      const progress = this.prefersReducedMotion
        ? 0
        : Math.min(1, Math.max(-1, (this.headerHeight - rect.top) / rect.height));
      return { card, progress, height: rect.height };
    });
    positions.forEach(({ card, progress, height }) => {
      this.renderer.setStyle(card, '--parallax-y', `${progress * height * 0.4}px`, RendererStyleFlags2.DashCase);
      this.renderer.setStyle(card, '--title-blur', `${Math.abs(progress) * 12}px`, RendererStyleFlags2.DashCase);
      this.renderer.setStyle(card, '--title-y', `${progress * 24}px`, RendererStyleFlags2.DashCase);
    });
  }

  sendContact(event: SubmitEvent): void {
    event.preventDefault();

    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const name = String(formData.get('name') ?? '');
    const email = String(formData.get('email') ?? '');
    const message = String(formData.get('message') ?? '');
    const subject = encodeURIComponent(`Zapytanie ze strony portfolio — ${name}`);
    const body = encodeURIComponent(`Imię: ${name}\nE-mail: ${email}\n\nWiadomość:\n${message}`);

    window.location.href = `mailto:kontakt@mateuszczech.com?subject=${subject}&body=${body}`;
  }
}
