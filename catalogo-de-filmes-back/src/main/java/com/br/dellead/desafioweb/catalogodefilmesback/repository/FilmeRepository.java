package com.br.dellead.desafioweb.catalogodefilmesback.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.br.dellead.desafioweb.catalogodefilmesback.model.Filme;

@Repository
public interface FilmeRepository extends JpaRepository<Filme, Integer>{}

