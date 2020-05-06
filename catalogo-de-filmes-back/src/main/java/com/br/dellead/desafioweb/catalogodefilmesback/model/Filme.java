package com.br.dellead.desafioweb.catalogodefilmesback.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Filme implements Serializable{
	
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Transient
	private List<Genre> genresT;
	
	@JsonIgnore
	@ManyToMany(mappedBy = "filmes", fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
	private List<Genre> genres;
	
	private String originalTitle;
	private String overview;
	private String releaseDate;
	private String title;
	
	public Filme() {}
	
	public Filme(String title, String originalTitle, String overview, String releaseDate) {
		this.genres = new ArrayList<>();
		this.genresT = new ArrayList<>();
		this.originalTitle = originalTitle;
		this.overview = overview;
		this.releaseDate = releaseDate;
		this.title = title;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public List<Genre> getGenres() {
		return genres;
	}

	public void setGenres(List<Genre> genres) {
		this.genres = genres;
	}

	public List<Genre> getGenresT() {
		return genresT;
	}

	public void setGenresT(List<Genre> genresT) {
		this.genresT = genresT;
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

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (id ^ (id >>> 32));
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Filme other = (Filme) obj;
		if (id != other.id)
			return false;
		return true;
	}
	
}
