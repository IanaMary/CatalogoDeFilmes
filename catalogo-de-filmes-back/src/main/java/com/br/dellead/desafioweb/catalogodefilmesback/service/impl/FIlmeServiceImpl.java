package com.br.dellead.desafioweb.catalogodefilmesback.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.dellead.desafioweb.catalogodefilmesback.model.Filme;
import com.br.dellead.desafioweb.catalogodefilmesback.repository.FilmeRepository;
import com.br.dellead.desafioweb.catalogodefilmesback.service.FilmeService;

@Service
public class FIlmeServiceImpl implements FilmeService {
	
    @Autowired
	private FilmeRepository filmeRepository;
	
	@Override
	public Optional<Filme> buscarPorId(long id) {
		return filmeRepository.findById(id);
	}
	
	@Override
	public void deletarFilme(long id) {
		filmeRepository.deleteById(id);
	}
	
	@Override
	public void salvarFilme(Filme filme) {
		filmeRepository.save(filme);
	}
	
	@Override
	public void editarFilme(Filme filme) {
		filmeRepository.save(filme);
	}
	
	@Override
	public List<Filme> listar() {
		return filmeRepository.findAll();
	}
	
	@Override
	public List<Filme> buscarPorTitulo(String titulo) {
		return filmeRepository.findAllTitle(titulo);
	}
}
