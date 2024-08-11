import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const rorateAngularOpenClose = trigger('rotateAngularOpenClose', [
  state(
    'expanded',
    style({
      transform: 'rotate(180deg)',
    })
  ),
  transition('expanded <=> collapsed', animate('300ms ease-in-out')),
]);

export const accordianCollapse = trigger('accordianCollapse', [
  state(
    'collapsed',
    style({
      height: '0px',
    })
  ),
  transition('collapsed <=> expanded', animate('300ms ease-in-out')),
]);
