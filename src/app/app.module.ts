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
import { SubheaderComponent }     from './components/layout/subheader/subheader.component';
import { FooterComponent }        from './components/layout/footer/footer.component';
import { UserinfoComponent }      from './components/layout/leftmenu/userinfo/userinfo.component';
import { MenuComponent }          from './components/layout/leftmenu/menu/menu.component';
import { LmFooterComponent }      from './components/layout/leftmenu/footer/footer.component';
import { DashboardComponent }     from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
      AppComponent
    , HeaderComponent
    , UserinfoComponent
    , MenuComponent
    , LmFooterComponent
    , FooterComponent
    , SubheaderComponent
    , DashboardComponent
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
