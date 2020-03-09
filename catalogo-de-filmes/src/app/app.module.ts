import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule, NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { FilmeListarComponent } from './filmes/filme-listar/filme-listar.component';
import { FilmeDetalheComponent } from './filmes/filme-detalhe/filme-detalhe.component';
import {MatListModule} from '@angular/material/list';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: FilmeListarComponent },
    ]),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatBottomSheetModule,
    HttpClientModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    MatCardModule,
    NgxPaginationModule,
    NgbModule,
    MatListModule 
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    FilmeListarComponent,
    FilmeDetalheComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }