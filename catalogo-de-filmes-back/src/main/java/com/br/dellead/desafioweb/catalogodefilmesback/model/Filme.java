package com.br.dellead.desafioweb.catalogodefilmesback.model;

import java.io.Serializable;
import java.util.ArrayList;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Filme implements Serializable{
	
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	
	private boolean adult;
	private String backdropPath;
	// private Object belongsToCollection;
	private int budget;
	private ArrayList<Genre> genres;
	private String homepage;
	private String imdbId;
	private String originalLanguage;
	private String originalTitle;
	private String overview;
	private int popularity;
	private String posterPath;
	private ArrayList<ProductionCompanies> productionCompanies;
	private ArrayList<ProductionCountries> productionCountries;
	private String releaseDate;
	private int revenue;
	private int runtime;
	private ArrayList<SpokenLanguages> spokenLanguages;
	private String status;
	private String tagline;
	private String title;
	private boolean video;
	private int voteAverage;
	private int voteCount;
	
	public Filme() {}
	
	public Filme(long id, boolean adult, String backdropPath, int budget, ArrayList<Genre> genres, String homepage,
			String imdbId, String originalLanguage, String originalTitle, String overview, int popularity,
			String posterPath, ArrayList<ProductionCompanies> productionCompanies,
			ArrayList<ProductionCountries> productionCountries, String releaseDate, int revenue, int runtime,
			ArrayList<SpokenLanguages> spokenLanguages, String status, String tagline, String title, boolean video,
			int voteAverage, int voteCount) {
		super();
		this.id = id;
		this.adult = adult;
		this.backdropPath = backdropPath;
		this.budget = budget;
		this.genres = genres;
		this.homepage = homepage;
		this.imdbId = imdbId;
		this.originalLanguage = originalLanguage;
		this.originalTitle = originalTitle;
		this.overview = overview;
		this.popularity = popularity;
		this.posterPath = posterPath;
		this.productionCompanies = productionCompanies;
		this.productionCountries = productionCountries;
		this.releaseDate = releaseDate;
		this.revenue = revenue;
		this.runtime = runtime;
		this.spokenLanguages = spokenLanguages;
		this.status = status;
		this.tagline = tagline;
		this.title = title;
		this.video = video;
		this.voteAverage = voteAverage;
		this.voteCount = voteCount;
	}

	public long getId() {
		return id;
	}
	
	public void setId(long id) {
		this.id = id;
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
	
	/*public Object getBelongsToCollection() {
		return belongsToCollection;
	}
	
	public void setBelongsToCollection(Object belongsToCollection) {
		this.belongsToCollection = belongsToCollection;
	}*/
	
	public int getBudget() {
		return budget;
	}
	
	public void setBudget(int budget) {
		this.budget = budget;
	}
	
	public ArrayList<Genre> getGenres() {
		return genres;
	}
	
	public void setGenres(ArrayList<Genre> genres) {
		this.genres = genres;
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
	
	public ArrayList<ProductionCompanies> getProductionCompanies() {
		return productionCompanies;
	}
	
	public void setProductionCompanies(ArrayList<ProductionCompanies> productionCompanies) {
		this.productionCompanies = productionCompanies;
	}
	
	public ArrayList<ProductionCountries> getProductionCountries() {
		return productionCountries;
	}
	
	public void setProductionCountries(ArrayList<ProductionCountries> productionCountries) {
		this.productionCountries = productionCountries;
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
	
	public ArrayList<SpokenLanguages> getSpokenLanguages() {
		return spokenLanguages;
	}
	
	public void setSpokenLanguages(ArrayList<SpokenLanguages> spokenLanguages) {
		this.spokenLanguages = spokenLanguages;
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
