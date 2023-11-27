package com.medicare.entity;

import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

@Entity
public class Product {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long medicinId;
	private String medicinname;
	private String description;
	private String brand;
	private Double price;	
	private Double quantity;
	

	@ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinTable(name = "Med_imagess" , 
	joinColumns = {
			@JoinColumn(name = "medcin_id")
	},
	inverseJoinColumns = {
			@JoinColumn(name = "image_id")
	}
			)
	private Set<MedicinImages> medicinImages;
	
	

	public Long getMedicinId() {
		return medicinId;
	}

	public void setMedicinId(Long medicinId) {
		this.medicinId = medicinId;
	}

	public Set<MedicinImages> getMedicinImages() {
		return medicinImages;
	}

	public void setMedicinImages(Set<MedicinImages> medicinImages) {
		this.medicinImages = medicinImages;
	}

	
	public String getMedicinname() {
		return medicinname;
	}

	public void setMedicinname(String medicinname) {
		this.medicinname = medicinname;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public Double getQuantity() {
		return quantity;
	}

	public void setQuantity(Double quantity) {
		this.quantity = quantity;
	}
	

}
