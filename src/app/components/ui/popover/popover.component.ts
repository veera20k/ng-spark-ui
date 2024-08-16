import {
  Component,
  inject,
  input,
  signal,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { ComponentLoaderService } from '../../../core/services/component-loader/component-loader.service';
import { NgStyle } from '@angular/common';
import { Side } from '../../../core/models/common.model';

@Component({
  selector: 'flash-popover',
  standalone: true,
  template: `
    <div
      (mouseover)="hoverToggle() && !alwaysOpen() && toggle($event)"
      (mouseout)="hoverToggle() && cmptLoaderService.close()"
      (click)="!alwaysOpen() && toggle($event)"
      id="flash-popover-trigger"
    >
      <ng-content select="[slot=trigger]" />
    </div>
    <ng-template #template>
      <div
        id="flash-popover-content"
        class="animate-popover-in"
        [ngStyle]="{
          'inset-area': side(),
          'position-try-options': static() ? 'unset' : 'flip-block',
          width: anchorWidth() ? 'anchor-size(width)' : 'unset'
        }"
      >
        <ng-content select="[slot=content]" />
      </div>
    </ng-template>
  `,
  styles: [
    `
      #flash-popover-trigger {
        anchor-name: --flash-popover-anchor;
      }
      #flash-popover-content {
        position: absolute;
        position-anchor: --flash-popover-anchor;
      }
    `,
  ],
  imports: [NgStyle],
})
export class PopoverComponent {
  cmptLoaderService = inject(ComponentLoaderService);
  isOpen = signal(false);
  alwaysOpen = input(false);
  side = input<Side>('top');
  static = input(false);
  hoverToggle = input(false);
  disableScroll = input(false);
  anchorWidth = input(false);

  @ViewChild('template', { static: true })
  popoverTemplate!: TemplateRef<unknown>;

  ngOnInit(): void {
    if (this.alwaysOpen()) {
      this.cmptLoaderService.open(
        new MouseEvent('click'),
        this.popoverTemplate,
        {
          backdrop: false,
          closeOnBackdropClick: true,
          disableScroll: this.disableScroll(),
        }
      );
    }
  }

  toggle(event: MouseEvent) {
    if (!this.isOpen()) {
      this.isOpen.set(true);
      this.cmptLoaderService.open(event, this.popoverTemplate, {
        backdrop: false,
        closeOnBackdropClick: true,
        disableScroll: this.disableScroll(),
        afterClosed: () => {
          this.isOpen.set(false);
        },
      });
    } else {
      this.isOpen.set(false);
      this.cmptLoaderService.close();
    }
  }
}
