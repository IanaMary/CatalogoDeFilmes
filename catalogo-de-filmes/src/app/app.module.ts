import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilmeListarComponent } from './filmes/filme-listar/filme-listar.component';
import { FilmeDetalheComponent } from './filmes/filme-detalhe/filme-detalhe.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    FilmeListarComponent,
    FilmeDetalheComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}