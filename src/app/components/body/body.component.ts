import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { MainContentComponent } from '../main-content/main-content.component';
import { Menu } from '../../interface/menu';
import { Const } from '../../general/const';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [MenuComponent, MainContentComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent implements OnInit {
  constants = new Const();
  yourMenuData: Menu[] = [
    {
      name: 'Dashboard',
      icon: 'mdi-home-outline',
      url: 'javascript:void(0);',
      role: this.constants.admin,
    },
    {
      name: 'PRODUCTS MANAGEMENT',
      icon: '',
      url: '',
      role: this.constants.admin,
      seperator: true
    },
    {
      name: 'Companies',
      icon: 'mdi-window-maximize',
      url: 'javascript:void(0);',
      role: this.constants.admin,
      subItems: [
        {
          name: 'Company List',
          url: 'layouts-without-menu.html',
          role: this.constants.admin,
          icon: 'mdi-home-outline',
        },
        {
          name: 'Add Company',
          url: 'layouts-without-navbar.html',
          role: this.constants.admin,
          icon: 'mdi-home-outline',
        },
      ]
    },
    {
      name: 'Brands',
      icon: 'mdi-window-maximize',
      url: 'javascript:void(0);',
      role: this.constants.admin,
      subItems: [
        {
          name: 'Brand List',
          url: 'layouts-without-menu.html',
          role: this.constants.admin,
          icon: 'mdi-home-outline',
        },
        {
          name: 'Add Brand',
          url: 'layouts-without-navbar.html',
          role: this.constants.admin,
          icon: 'mdi-home-outline',
        },
      ]
    },
    {
      name: 'Products',
      icon: 'mdi-window-maximize',
      url: 'javascript:void(0);',
      role: this.constants.admin,
      subItems: [
        {
          name: 'Product List',
          url: 'layouts-without-menu.html',
          role: this.constants.admin,
          icon: 'mdi-home-outline',
        },
        {
          name: 'Add Product',
          url: 'layouts-without-navbar.html',
          role: this.constants.admin,
          icon: 'mdi-home-outline',
        },
      ]
    },
    {
      name: 'Order History',
      icon: 'mdi-home-outline',
      url: 'javascript:void(0);',
      role: this.constants.admin,
    },
    {
      name: 'CASH MANAGEMENT',
      icon: '',
      url: '',
      role: this.constants.admin,
      seperator: true
    },
    {
      name: 'Withdraw Requests',
      icon: 'mdi-home-outline',
      url: 'javascript:void(0);',
      role: this.constants.admin,
    },
    {
      name: 'USERS MANAGEMENT',
      icon: '',
      url: '',
      role: this.constants.admin,
      seperator: true
    },
    {
      name: 'Users',
      icon: 'mdi-window-maximize',
      url: 'javascript:void(0);',
      role: this.constants.admin,
      subItems: [
        {
          name: 'User List',
          url: 'layouts-without-menu.html',
          role: this.constants.admin,
          icon: 'mdi-home-outline',
        },
        {
          name: 'Add User',
          url: 'layouts-without-navbar.html',
          role: this.constants.admin,
          icon: 'mdi-home-outline',
        },
      ]
    },
    {
      name: 'Packages',
      icon: 'mdi-window-maximize',
      url: 'javascript:void(0);',
      role: this.constants.admin,
      subItems: [
        {
          name: 'Package List',
          url: 'layouts-without-menu.html',
          role: this.constants.admin,
          icon: 'mdi-home-outline',
        },
        {
          name: 'Add Package',
          url: 'layouts-without-navbar.html',
          role: this.constants.admin,
          icon: 'mdi-home-outline',
        },
      ]
    },
    {
      name: 'Dashboard',
      icon: 'mdi-home-outline',
      url: 'javascript:void(0);',
      role: this.constants.seller,
    },
    {
      name: 'Products',
      icon: 'mdi-home-outline',
      url: 'javascript:void(0);',
      role: this.constants.seller,
    },
    {
      name: 'Orders',
      icon: 'mdi-home-outline',
      url: 'javascript:void(0);',
      role: this.constants.seller,
    },
    {
      name: 'Withdraws',
      icon: 'mdi-window-maximize',
      url: 'javascript:void(0);',
      role: this.constants.seller,
      subItems: [
        {
          name: 'Withdraw List',
          url: 'layouts-without-menu.html',
          role: this.constants.seller,
          icon: 'mdi-home-outline',
        },
        {
          name: 'Withdraw Request',
          url: 'layouts-without-navbar.html',
          role: this.constants.seller,
          icon: 'mdi-home-outline',
        },
      ]
    },
    {
      name: 'Referrals',
      icon: 'mdi-home-outline',
      url: 'javascript:void(0);',
      role: this.constants.seller,
    },
    {
      name: 'Subscriptions',
      icon: 'mdi-home-outline',
      url: 'javascript:void(0);',
      role: this.constants.seller,
    },
    {
      name: 'Profile',
      icon: 'mdi-home-outline',
      url: 'javascript:void(0);',
      role: this.constants.seller,
    },
  ];

  constructor() {
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
}
