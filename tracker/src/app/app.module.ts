import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareModule } from './modules/share/share.module';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { MainFooterComponent } from './core/main-footer/main-footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";








@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    MainFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp({         //&lt;----ENTER FIREBASE CREDENTIAL HERE
      apiKey: "AIzaSyC09A7uYxzCnhfypahjYw4ypVxKnUEP6yY",
      authDomain: "tracker-50d64.firebaseapp.com",
      projectId: "tracker-50d64",
      storageBucket: "tracker-50d64.appspot.com",
      messagingSenderId: "1019995569412",
      appId: "1:1019995569412:web:1d83d44c3f19e467aa6451",
      measurementId: "G-NDBVQC8L74"
    }),
    AngularFireAuthModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
