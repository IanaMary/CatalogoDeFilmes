package com.br.dellead.desafioweb.catalogodefilmesback.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ProductionCompanies implements Serializable {
	
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	private String logoPath;
	private String name; 
	private String  originCountry;
	
	public ProductionCompanies() {}
	 
	public ProductionCompanies(Integer id, String logoPath, String name, String originCountry) {
		super();
		this.id = id;
		this.logoPath = logoPath;
		this.name = name;
		this.originCountry = originCountry;
	}

	public Integer getId() {
		return id;
	}
	
	public void setId(Integer id) {
		this.id = id;
	}
	
	public String getLogoPath() {
		return logoPath;
	}
	
	public void setLogoPath(String logoPath) {
		this.logoPath = logoPath;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getOriginCountry() {
		return originCountry;
	}
	
	public void setOriginCountry(String originCountry) {
		this.originCountry = originCountry;
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
		ProductionCompanies other = (ProductionCompanies) obj;
		if (id != other.id)
			return false;
		return true;
	}
	
	
	
	
	 
}
