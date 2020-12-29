import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewPostComponent } from './components/posts/new-post/new-post.component';
import { NewPostModule } from './components/posts/new-post/new-post.module';
import { PostComponent } from './components/posts/post/post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';

 
/* fire base */
import{ AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, BUCKET  } from '@angular/fire/storage';
import{ AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import{AngularFireAuthModule} from '@angular/fire/auth';
import{ReactiveFormsModule} from '@angular/forms';
import { ContainerAppComponent } from './components/pages/container-app/container-app.component';
import { TableComponent } from './shared/components/table/table.component';





@NgModule({
  declarations: [
    AppComponent,
    NewPostComponent,
    PostComponent,
    ToolbarComponent,
    ContainerAppComponent,
    TableComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AppRoutingModule,
    NewPostModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule

  ],
  providers: [
    {provide: BUCKET, useValue:'gs://arrendadora-la-estafa.appspot.com'}
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
