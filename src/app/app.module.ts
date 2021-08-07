import { MatSliderModule } from '@angular/material/slider';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BiscoitoComponent } from './biscoito/biscoito.component';
import { RouterModule, Routes } from '@angular/router';
import { MensageComponent } from './mensage/mensage.component';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';

const routes: Routes = [
  { path: '', component: BiscoitoComponent},
  { path: 'message', component: MensageComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    BiscoitoComponent,
    MensageComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatSliderModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
