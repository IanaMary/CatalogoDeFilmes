package com.br.dellead.desafioweb.catalogodefilmesback.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ProductionCountries implements Serializable {
    
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	private String iso31661;
    private String name;
    
    public ProductionCountries() {}
    
	public ProductionCountries(Integer id, String iso31661, String name) {
		super();
		this.id = id;
		this.iso31661 = iso31661;
		this.name = name;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getIso31661() {
		return iso31661;
	}
	
	public void setIso31661(String iso31661) {
		this.iso31661 = iso31661;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
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
		ProductionCountries other = (ProductionCountries) obj;
		if (id != other.id)
			return false;
		return true;
	}
	
	
    
}
