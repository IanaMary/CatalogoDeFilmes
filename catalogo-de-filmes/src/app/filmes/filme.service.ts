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

  constructor(private httpClient: HttpClient) { }

  public sendGetPopularRequest(page: number) {
    return this.httpClient.get(this.REST_API_SERVER + this.GET_POPULAR + '?api_key=' + this.REST_API_KEY + '&language=pt-BR&page=' + page );
  }


  public sendSearchByName(nomeDoFilme: string) {
    return this.httpClient.get(this.REST_API_SERVER + this.SEARCH_MOVIE + '?api_key=' + this.REST_API_KEY + '&language=pt-BR&query=' + nomeDoFilme );

  }

  public sendFindByIdRequest(filmeId: string) {
    return this.httpClient.get(this.REST_API_SERVER + this.GET_DETAILS + filmeId + '?api_key=' + this.REST_API_KEY + '&language=pt_BR');
  }

}