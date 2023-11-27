package com.medicare.controller;

import java.io.IOException;
import org.springframework.web.bind.annotation.RestController;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import com.medicare.dto.AdminDTO;
import com.medicare.entity.AdminEntity;
import com.medicare.entity.MedicinImages;
import com.medicare.entity.Product;
import com.medicare.entity.UserEntity;
import com.medicare.repository.AdminRepository;
import com.medicare.repository.ProductDao;
import com.medicare.repository.UserRepository;
import com.medicare.service.AdminService;
import com.medicare.service.ProductService;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/simplilearn/medicare/")
public class RestControllers {
	
	@Autowired(required=true)
	UserRepository userepo;
	
	@Autowired(required=true)
	AdminRepository adminrepo;
	
	@Autowired(required=true)
	AdminService adminservice;
	
	AdminDTO admindto;
	@Autowired(required=true)
	private ProductService productserv;	
	
	
	@Autowired(required=true)
	private ProductDao productdao;
	
	
	              //get All Users
	@GetMapping("/users")
	public List<UserEntity> getallusers() {
		return userepo.findAll();
	}
	
	                 //Get User by Emailid for Login
	@GetMapping("/login/{emailid}")
	public ResponseEntity<UserEntity> getuserusername(@PathVariable String emailid) {
		
		UserEntity user = userepo.findByEmailid(emailid);		
		return ResponseEntity.ok(user);
	}
	
	               //User Registration
	@PostMapping("/register")
	public UserEntity registration(@RequestBody UserEntity userentity) {
		return userepo.save(userentity);
	}
	
	
	                      //Admin
	
	
	
	//get all medicines
	@GetMapping("/allmedicines")
	public List<AdminEntity> getallmedicines(){
		return adminrepo.findAll();
	}
	
	//get medicines by id
	@GetMapping("/getmedicine/{id}")
	public Optional<AdminEntity> medicinbyid(@PathVariable  Long id){
		return adminrepo.findById(id);
	}
	
	//delete By id
	@PostMapping("/deletemedicin/{id}")
	public String deletemed(@PathVariable (value = "id") Long id) {
		
		boolean deletemed =	adminservice.deleteById(id);
		return " Medicine deleted";
	}
	
	//update Medicines
	@PostMapping("/updatemedicin/{id}")
	public ResponseEntity<AdminEntity> updatemedicin(@PathVariable Long id, @RequestBody AdminEntity adminentity) {
		
		AdminEntity medicine = adminrepo.findById(id).orElseThrow();
		
		medicine.setMedicinname(admindto.getMedicinname());
		medicine.setBrand(admindto.getBrand());
		medicine.setDescription(admindto.getDescription());
		medicine.setPrice(admindto.getPrice());
		medicine.setQuantity(admindto.getQuantity());
		
		AdminEntity updatemedicin = adminrepo.save(medicine);
		
		
		return ResponseEntity.ok(updatemedicin);
	}
	
	//Add Medicines
		@PostMapping("/addmedicines")
		public AdminEntity addmedicin(@PathVariable AdminEntity adminentity) {
			return adminrepo.save(adminentity);
		}
		
		//Product Image
		@PostMapping(value= {"/addproductsimg"}, consumes= {MediaType.MULTIPART_FORM_DATA_VALUE })
		public Product addnewmed(@RequestPart ("product") Product product,
				@RequestPart("imageFile")MultipartFile[] file) {
			
			try {
				Set<MedicinImages> images = uploadImages(file);
				
				product.setMedicinImages(images);
				return productserv.addnewProduct(product);
			}catch (Exception e){
				System.out.println(e.getMessage());
				return null;
			}	
		}
			
		
		private Set<MedicinImages> uploadImages(MultipartFile[] multipartfile)throws IOException {
			
			Set<MedicinImages> medicinimage = new HashSet<>();
			

			for(MultipartFile file: multipartfile) {
				MedicinImages imagemodel = new MedicinImages(
						 file.getOriginalFilename(),
						file.getContentType(),
						file.getBytes()
						);
				medicinimage.add(imagemodel);
			}
			
			return medicinimage;
		}
		
		//get products
		@GetMapping("/getallmedicines")
		public List<Product> getAllMedicine(){
//			return productserv.getallproducts();
			
			return (List<Product>) productdao.findAll();
			
		}
		
		
		//get medicin by id 
		
		@GetMapping("/medicines/{id}")
		public Optional<Product>getmedicinById(@PathVariable Long id){
			return productdao.findById(id);
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	//Add Medicine with Image
	@PostMapping(value= {"/addmediciness"}, consumes= {MediaType.MULTIPART_FORM_DATA_VALUE })
	public AdminEntity addmedicines(@RequestPart("product") AdminEntity adminentity,
			              @RequestPart("imageFile")MultipartFile[] file) 
	{
		
		try {
			Set<MedicinImages> images = uploadImage(file);
			
			adminentity.setMedicinImages(images);
			return adminrepo.save(adminentity);
		}catch (Exception e){
			System.out.println(e.getMessage());
			return null;
		}
		
	}

	private Set<MedicinImages> uploadImage(MultipartFile[] multipartfile)throws IOException {
		
		Set<MedicinImages> medicinimage = new HashSet<>();
		

		for(MultipartFile file: multipartfile) {
			MedicinImages imagemodel = new MedicinImages(
					 file.getOriginalFilename(),
					file.getContentType(),
					file.getBytes()
					);
			medicinimage.add(imagemodel);
		}
		
		return medicinimage;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
