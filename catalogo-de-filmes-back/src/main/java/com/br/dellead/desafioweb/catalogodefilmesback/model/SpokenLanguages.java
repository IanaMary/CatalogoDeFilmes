package com.br.dellead.desafioweb.catalogodefilmesback.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class SpokenLanguages implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	private String iso6391;
	private String name;
	
	public SpokenLanguages() {}
	
	public SpokenLanguages(Integer id, String iso6391, String name) {
		super();
		this.id = id;
		this.iso6391 = iso6391;
		this.name = name;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getIso6391() {
		return iso6391;
	}
	
	public void setIso6391(String iso6391) {
		this.iso6391 = iso6391;
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
		SpokenLanguages other = (SpokenLanguages) obj;
		if (id != other.id)
			return false;
		return true;
	}
 
}
