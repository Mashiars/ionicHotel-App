import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'landing-page',
    loadChildren: () => import('./landing-page/landing-page.module').then( m => m.LandingPagePageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'hotel-list',
    loadChildren: () => import('./hotel-list/hotel-list.module').then( m => m.HotelListPageModule)
  },
  {
    path: 'main-hotel',
    loadChildren: () => import('./main-hotel/main-hotel.module').then( m => m.MainHotelPageModule)
  },
  {
    path: 'create-account',
    loadChildren: () => import('./create-account/create-account.module').then( m => m.CreateAccountPageModule)
  },
  {
    path: 'booking-form',
    loadChildren: () => import('./booking-form/booking-form.module').then( m => m.BookingFormPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'record',
    loadChildren: () => import('./record/record.module').then( m => m.RecordPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login-admin',
    loadChildren: () => import('./login-admin/login-admin.module').then( m => m.LoginAdminPageModule)
  },
  {
    path: 'successfull-book',
    loadChildren: () => import('./successfull-book/successfull-book.module').then( m => m.SuccessfullBookPageModule)
  },
  {
    path: 'boooking-history',
    loadChildren: () => import('./boooking-history/boooking-history.module').then( m => m.BoookingHistoryPageModule)
  },  {
    path: 'hotel-ui',
    loadChildren: () => import('./hotel-ui/hotel-ui.module').then( m => m.HotelUiPageModule)
  },
  {
    path: 'hotel-edit-profile',
    loadChildren: () => import('./hotel-edit-profile/hotel-edit-profile.module').then( m => m.HotelEditProfilePageModule)
  },
  {
    path: 'hotel-pictures',
    loadChildren: () => import('./hotel-pictures/hotel-pictures.module').then( m => m.HotelPicturesPageModule)
  },
  {
    path: 'hotel-profile',
    loadChildren: () => import('./hotel-profile/hotel-profile.module').then( m => m.HotelProfilePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
