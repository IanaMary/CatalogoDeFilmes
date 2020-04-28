package com.br.dellead.desafioweb.catalogodefilmesback.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.br.dellead.desafioweb.catalogodefilmesback.model.Genre;

@Repository
public interface GenreRepository extends JpaRepository<Genre, Integer>{}

