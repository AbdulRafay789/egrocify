import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { MainContentComponent } from '../main-content/main-content.component';
import { Menu } from '../../interface/menu';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [MenuComponent,MainContentComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {
  yourMenuData: Menu[] = [
    {
      name: 'Dashboards',
      icon: 'mdi-home-outline',
      url: 'javascript:void(0);',
      role: 'admin',
      subItems: [
        {
          name: 'CRM',
          url: 'https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/vertical-menu-template/dashboards-crm.html',
          role: 'pro',
          icon: 'mdi-home-outline',
        },
        {
          name: 'Analytics',
          url: 'index.html',
          role: '',
          icon: 'mdi-home-outline',
        },
        {
          name: 'eCommerce',
          url: 'https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/vertical-menu-template/app-ecommerce-dashboard.html',
          role: 'pro',
          icon: 'mdi-home-outline',
        },
        {
          name: 'Logistics',
          url: 'https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/vertical-menu-template/app-logistics-dashboard.html',
          role: 'pro',
          icon: 'mdi-home-outline',
        },
        {
          name: 'Academy',
          url: 'https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/vertical-menu-template/app-academy-dashboard.html',
          role: 'pro',
          icon: 'mdi-home-outline',
        }
      ]
    },
    {
      name: 'Layouts',
      icon: 'mdi-window-maximize',
      url: 'javascript:void(0);',
      role: 'seller',
      subItems: [
        {
          name: 'Without menu',
          url: 'layouts-without-menu.html',
          role: '',
          icon: 'mdi-home-outline',
        },
        {
          name: 'Without navbar',
          url: 'layouts-without-navbar.html',
          role: '',
          icon: 'mdi-home-outline',
        },
        // Add other layout items as needed
      ]
    },
  ];
}
