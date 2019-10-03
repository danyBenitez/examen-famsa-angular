import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponet } from './components/header/header.component';
import { BodyComponent } from './components/body/body.componet';
import { HttpClientModule } from '@angular/common/http';
import { PendienteService } from './services/pendiente.service';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponet,
    BodyComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PendienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
