import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { NgModule, ErrorHandler } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './course/courses.service';
import { AutherComponent } from './auther/auther.component';
import { AutherService } from './auther/auther.service';
import { SummaryPipe } from 'src/summary.pipes';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { UdemyCourseFormComponent } from './udemy-course-form/udemy-course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
import { UserComponent } from './user/user.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { AppErrorHandler } from 'src/common/app-error-handler';
import { GithubComponent } from './github/github.component';
import { GithubService } from './services/github.service';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AutherComponent,
    SummaryPipe,
    FavoriteComponent,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    UdemyCourseFormComponent,
    SignupFormComponent,
    AddCourseComponent,
    ChangePasswordFormComponent,
    UserComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CoursesService,
    AutherService ,
    UserService ,
    GithubService,
    {provide : ErrorHandler , useClass : AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
