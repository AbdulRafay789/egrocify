import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { MainContentComponent } from '../main-content/main-content.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [MenuComponent,MainContentComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {

}
