import { CommonModule, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Menu } from '../../interface/menu';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgClass,CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  @Input() menuItems: Menu[] = [];
}
