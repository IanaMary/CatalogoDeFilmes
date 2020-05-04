import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Filme } from './filme';

@Injectable({
  providedIn: 'root'
})


export class FilmeService {

  private REST_API_SERVER = "https://api.themoviedb.org/3";
  private SEARCH_MOVIE = "/search/movie";
  private GET_DETAILS = "/movie/";
  private GET_POPULAR = "/movie/popular";
  private REST_API_KEY = "dbdeae6e3e057f601031883c973b7727";
  idioma :  string;

  constructor(private httpClient: HttpClient) { }

 // SERVICE DO BACK DA API  
 /* // FUNÇÃO QUE FAZ UMA REQUISIÇÃO À API E TRAZ TODOS OS FILMES POPULARES
  public sendGetPopularRequest(pagina: number) {
    this.idioma = localStorage.getItem("idioma");
    return this.httpClient.get(this.REST_API_SERVER + this.GET_POPULAR + '?api_key=' + this.REST_API_KEY + '&language=' + this.idioma + '&page=' + pagina );
  }

  // FUNÇÃO QUE FAZ UM REQUISIÇÃO À API E TRAZ UM FILME COM BASE NO NOME FORNECIDO
  public sendSearchByName(nomeDoFilme: string) {
    this.idioma = localStorage.getItem("idioma");
    return this.httpClient.get(this.REST_API_SERVER + this.SEARCH_MOVIE + '?api_key=' + this.REST_API_KEY + '&language=' +  this.idioma + '&query=' + nomeDoFilme );

  }

  // FUNÇÃO QUE FAZ UM REQUISIÇÃO À API E TRAZ OS DETALHES DE UM FILME COM BASE NO ID DO FILME FORNECIDO
  public sendFindByIdRequest(filmeId: string) {
    this.idioma = localStorage.getItem("idioma");
    return this.httpClient.get(this.REST_API_SERVER + this.GET_DETAILS + filmeId + '?api_key=' + this.REST_API_KEY + '&language=' + this.idioma);
  } */

   // SERVICE DO MEU BACK  
  public listarFilmes(nomeDoFilme: string) {
    let params = new HttpParams();
    params = params.append('titulo', nomeDoFilme);
    return this.httpClient.get("http://localhost:8080/filmes/", {params:params});
  }

  public salvarFilme(filme : Filme) {
    return this.httpClient.post("http://localhost:8080/filmes/salvar", filme);
  }

  public editarFilme(filmeId : number, filme : Filme) {
    return this.httpClient.put("http://localhost:8080/filmes/editar/"+ filmeId, filme);
  }

  public listarGenres() {
    return this.httpClient.get("http://localhost:8080/genres/");
  }

  // FUNÇÃO QUE FAZ UM REQUISIÇÃO À API E TRAZ OS DETALHES DE UM FILME COM BASE NO ID DO FILME FORNECIDO
  public buscarFilmePorId(filmeId: string) {
    return this.httpClient.get("http://localhost:8080/filmes/detalhes/"+ filmeId);
  }


  public deletarFilme(filmeId: string) {
    return this.httpClient.delete("http://localhost:8080/filmes/deletar/"+filmeId);
  }



}