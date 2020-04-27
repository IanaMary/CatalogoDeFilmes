package com.br.dellead.desafioweb.catalogodefilmesback.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.br.dellead.desafioweb.catalogodefilmesback.model.ProductionCountries;

@Repository
public interface ProductionCountriesRepository extends JpaRepository<ProductionCountries, Integer>{

}
