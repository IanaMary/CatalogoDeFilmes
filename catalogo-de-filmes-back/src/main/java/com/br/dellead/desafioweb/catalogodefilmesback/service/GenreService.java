package com.br.dellead.desafioweb.catalogodefilmesback.service;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.br.dellead.desafioweb.catalogodefilmesback.model.Genre;
import com.br.dellead.desafioweb.catalogodefilmesback.repository.GenreRepository;

@Service
public class GenreService {
	
	@Autowired
	private GenreRepository genreRepository;
	
	public Optional<Genre> buscar(Integer id) {
		return genreRepository.findById(id);
	}

}
