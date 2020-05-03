import { Component, OnInit } from '@angular/core';
import { FilmeService } from '../filme.service';
import { Filme, Genre } from '../filme';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment'; 
import { EventEmitterService } from 'src/app/idiomas/EventEmitterService';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filme-editar',
  templateUrl: './filme-editar.component.html',
  styleUrls: ['./filme-editar.component.css']
})
export class FilmeEditarComponent implements OnInit {
  filmeEditar : Filme;
  filme : FormGroup;
  genres : Genre[];
  submitted = false;
  message = '';
  formato: string;
  refreshEvento: any = null;
  local: string = localStorage.getItem("idioma");

  constructor(
    private filmeService: FilmeService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

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
      this.filmeEditar = data;
    });
  }


  editarFilme() {
    this.submitted =  true;
    this.filmeService.editarFilme(this.filmeEditar.id, this.filmeEditar)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The tutorial was updated successfully!';
        },
        error => {
          console.log(error);
        });
    }

}
