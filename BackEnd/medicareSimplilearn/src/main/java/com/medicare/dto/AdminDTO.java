package com.medicare.dto;

public class AdminDTO {
	
	private Long medicinId;
	public Long getMedicinId() {
		return medicinId;
	}

	public void setMedicinId(Long medicinId) {
		this.medicinId = medicinId;
	}
	private String medicinname;
	private String description;
	private String brand;
	private int price;
	private int quantity;
	
	public AdminDTO(){
		super();
	}
	
	public AdminDTO(String medicinname, String description, String brand, int price, int quantity) {
		super();
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
		return "AdminDTO [medicinId=" + medicinId + ", medicinname=" + medicinname + ", description=" + description
				+ ", brand=" + brand + ", price=" + price + ", quantity=" + quantity + "]";
	}
	
	

}
