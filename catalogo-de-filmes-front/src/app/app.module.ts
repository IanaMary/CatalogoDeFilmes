import { NgModule, OnInit } from '@angular/core';
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
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MomentModule } from 'angular2-moment';
import {HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { FilmeNovoComponent } from './filmes/filme-novo/filme-novo.component';
import { FilmeEditarComponent } from './filmes/filme-editar/filme-editar.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {MatSelectModule} from '@angular/material/select';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';




// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    NgbModule,
    FormsModule,
    NgSelectModule,
    NgOptionHighlightModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MomentModule,
    NgMultiSelectDropDownModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    FilmeListarComponent,
    FilmeDetalheComponent,
    FilmeNovoComponent,
    FilmeEditarComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {


}