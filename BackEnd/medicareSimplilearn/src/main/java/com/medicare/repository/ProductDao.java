package com.medicare.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.medicare.entity.Product;

@Repository
public interface ProductDao extends CrudRepository<Product, Long>{

}
