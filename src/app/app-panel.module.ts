import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppPanelComponent } from './app-panel.component';
import { PanelComponent } from './panel/panel.component';
import { PanelProfileComponent } from './panel-profile/panel-profile.component';
import { PanelPortfolioComponent } from './panel-portfolio/panel-portfolio.component';
import { PanelBlogComponent } from './panel-blog/panel-blog.component';
import { PanelSettingComponent } from './panel-setting/panel-setting.component';
import { PanelBudgetComponent } from './panel-budget/panel-budget.component';
import { FormPortfolioComponent } from './panel-portfolio/form-portfolio/form-portfolio.component';
import { FormBudgetComponent } from './panel-budget/form-budget/form-budget.component';
import { LoginComponent } from './login/login.component';

import { Ng2Summernote } from 'ng2-summernote/ng2-summernote';

import { StorageService } from './security/storage.service';
import { AuthService } from './security/auth.service';
import { AuthGuard } from './security/auth.guard';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { TagsInputModule } from 'ng2-tags-input/dist';

var router = [
  {
    path: '', component: PanelComponent, children: [
      { path: 'profile', component: PanelProfileComponent, canActivate:[AuthGuard] },
      { path: 'portfolio', component: PanelPortfolioComponent, canActivate:[AuthGuard] },
      { path: 'portfolio/new', component: FormPortfolioComponent, canActivate:[AuthGuard] },
      { path: 'portfolio/edit/:id', component: FormPortfolioComponent, canActivate:[AuthGuard] },
      { path: 'blog', component: PanelBlogComponent, canActivate:[AuthGuard] },
      { path: 'budget', component: PanelBudgetComponent, canActivate:[AuthGuard] },
      { path: 'budget/new', component: FormBudgetComponent, canActivate:[AuthGuard] },
      { path: 'budget/edit/:id', component: FormBudgetComponent, canActivate:[AuthGuard] },      
      { path: '', redirectTo: '/profile', pathMatch: 'full' }
      // { path: '', redirectTo: '/login', pathMatch: 'full' }
      
    ]
  },
  { path: 'login', component: LoginComponent },
  // { path: '**', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/profile', pathMatch: 'full' },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(router),
    NgxMyDatePickerModule.forRoot(),
    TagsInputModule.forRoot()
    
  ],
  declarations: [
    LoginComponent,
    Ng2Summernote,
    AppPanelComponent,
    PanelComponent,
    PanelProfileComponent,
    PanelPortfolioComponent,
    PanelBlogComponent,
    PanelSettingComponent,
    PanelBudgetComponent,
    FormPortfolioComponent,
    FormBudgetComponent
  ],
  providers: [StorageService, AuthService, AuthGuard],  
  bootstrap: [AppPanelComponent]
  

})
export class AppPanelModule { }
