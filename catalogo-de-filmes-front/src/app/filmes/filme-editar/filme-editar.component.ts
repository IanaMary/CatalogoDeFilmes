import { Component, OnInit } from '@angular/core';
import { FilmeService } from '../filme.service';
import { Filme, Genre } from '../filme';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment'; 
import { EventEmitterService } from 'src/app/idiomas/EventEmitterService';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formatDate, DatePipe } from '@angular/common';
import { AttachSession } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-filme-editar',
  templateUrl: './filme-editar.component.html',
  styleUrls: ['./filme-editar.component.sass']
})
export class FilmeEditarComponent implements OnInit {
  filmeEditar : Filme;
  filme : FormGroup;
  genres : Genre[];
  submitted = false;
  dataAux : string;
  message = '';
  formato: string;
  refreshEvento: any = null;
  local: string = localStorage.getItem("idioma");

  constructor(
    private filmeService: FilmeService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.filme = this.fb.group({
      title: ['', Validators.required],
      originalTitle: ['', Validators.required],
      overview: ['', Validators.required],
      //releaseDate: ['', Validators.required],
      genres: [[], Validators.required]
    })
  }

  ngOnInit(): void {
    this.getFilme(this.route.snapshot.params['id']);
    this.listarGenres();
  }

  listarGenres() {
    this.filmeService.listarGenres().subscribe((data: any[]) => {
      this.genres = data;
    })
  }

  getFilme(id: string) {
    this.filmeService.buscarFilmePorId(id).subscribe((data: Filme) => {
      moment.locale(this.local);
      data.releaseDate = new Date(data.releaseDate);
      this.filmeEditar = data;
    });
  }


  editarFilme() {
    this.filmeEditar.releaseDate = new Date(this.filmeEditar.releaseDate);
    this.filmeService.editarFilme(this.filmeEditar.id, this.filmeEditar)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
    }

    formData(){
      return this.filmeEditar.releaseDate.toISOString().substring(0, 10);
    }
}
