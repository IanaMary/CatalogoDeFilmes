package com.br.dellead.desafioweb.catalogodefilmesback.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.dellead.desafioweb.catalogodefilmesback.model.Filme;
import com.br.dellead.desafioweb.catalogodefilmesback.repository.FilmeRepository;

@Service
public class FilmeService {

	@Autowired
	private FilmeRepository filmeRepository;
	
	public Optional<Filme> buscar(Integer id) {
		return filmeRepository.findById(id);
	}
	
	public List<Filme> listar() {
		return filmeRepository.findAll();
	}
	
}
