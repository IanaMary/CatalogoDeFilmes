import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class IdiomaService {

  private REST_API_SERVER = "https://api.themoviedb.org/3";
  private GET_CONFIGURATION = "/configuration/primary_translations";
  private REST_API_KEY = "dbdeae6e3e057f601031883c973b7727";

  constructor(private httpClient: HttpClient) { }

  // FUNÇÃO QUE FAZ UMA REQUISIÇÃO À API E TRAZ TODOS OS IDIOMAS DISPONIBILIZADOS PELA API
  public sendGetIdioma() {
    return this.httpClient.get(this.REST_API_SERVER + this.GET_CONFIGURATION + '?api_key=' + this.REST_API_KEY);
  }

}