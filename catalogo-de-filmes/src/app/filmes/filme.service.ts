import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class FilmeService {

  private REST_API_SERVER = "https://api.themoviedb.org/3";
  private SEARCH_MOVIE = "/search/movie";
  private GET_DETAILS = "/movie/";
  private GET_POPULAR = "/movie/popular";
  private REST_API_KEY = "dbdeae6e3e057f601031883c973b7727";
  idioma : string; 

  constructor(private httpClient: HttpClient) { }

  // FUNÇÃO QUE FAZ UMA REQUISIÇÃO À API E TRAZ TODOS OS FILMES POPULARES
  public sendGetPopularRequest(pagina: number, idiomaSelecionado: string) {
    this.idioma = idiomaSelecionado;
    return this.httpClient.get(this.REST_API_SERVER + this.GET_POPULAR + '?api_key=' + this.REST_API_KEY + '&language=' + idiomaSelecionado + '&page=' + pagina );
  }

  // FUNÇÃO QUE FAZ UM REQUISIÇÃO À API E TRAZ UM FILME COM BASE NO NOME FORNECIDO
  public sendSearchByName(nomeDoFilme: string) {
    return this.httpClient.get(this.REST_API_SERVER + this.SEARCH_MOVIE + '?api_key=' + this.REST_API_KEY + '&language=' +  this.idioma + '&query=' + nomeDoFilme );

  }

  // FUNÇÃO QUE FAZ UM REQUISIÇÃO À API E TRAZ OS DETALHES DE UM FILME COM BASE NO ID DO FILME FORNECIDO
  public sendFindByIdRequest(filmeId: string) {
    return this.httpClient.get(this.REST_API_SERVER + this.GET_DETAILS + filmeId + '?api_key=' + this.REST_API_KEY + '&language=' + this.idioma);
  }

}