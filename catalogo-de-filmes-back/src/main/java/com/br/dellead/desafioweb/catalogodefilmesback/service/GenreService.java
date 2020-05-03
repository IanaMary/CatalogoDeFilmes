package com.br.dellead.desafioweb.catalogodefilmesback.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.dellead.desafioweb.catalogodefilmesback.model.Filme;
import com.br.dellead.desafioweb.catalogodefilmesback.model.Genre;
import com.br.dellead.desafioweb.catalogodefilmesback.repository.GenreRepository;

public interface GenreService {
	
	Optional<Genre> buscarPorId(long id);
	
	List<Genre> listar();

}
