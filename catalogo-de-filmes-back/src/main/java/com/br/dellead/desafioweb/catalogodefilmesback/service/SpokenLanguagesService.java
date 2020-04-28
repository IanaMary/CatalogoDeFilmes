package com.br.dellead.desafioweb.catalogodefilmesback.service;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.br.dellead.desafioweb.catalogodefilmesback.model.SpokenLanguages;
import com.br.dellead.desafioweb.catalogodefilmesback.repository.SpokenLanguagesRepository;

@Service
public class SpokenLanguagesService {
	
	@Autowired
	private SpokenLanguagesRepository spokenLanguagesRepository;
	
	public Optional<SpokenLanguages> buscar(Integer id) {
		return spokenLanguagesRepository.findById(id);
	}

}
