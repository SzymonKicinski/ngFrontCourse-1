import { AuthGuard } from './auth/auth-guard.service';
import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';

const appRoutes: Routes = [
    {
        path: '', redirectTo: '/recipes', pathMatch: 'full'
    },
    {
        path: 'shopping-list',
        component: ShoppingListComponent
    },
    {   // Wildcart
        path: '**',
        component: RecipesComponent
    }


];

@NgModule({
    imports: [RouterModule.forRoot
        (
        appRoutes,
        { enableTracing: true }
        )],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
