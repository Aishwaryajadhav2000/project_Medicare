package com.medicare.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "medicare_user")
public class UserEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "userfirstname")
	private String firstname;
	
	@Column(name = "userlastname")
	private String lastname;
	
	@Column(name = "userusername")
	private String Username;
	
	@Column(name = "usermail")
	private String emailid;
	
	@Column(name = "userpassword")
	private String password;
	
	public UserEntity() {
		super();
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getUsername() {
		return Username;
	}

	public void setUsername(String username) {
		Username = username;
	}

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	

	public UserEntity(long id, String firstname, String lastname, String username, String emailid, String password) {
		super();
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		Username = username;
		this.emailid = emailid;
		this.password = password;
	}

	@Override
	public String toString() {
		return "UserEntity [id=" + id + ", firstname=" + firstname + ", lastname=" + lastname + ", Username=" + Username
				+ ", emailid=" + emailid + ", password=" + password + "]";
	}
	
	
	
	
}
