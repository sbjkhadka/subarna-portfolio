import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ContactFormComponent } from './common-components/contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocialIconComponent } from './common-components/social-icon/social-icon.component';
import { MyProjectComponent } from './portfolio/my-project/my-project.component';

@NgModule({
  declarations: [					
    AppComponent,
      HeaderComponent,
      ResumeComponent,
      PortfolioComponent,
      FooterComponent,
      NavbarComponent,
      AboutComponent,
      ContactFormComponent,
      SocialIconComponent,
      MyProjectComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
