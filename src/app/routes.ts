import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessegesComponent } from './messeges/messeges.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailsComponent } from './members/member-details/member-details.component';
import { MemberDetailsResolver } from './_resolver/member-details.resolver';
import { MemberListResolver } from './_resolver/member-list.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolver/member-edit.resolver';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
      path: '',
      runGuardsAndResolvers: 'always',
      canActivate: [AuthGuard],
      children: [
        { path: 'members', component: MemberListComponent, resolve: {users: MemberListResolver} },
        { path: 'members/:id', component: MemberDetailsComponent, resolve: {user: MemberDetailsResolver}},
        { path: 'member/edit', component: MemberEditComponent, resolve: {user: MemberEditResolver}},
        { path: 'messeges', component: MessegesComponent },
        { path: 'lists', component: ListsComponent },
      ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' } // If no routes match, then '**' it will automatically redirect it to 'home'
  ];