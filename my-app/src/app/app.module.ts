import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';

import { MatButtonModule } from '@angular/material/button'; 
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule} from '@angular/material/select';
import { RouterModule } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WordComponent } from './word/word.component'; 
import { ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';

// import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    WordComponent,
    TodoComponent,
    WeatherComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    FormsModule,
    MatCheckboxModule,
    MatSelectModule,
    RouterModule.forRoot([
      // {path: 'crisis-list', component: CrisisListComponent},
      {path: 'test', component: NewComponentComponent},
    ]),
    MatInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
      // MatFormFieldModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
