package com.br.dellead.desafioweb.catalogodefilmesback.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.br.dellead.desafioweb.catalogodefilmesback.dto.FilmeDTO;
import com.br.dellead.desafioweb.catalogodefilmesback.dto.FilmeRespostaDTO;
import com.br.dellead.desafioweb.catalogodefilmesback.model.Filme;
import com.br.dellead.desafioweb.catalogodefilmesback.service.FilmeService;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping(value="/filmes")
public class FilmeController {

	@Autowired
	private FilmeService filmeService;
	
	@GetMapping(path = {"/detalhes/{id}"})
	public ResponseEntity<?> buscarPorId(@PathVariable long id) {	
		Optional<Filme> filme = filmeService.buscarPorId(id);
		return ResponseEntity.ok().body(filme);
	}
	

	@PostMapping(path = {"/salvar"})
	public ResponseEntity<?> salvarFilme(@RequestBody Filme filme) {
		Filme _filme = new Filme(filme.getTitle(), filme.getOriginalTitle(),
								filme.getOverview(), filme.getReleaseDate());
		_filme.setGenres(filme.getGenres());
		this.filmeService.salvarFilme(_filme);
	    return new ResponseEntity<>(_filme, HttpStatus.CREATED);
	}
	
	@PutMapping("/editar/{id}")
	public ResponseEntity<?> editarFilme(@PathVariable("id") long id, @RequestBody Filme filme) {
		Optional<Filme> filmeData = this.filmeService.buscarPorId(id);
	    if (filmeData.isPresent()) {
	    	Filme _filme = filmeData.get();
	    	_filme.setTitle(filme.getTitle());
	    	_filme.setOriginalTitle(filme.getOriginalTitle());
	    	_filme.setOverview(filme.getOverview());
	    	_filme.setGenres(filme.getGenres());
	    	//_filme.setReleaseDate(filme.getReleaseDate());
	    	this.filmeService.editarFilme(_filme);
	    	return new ResponseEntity<>(_filme, HttpStatus.OK);

	    } else {
	      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	 }
	
	@GetMapping(path = {"/"})
	public ResponseEntity<?> listar(@RequestParam String titulo) {
		List<Filme> filmes;
		if(titulo != null && titulo != "") {
			 filmes = this.filmeService.buscarPorTitulo(titulo);
		}
		
		else{
			filmes = this.filmeService.listar();
		}
		
		return ResponseEntity.ok().body(filmes);
	}
	
	
	@DeleteMapping("/deletar/{id}")
	public ResponseEntity<?> deleteTutorial(@PathVariable("id") long id) {
		try {
			this.filmeService.deletarFilme(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	    } catch (Exception e) {
	    	return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
	    }
	}
	
}
