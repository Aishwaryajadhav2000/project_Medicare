package com.medicare.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medicare.entity.Product;
import com.medicare.repository.ProductDao;

@Service
public class ProductService {

	
	@Autowired
	private ProductDao productdao;
	
	public Product addnewProduct(Product product) {
	return productdao.save(product);
		
	}
	
}
