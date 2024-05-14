import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {}

  // Example API call method
  getData(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        this.handleApiError(error);
        return throwError(error);
      })
    );
  }

  // Handle HTTP errors
  private handleApiError(error: HttpErrorResponse): void {
    // Your error handling logic here, you can display toast messages based on the error status
    console.error('API Error:', error);
    // Example toast notification
    // this.toastService.showError('An error occurred. Please try again later.');
  }

  getComments(postId: number): Observable<any> {
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  }

}
