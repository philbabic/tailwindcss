import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-nav-item',
  template: `
    <li>
      <a
        [routerLink]="routerLink"
        class="block px-3 py-2 rounded-md"
        [ngClass]="isActive ? 'bg-sky-500 text-white' : 'bg-slate-100'"
      >
        <ng-content></ng-content>
      </a>
    </li>
  `,
})

export class NavItemComponent {
  @Input() routerLink: string
  @Input() isActive: boolean = false
}
