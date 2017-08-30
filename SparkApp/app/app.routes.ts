
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { AboutComponent } from './components/about.component';
import { Routes } from '@angular/router';
// Purely an example
// Change the routes/components to meet your needs
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: "home",
    children: [
      // '/home' loaded into `router-outlet` in main content
      { path: "", component: HomeComponent }, 
      // '/home/otherPath' loaded into `router-outlet` in main content
      { path: "otherPath", component: HomeComponent },  
      // etc.
    ]
  },   
  // '/someNavPage' pushed on nav stack using `page-router-outlet` (ie, push on a detail view with no drawer)
  { path: "about", component: AboutComponent },
  // etc.
];