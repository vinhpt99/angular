import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'; 
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule} from '@angular/material/select';
// import { RouterModule } from '@angular/router';
import { MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WordComponent } from './word/word.component'; 
import { ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { AssessmentComponent } from './assessment/assessment.component';
import { UpdateAssessmentComponent } from './update-assessment/update-assessment.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';



// import { Input } from '@angular/core';

// import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    WordComponent,
    TodoComponent,
    WeatherComponent,
    AssessmentComponent,
    UpdateAssessmentComponent,
    HomeComponent,
    AboutComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent,
  ],
  imports: [
    MatIconModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    FormsModule,
    MatCheckboxModule,
    MatSelectModule,
    // RouterModule.forRoot([
    //   // {path: 'crisis-list', component: CrisisListComponent},
    //   {path: 'test', component: NewComponentComponent},
    //   {path: 'update-assessment', component: UpdateAssessmentComponent},
    //   {path: '', component: AssessmentComponent},
    // ]),
    MatInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    // Input
      // MatFormFieldModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
