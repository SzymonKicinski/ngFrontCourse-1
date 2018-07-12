import { NgModule } from '@angular/core';

import { Route, Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

const authRoutes: Routes = [
    {
        path: '', redirectTo: '/recipes', pathMatch: 'full'
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'signin',
        component: SigninComponent
    }


];

@NgModule({
    imports:
        [
            RouterModule.forChild(authRoutes)
        ],
    exports: [RouterModule]
})
export class AuthRoutingModule {
    // import { AuthGuard } from './auth/auth-guard.service';
}