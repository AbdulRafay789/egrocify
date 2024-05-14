import { MenuComponent } from './components/menu/menu.component';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBar, } from '@angular/material/snack-bar';
import { HttpService } from './service/httpservice.service';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './components/main-content/main-content.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatSlideToggleModule,CommonModule,RouterLink,RouterModule,MenuComponent,MainContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'e-grocify';
  constructor(private snackBar: MatSnackBar,private HttpService: HttpService,public router : Router){}

  showSuccess(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: ['toast-success']
    });
  }

  // Display error message
  showError(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: ['toast-error']
    });
  }

  ngOnInit(): void {
    this.getCommentsForPost(1); // Assuming postId is 1
  }

  getCommentsForPost(postId: number): void {
    this.HttpService.getComments(postId).subscribe(
      (response) => {
        console.log('Comments:', response);
        this.showSuccess('rafay')
        // Handle the response here
      },
      (error) => {
        console.error('Error fetching comments:', error);
        // Handle errors here
      }
    );
  }

  route() {
    this.router.navigate(["A"]);
  }

}
