import { Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { AppComponent } from './app.component';
import { MainContentComponent } from './components/main-content/main-content.component';

export const routes: Routes = [
  {
    path: '',
    component: BodyComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./components/main-content/main-content.component').then(
            (mod) => mod.MainContentComponent
          ),
      },
    ],
  },
    {
      path: 'Company',
      loadComponent: () =>
        import('./components/company/company-list/company-list.component').then(
          (mod) => mod.CompanyListComponent
        ),
    },
    {
      path: 'Add-Company',
      loadComponent: () =>
        import('./components/company/add-company/add-company.component').then(
          (mod) => mod.AddCompanyComponent
        ),
    },
    {
      path: 'Brand',
      loadComponent: () =>
        import('./components/brand/brand-list/brand-list.component').then(
          (mod) => mod.BrandListComponent
        ),
    },
    {
      path: 'Add-Brand',
      loadComponent: () =>
        import('./components/brand/add-brand/add-brand.component').then(
          (mod) => mod.AddBrandComponent
        ),
    },
    {
      path: 'Product',
      loadComponent: () =>
        import('./components/product/admin/product-list/product-list.component').then(
          (mod) => mod.ProductListComponent
        ),
    },
    {
      path: 'Add-Product',
      loadComponent: () =>
        import('./components/product/admin/add-product/add-product.component').then(
          (mod) => mod.AddProductComponent
        ),
    },
    {
      path: 'Order-History',
      loadComponent: () =>
        import('./components/order/admin/order-history/order-history.component').then(
          (mod) => mod.OrderHistoryComponent
        ),
    },
    {
      path: 'Withdraw',
      loadComponent: () =>
        import('./components/withdraw/admin/withdraw-request/withdraw-request.component').then(
          (mod) => mod.WithdrawRequestComponent
        ),
    },
    {
      path: 'User',
      loadComponent: () =>
        import('./components/user/user-list/user-list.component').then(
          (mod) => mod.UserListComponent
        ),
    },
    {
      path: 'Add-User',
      loadComponent: () =>
        import('./components/user/add-user/add-user.component').then(
          (mod) => mod.AddUserComponent
        ),
    },
    {
      path: 'Package',
      loadComponent: () =>
        import('./components/package/package-list/package-list.component').then(
          (mod) => mod.PackageListComponent
        ),
    },
    {
      path: 'Add-Package',
      loadComponent: () =>
        import('./components/package/add-package/add-package.component').then(
          (mod) => mod.AddPackageComponent
        ),
    },

  { path: '**', redirectTo: '' },
];
