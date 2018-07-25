import { HomeComponent } from './home/home.component';
import { AuthGuard, CanLoadAuthGuard } from './auth/auth-guard.service';
import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule, CanLoad } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
    // {
    //     path: '', redirectTo: '/recipes', pathMatch: 'full'
    // },
    { path: '', component: HomeComponent },
    {   // Wildcart
        path: '**', component: HomeComponent
    },
    {
        // path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule',
        // CanLoad:[CanLoadAuthGuard]
        path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'
    },
    { path: 'shopping-list', component: ShoppingListComponent }



];

@NgModule({
    imports: [RouterModule.forRoot
        (
        appRoutes,
        { enableTracing: true }
        )],
    exports: [RouterModule]
})
export class AppRoutingModule { }
