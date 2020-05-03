package com.br.dellead.desafioweb.catalogodefilmesback.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.dellead.desafioweb.catalogodefilmesback.model.Genre;
import com.br.dellead.desafioweb.catalogodefilmesback.repository.GenreRepository;
import com.br.dellead.desafioweb.catalogodefilmesback.service.GenreService;

@Service
public class GenreServiceImpl implements GenreService {
	
	@Autowired
	private GenreRepository genreRepository;
		
	@Override
	public Optional<Genre> buscarPorId(long id) {
		return genreRepository.findById(id);
	}
	
	@Override
	public List<Genre> listar() {
		return genreRepository.findAll();
	}

}
