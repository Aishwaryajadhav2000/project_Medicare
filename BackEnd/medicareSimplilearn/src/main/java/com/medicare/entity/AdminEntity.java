package com.medicare.entity;

import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import jakarta.persistence.JoinColumn;

@Entity
@Table(name = "medicare_medicines")
public class AdminEntity {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	@Column(name = "medname")
	private String medicinname;
	
	@Column(name = "meddescription")
	private String description;
	
	@Column(name = "medbrand")
	private String brand;
	
	@Column(name = "medprice")
	private int price;
	
	@Column(name = "medquantity")
	private int quantity;
	
	public AdminEntity() {
		super();
	}
	
	
	@ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinTable(name = "Med_images" , 
	joinColumns = {
			@JoinColumn(name = "Medcin_id")
	},
	inverseJoinColumns = {
			@JoinColumn(name = "image_id")
	}
			)
	private Set<MedicinImages> medicinImages;
	
	

	public Set<MedicinImages> getMedicinImages() {
		return medicinImages;
	}

	public void setMedicinImages(Set<MedicinImages> medicinImages) {
		this.medicinImages = medicinImages;
	}

	public AdminEntity(Long id, String medicinname, String description, String brand, int price, int quantity) {
		super();
		this.id = id;
		this.medicinname = medicinname;
		this.description = description;
		this.brand = brand;
		this.price = price;
		this.quantity = quantity;
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

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	@Override
	public String toString() {
		return "AdminEntity [id=" + id + ", medicinname=" + medicinname + ", description=" + description + ", brand="
				+ brand + ", price=" + price + ", quantity=" + quantity + "]";
	}
	
	
	

}
