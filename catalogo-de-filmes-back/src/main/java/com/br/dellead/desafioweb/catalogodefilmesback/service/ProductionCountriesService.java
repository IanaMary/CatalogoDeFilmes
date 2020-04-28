package com.br.dellead.desafioweb.catalogodefilmesback.service;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.br.dellead.desafioweb.catalogodefilmesback.model.ProductionCountries;
import com.br.dellead.desafioweb.catalogodefilmesback.repository.ProductionCountriesRepository;

@Service
public class ProductionCountriesService {
	
	@Autowired
	private ProductionCountriesRepository productionCountriesRepository;
	
	public Optional<ProductionCountries> buscar(Integer id) {
		return productionCountriesRepository.findById(id);
	}

}
