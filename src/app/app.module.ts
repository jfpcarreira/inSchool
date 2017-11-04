import { BrowserModule }      from '@angular/platform-browser';
import { NgModule }           from '@angular/core';
import { AngularFireModule }  from 'angularfire2';
import { environment }        from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent }       from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule
    , AngularFireModule.initializeApp(environment.firebase, 'my-app-name') // imports firebase/app needed for everything
    , AngularFirestoreModule // imports firebase/firestore, only needed for database features
    , AngularFireAuthModule  // imports firebase/auth, only needed for auth features
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
