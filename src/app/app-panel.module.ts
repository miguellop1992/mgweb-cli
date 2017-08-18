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

import { Ng2Summernote } from 'ng2-summernote/ng2-summernote';

var router = [
  {
    path: '', component: PanelComponent, children: [
      { path: 'profile', component: PanelProfileComponent },
      { path: 'portfolio', component: PanelPortfolioComponent },
      { path: 'portfolio/new', component: FormPortfolioComponent },
      { path: 'portfolio/edit/:id', component: FormPortfolioComponent },
      { path: 'blog', component: PanelBlogComponent },
      { path: 'budget', component: PanelBudgetComponent },
      { path: 'budget/new', component: FormBudgetComponent },
      { path: 'budget/edit/:id', component: FormBudgetComponent },
      
      
      { path: '', redirectTo: '/profile', pathMatch: 'full' }

    ]
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(router)
  ],
  declarations: [
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
  bootstrap: [AppPanelComponent]

})
export class AppPanelModule { }
