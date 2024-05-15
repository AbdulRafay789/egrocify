import { Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';

export const routes: Routes = [
  {'path': '', component: BodyComponent},
  {
    'path': 'C',
    loadComponent: () =>
    import('./components/body/body.component').then(
      (mod) => mod.BodyComponent
    ),
  },
  {'path': '**', component: BodyComponent},
];
