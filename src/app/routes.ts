import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessegesComponent } from './messeges/messeges.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
      path: '',
      runGuardsAndResolvers: 'always',
      canActivate: [AuthGuard],
      children: [
        { path: 'members', component: MemberListComponent },
        { path: 'messeges', component: MessegesComponent },
        { path: 'lists', component: ListsComponent },
      ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' } // If no routes match, then '**' it will automatically redirect it to 'home'
  ];