import { Routes } from '@angular/router';
import { BodyComponent } from './components/route-c/body.component';

export const routes: Routes = [
  {'path': '', component: BodyComponent},
  {
    'path': 'C',
    loadComponent: () =>
    import('./components/route-c/body.component').then(
      (mod) => mod.BodyComponent
    ),
  },
  {'path': '**', component: BodyComponent},
];
