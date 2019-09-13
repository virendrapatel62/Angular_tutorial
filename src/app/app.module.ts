import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { NgModule } from '@angular/core';
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
    AddCourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule

  ],
  providers: [
    CoursesService,
    AutherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
