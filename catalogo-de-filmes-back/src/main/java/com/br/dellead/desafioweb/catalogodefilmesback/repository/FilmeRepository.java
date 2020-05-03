package com.br.dellead.desafioweb.catalogodefilmesback.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.br.dellead.desafioweb.catalogodefilmesback.model.Filme;

@Repository
public interface FilmeRepository extends JpaRepository<Filme, Long>{
	@Query(value = "select * from filme where title ilike %:titulo%", nativeQuery = true)
	List<Filme> findAllTitle(String titulo);
}


