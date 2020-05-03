import { Component, OnInit } from '@angular/core';
import { FilmeService } from '../filme.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms'
import { Genre, FilmeIm} from '../filme';
import { EventEmitterService } from 'src/app/idiomas/EventEmitterService';




@Component({
  selector: 'app-filme-novo',
  templateUrl: './filme-novo.component.html',
  styleUrls: ['./filme-novo.component.sass']
})
export class FilmeNovoComponent implements OnInit{

  genres : Genre[];
  filme : FormGroup;


  constructor(
    private filmeService: FilmeService,
    private fb: FormBuilder
  ) {

     this.filme = this.fb.group({
        title: ['', Validators.required],
        originalTitle: ['', Validators.required],
        overview: ['', Validators.required],
        releaseDate: ['', Validators.required],
        genres: [[], Validators.required]
      })
  }

  ngOnInit() {
    
    this.listarGenres();
     // REFRESH NA PAÍGINA DE DETALHES QUANDO O IDIOMA É ALTERADO
  
  }

  listarGenres() {
    this.filmeService.listarGenres().subscribe((data: any[]) => {
      this.genres = data;
    })
  }

  salvarFilme() {
    let novoFilme = new FilmeIm( this.filme.value['originalTitle'],  this.filme.value['originalTitle'], 
                           this.filme.value['overview'], this.filme.value['releaseDate']);
    novoFilme.setGenres(this.filme.value['genres']);
    this.filmeService.salvarFilme(novoFilme).subscribe(
      response => {
        console.log(response);
          // REFRESH NA PAGÍNA DE LISTAR FILMES QUANDO O IDIOMA É ALTERADO 
          EventEmitterService.get('refreshFilmes').emit(true);
      },
      error => {
        console.log(error);
    });
  }
}
