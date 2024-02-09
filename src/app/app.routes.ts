import { Routes } from '@angular/router';
import { AddNewBookComponent } from './Pages/add-new-book/add-new-book.component';
import { AdminDashboardComponent } from './Pages/admin-dashboard/admin-dashboard.component';
import { CutstomerDashboardComponent } from './Pages/cutstomer-dashboard/cutstomer-dashboard.component';
import { GetAllBooksComponent } from './Pages/get-all-books/get-all-books.component';
import { LoginComponent } from './Pages/login/login.component';

export const routes: Routes = [


    {
        path: 'admin-dashboard',
        component: AdminDashboardComponent,
        children: [
            {path:'add-new-book',component:AddNewBookComponent},
            {path:'get-all-books',component:GetAllBooksComponent}
        ]
    },

    {
        path: 'cutstomer-dashboard',
        component: CutstomerDashboardComponent,
        children: [
          //{ path: 'search', component: SearchComponent },
         // { path: 'login', component: LoginComponent },
        ]
    },
    {path: '',component: LoginComponent},
];
