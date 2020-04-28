package com.br.dellead.desafioweb.catalogodefilmesback.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

@Entity
public class Filme implements Serializable{
	
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	@ManyToMany(fetch = FetchType.LAZY, mappedBy = "filmes")
	private List<Genre> genres;
	
	@ManyToMany(fetch = FetchType.LAZY, mappedBy = "filmes")
	private List<ProductionCompanies> productionsCompanies;
	
	@ManyToMany(fetch = FetchType.LAZY, mappedBy = "filmes")
	private List<ProductionCountries> productionsCountries;
	
	@ManyToMany(fetch = FetchType.LAZY, mappedBy = "filmes")
	private List<SpokenLanguages> spokensLanguages;
	
	// private Object belongsToCollection;
	private boolean adult;
	private String backdropPath;
	private int budget;
	private String homepage;
	private String imdbId;
	private String originalLanguage;
	private String originalTitle;
	private String overview;
	private int popularity;
	private String posterPath;
	private String releaseDate;
	private int revenue;
	private int runtime;
	private String status;
	private String tagline;
	private String title;
	private boolean video;
	private int voteAverage;
	private int voteCount;
	
	public Filme() {}

	public Filme(Integer id, boolean adult, String backdropPath, int budget, String homepage, String imdbId, String originalLanguage,
			String originalTitle, String overview, int popularity, String posterPath, String releaseDate, int revenue,
			int runtime, String status, String tagline, String title, boolean video, int voteAverage, int voteCount) {
		super();
		this.id = id;
		this.genres = new ArrayList<>();
		this.productionsCompanies = new ArrayList<>();
		this.productionsCountries = new ArrayList<>();
		this.spokensLanguages = new ArrayList<>();
		this.adult = adult;
		this.backdropPath = backdropPath;
		this.budget = budget;
		this.homepage = homepage;
		this.imdbId = imdbId;
		this.originalLanguage = originalLanguage;
		this.originalTitle = originalTitle;
		this.overview = overview;
		this.popularity = popularity;
		this.posterPath = posterPath;
		this.releaseDate = releaseDate;
		this.revenue = revenue;
		this.runtime = runtime;
		this.status = status;
		this.tagline = tagline;
		this.title = title;
		this.video = video;
		this.voteAverage = voteAverage;
		this.voteCount = voteCount;
	}
	
	public Integer getId() {
		return id;
	}
	
	public void setId(Integer id) {
		this.id = id;
	}
	
	public List<Genre> getGenres() {
		return genres;
	}
	
	public void setGenres(List<Genre> genres) {
		this.genres = genres;
	}

	public List<ProductionCompanies> getProductionsCompanies() {
		return productionsCompanies;
	}

	public void setProductionsCompanies(List<ProductionCompanies> productionsCompanies) {
		this.productionsCompanies = productionsCompanies;
	}

	public List<ProductionCountries> getProductionsCountries() {
		return productionsCountries;
	}

	public void setProductionsCountries(List<ProductionCountries> productionsCountries) {
		this.productionsCountries = productionsCountries;
	}
	
	public List<SpokenLanguages> getSpokensLanguages() {
		return spokensLanguages;
	}

	public void setSpokensLanguages(List<SpokenLanguages> spokensLanguages) {
		this.spokensLanguages = spokensLanguages;
	}
	
	public boolean isAdult() {
		return adult;
	}

	public void setAdult(boolean adult) {
		this.adult = adult;
	}
	
	public String getBackdropPath() {
		return backdropPath;
	}

	public void setBackdropPath(String backdropPath) {
		this.backdropPath = backdropPath;
	}

	public int getBudget() {
		return budget;
	}

	public void setBudget(int budget) {
		this.budget = budget;
	}

	public String getHomepage() {
		return homepage;
	}
	
	public void setHomepage(String homepage) {
		this.homepage = homepage;
	}
	
	public String getImdbId() {
		return imdbId;
	}
	
	public void setImdbId(String imdbId) {
		this.imdbId = imdbId;
	}

	public String getOriginalLanguage() {
		return originalLanguage;
	}
	
	public void setOriginalLanguage(String originalLanguage) {
		this.originalLanguage = originalLanguage;
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

	public int getPopularity() {
		return popularity;
	}

	public void setPopularity(int popularity) {
		this.popularity = popularity;
	}

	public String getPosterPath() {
		return posterPath;
	}

	public void setPosterPath(String posterPath) {
		this.posterPath = posterPath;
	}

	public String getReleaseDate() {
		return releaseDate;
	}

	public void setReleaseDate(String releaseDate) {
		this.releaseDate = releaseDate;
	}

	public int getRevenue() {
		return revenue;
	}

	public void setRevenue(int revenue) {
		this.revenue = revenue;
	}
	
	public int getRuntime() {
		return runtime;
	}

	public void setRuntime(int runtime) {
		this.runtime = runtime;
	}
	
	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getTagline() {
		return tagline;
	}

	public void setTagline(String tagline) {
		this.tagline = tagline;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public boolean isVideo() {
		return video;
	}

	public void setVideo(boolean video) {
		this.video = video;
	}

	public int getVoteAverage() {
		return voteAverage;
	}
	
	public void setVoteAverage(int voteAverage) {
		this.voteAverage = voteAverage;
	}
	
	public int getVoteCount() {
		return voteCount;
	}
	
	public void setVoteCount(int voteCount) {
		this.voteCount = voteCount;
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
