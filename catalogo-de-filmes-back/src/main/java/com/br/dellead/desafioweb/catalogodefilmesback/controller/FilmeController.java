package com.br.dellead.desafioweb.catalogodefilmesback.controller;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.br.dellead.desafioweb.catalogodefilmesback.model.Filme;
import com.br.dellead.desafioweb.catalogodefilmesback.service.FilmeService;

@RestController
@RequestMapping(value="/filmes")
public class FilmeController {

	@Autowired
	private FilmeService filmeService;
	
	@RequestMapping(value="/{id}", method=RequestMethod.GET)
	public ResponseEntity<?> find(@PathVariable Integer id) {
		
		Optional<Filme> obj = filmeService.buscar(id);
		return ResponseEntity.ok().body(obj);
		
	}
	
}
