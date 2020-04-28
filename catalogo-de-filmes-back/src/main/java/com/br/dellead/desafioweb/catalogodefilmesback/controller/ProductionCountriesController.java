package com.br.dellead.desafioweb.catalogodefilmesback.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.br.dellead.desafioweb.catalogodefilmesback.model.ProductionCountries;
import com.br.dellead.desafioweb.catalogodefilmesback.service.ProductionCountriesService;

@RestController
@RequestMapping(value="/countries")
public class ProductionCountriesController {
	
	@Autowired
	private ProductionCountriesService productionCountriesService;
	
	@RequestMapping(value="/{id}", method=RequestMethod.GET)
	public ResponseEntity<?> find(@PathVariable Integer id) {
		
		Optional<ProductionCountries> obj = productionCountriesService.buscar(id);
		return ResponseEntity.ok().body(obj);
		
	}
}
