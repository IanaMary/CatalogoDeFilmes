package com.br.dellead.desafioweb.catalogodefilmesback.service;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.br.dellead.desafioweb.catalogodefilmesback.model.ProductionCompanies;
import com.br.dellead.desafioweb.catalogodefilmesback.repository.ProductionCompaniesRepository;

@Service
public class ProductionCompaniesService {
	
	@Autowired
	private ProductionCompaniesRepository productionCompaniesRepository;
	
	public Optional<ProductionCompanies> buscar(Integer id) {
		return productionCompaniesRepository.findById(id);
	}


}
