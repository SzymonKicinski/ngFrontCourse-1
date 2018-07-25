import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AuthtModule } from './auth/auth.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { RecipeModule } from './recipes/recipe/recipe.module';
import { AuthGuard, CanLoadAuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { DataStorageService } from './shared/data.storage.service';
import { RecipeService } from './recipes/recipe.service';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app.routing.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    // For eg lazy loading
    HomeComponent
  ],
  imports: [
    // Ng
    BrowserModule,
    FormsModule,
    HttpModule,
    // recipe
    RecipeModule,
    // Shared Module
    SharedModule,
    // Shopping
    ShoppingListModule,
    // Authentiaction
    AuthtModule,
    // Routing
    AppRoutingModule
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    DataStorageService,
    AuthService,
    AuthGuard,
    CanLoadAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
