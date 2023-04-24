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
    path: 'weather',
    loadChildren: () => import('./weather/weather.module').then( m => m.WeatherPageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'counties',
    loadChildren: () => import('./counties/counties.module').then( m => m.CountiesPageModule)
  },
  {
    path: 'ulster-counties',
    loadChildren: () => import('./ulster-counties/ulster-counties.module').then( m => m.UlsterCountiesPageModule)
  },
  {
    path: 'munster-counties',
    loadChildren: () => import('./munster-counties/munster-counties.module').then( m => m.MunsterCountiesPageModule)
  },
  {
    path: 'leinster-counties',
    loadChildren: () => import('./leinster-counties/leinster-counties.module').then( m => m.LeinsterCountiesPageModule)
  },
  {
    path: 'connacht-counties',
    loadChildren: () => import('./connacht-counties/connacht-counties.module').then( m => m.ConnachtCountiesPageModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('./movies/movies.module').then( m => m.MoviesPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
