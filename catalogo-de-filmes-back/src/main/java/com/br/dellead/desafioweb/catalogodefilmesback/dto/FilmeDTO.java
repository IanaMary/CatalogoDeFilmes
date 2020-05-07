package com.br.dellead.desafioweb.catalogodefilmesback.dto;

import java.util.List;

import com.br.dellead.desafioweb.catalogodefilmesback.model.Filme;
import com.br.dellead.desafioweb.catalogodefilmesback.model.Genre;

public class FilmeDTO {
		
	private List<Genre> genres;
	private String originalTitle;
	private String overview;
	private String releaseDate;
	private String title;	
	
	public List<Genre> getGenres() {
		return genres;
	}

	public void setGenres(List<Genre> genres) {
		this.genres = genres;
	}

	public String getOriginalTitle() {
		return originalTitle;
	}

	public void setOriginalTitle(String originalTitle) {
		this.originalTitle = originalTitle;
	}

	public String getOverview() {
		return overview;
	}

	public void setOverview(String overview) {
		this.overview = overview;
	}

	public String getReleaseDate() {
		return releaseDate;
	}

	public void setReleaseDate(String releaseDate) {
		this.releaseDate = releaseDate;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Filme transformaParaObjeto(){
	    return new Filme(title, originalTitle, overview, releaseDate);
	}

}
