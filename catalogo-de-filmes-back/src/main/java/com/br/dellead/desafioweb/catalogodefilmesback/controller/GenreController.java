package com.br.dellead.desafioweb.catalogodefilmesback.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.br.dellead.desafioweb.catalogodefilmesback.model.Genre;
import com.br.dellead.desafioweb.catalogodefilmesback.service.GenreService;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping(value="/genres")
public class GenreController {

	@Autowired
	private GenreService genreService;
	
	@RequestMapping(value="/{id}", method=RequestMethod.GET)
	public ResponseEntity<?> find(@PathVariable long id) {
		
		Optional<Genre> obj = genreService.buscarPorId(id);
		return ResponseEntity.ok().body(obj);
		
	}
	
	@GetMapping(path = {"/"})
	public ResponseEntity<?> listar() {
		List<Genre> genres = genreService.listar();		
		return ResponseEntity.ok().body(genres);
	}
}
