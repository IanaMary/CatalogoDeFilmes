package com.br.dellead.desafioweb.catalogodefilmesback.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.br.dellead.desafioweb.catalogodefilmesback.model.SpokenLanguages;

@Repository
public interface SpokenLanguagesRepository extends JpaRepository<SpokenLanguages, Integer>{}
