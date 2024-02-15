import { Routes } from '@angular/router';
import { AddNewBookComponent } from './Pages/add-new-book/add-new-book.component';
import { AdminDashboardComponent } from './Pages/admin-dashboard/admin-dashboard.component';
import { CutstomerDashboardComponent } from './Pages/cutstomer-dashboard/cutstomer-dashboard.component';
import { GetAllBooksComponent } from './Pages/get-all-books/get-all-books.component';
import { GetBookByAuthorComponent } from './Pages/get-book-by-author/get-book-by-author.component';
import { GetBookByGenereComponent } from './Pages/get-book-by-genere/get-book-by-genere.component';
import { GetBookByTitleComponent } from './Pages/get-book-by-title/get-book-by-title.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { UpdateBookComponent } from './Pages/update-book/update-book.component';

import { UserGetAllBooksComponent } from './Pages/user-get-all-books/user-get-all-books.component';

export const routes: Routes = [


    {
        path: 'admin-dashboard',
        component: AdminDashboardComponent,
        children: [
            {path:'add-new-book',component:AddNewBookComponent},
            {path:'get-all-books',component:GetAllBooksComponent},
            {path:'search/:bid',component:UpdateBookComponent},
           
        ]
    },

    {
        path: 'cutstomer-dashboard',
        component: CutstomerDashboardComponent,
        children: [
         {path:'user-get-all-books',component:UserGetAllBooksComponent},
         {path:'get-book-by-author',component:GetBookByAuthorComponent},
         {path:'get-book-by-genre',component:GetBookByGenereComponent},
         {path:'get-book-by-title',component:GetBookByTitleComponent}
        ]
    },
    {path:'register',component:RegisterComponent},
    {path:'',component:LoginComponent},
    {path:'login',component:LoginComponent},
   
];
