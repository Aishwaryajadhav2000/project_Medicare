package com.medicare.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medicare.dto.AdminDTO;
import com.medicare.entity.AdminEntity;
import com.medicare.repository.AdminRepository;

@Service
public class AdminService {
	
	@Autowired(required=true)
	AdminRepository adminRepo;
	
    public boolean deleteById(Long id) {
		
		if(adminRepo.existsById(id)) {
			adminRepo.deleteById(id);	
		}else {
			System.out.println("Medicine Not found");
		}
				
		return false;
	}


//public String updatemedicine(AdminDTO admindto) {
//	
//	if(adminRepo.existsById(admindto.getId())) {
//		AdminEntity medicine = adminRepo.getById(admindto.getId());
//		
//		medicine.setMedicinname(admindto.getMedicinname());
//		medicine.setBrand(admindto.getBrand());
//		medicine.setDescription(admindto.getDescription());
//		medicine.setPrice(admindto.getPrice());
//		medicine.setQuantity(admindto.getQuantity());
//		
//		adminRepo.save(medicine);
//	}else {
//		System.out.println("medicine not found....");
//	}
//	
//	return null;
//}









}
