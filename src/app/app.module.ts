import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';
import { ReactiveFormsModule }    from '@angular/forms';
import { AngularFireModule }      from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule }  from 'angularfire2/auth';
import { NgbModule }              from '@ng-bootstrap/ng-bootstrap';

import { environment }            from '../environments/environment';

import { AppComponent }           from './app.component';
import { HeaderComponent }        from './components/layout/header/header.component';
import { UserinfoComponent }      from './components/layout/userinfo/userinfo.component';

import { Teste2Component }        from './components/teste2/teste2.component';

@NgModule({
  declarations: [
    AppComponent,
    Teste2Component,
    HeaderComponent,
    UserinfoComponent
  ],
  imports: [
      BrowserModule
    , NgbModule.forRoot()
    , AngularFireModule.initializeApp(environment.firebase, 'inSchool')
    , AngularFirestoreModule
    , AngularFireAuthModule
    , ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
