package com.br.dellead.desafioweb.catalogodefilmesback.service;

import java.util.List;
import java.util.Optional;

import com.br.dellead.desafioweb.catalogodefilmesback.model.Filme;


public interface FilmeService {
	
	Optional<Filme> buscarPorId(long id);
	
	void deletarFilme(long id);
	
	Filme salvarFilme(Filme filme);
	
	void editarFilme(Filme filme);
	
	List<Filme> listar();
	 
	List<Filme> buscarPorTitulo(String titulo);
	
}
