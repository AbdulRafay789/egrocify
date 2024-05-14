import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [RouterOutlet,MatSlideToggleModule,CommonModule,RouterLink,RouterModule,HeaderComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
  constructor(public router : Router){}
  route() {
    this.router.navigate(["C"]);
  }
}
