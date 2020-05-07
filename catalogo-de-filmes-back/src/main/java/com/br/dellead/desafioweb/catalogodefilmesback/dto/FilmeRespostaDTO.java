package com.br.dellead.desafioweb.catalogodefilmesback.dto;

import java.util.ArrayList;
import java.util.List;

import com.br.dellead.desafioweb.catalogodefilmesback.model.Filme;
import com.br.dellead.desafioweb.catalogodefilmesback.model.Genre;

public class FilmeRespostaDTO {
	
	private List<Genre> genres;
	private String originalTitle;
	private String overview;
	private String releaseDate;
	private String title;
	
	private FilmeRespostaDTO(String title, String originalTitle, String overview, String releaseDate) {
		this.genres = new ArrayList<>();
		this.originalTitle = originalTitle;
		this.overview = overview;
		this.releaseDate = releaseDate;
		this.title = title;
	}
	
	
	public static FilmeRespostaDTO transformaEmDTO(Filme filme) {
	    return new FilmeRespostaDTO(filme.getTitle(), filme.getOriginalTitle(),
	    		filme.getOverview(), filme.getReleaseDate());
	}

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
	
	
}
