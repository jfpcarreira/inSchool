import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';
import { ReactiveFormsModule }    from '@angular/forms';
import { AngularFireModule }      from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule }  from 'angularfire2/auth';

import { environment }            from '../environments/environment';

import { AppComponent }           from './app.component';
import { TesteComponent }         from './components/teste/teste.component';

@NgModule({
  declarations: [
    AppComponent,
    TesteComponent
  ],
  imports: [
      BrowserModule
    , AngularFireModule.initializeApp(environment.firebase, 'inSchool')
    , AngularFirestoreModule
    , AngularFireAuthModule
    , ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
