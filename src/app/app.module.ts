import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './course/courses.service';
import { AutherComponent } from './auther/auther.component';
import { AutherService } from './auther/auther.service';
import { SummaryPipe } from 'src/summary.pipes';
import { FavoriteComponent } from './favorite/favorite.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AutherComponent , 
    SummaryPipe, FavoriteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule  , 
    
  ],
  providers: [
    CoursesService , 
    AutherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
