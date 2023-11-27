package com.medicare.dto;

public class UserDTO {
	
	private long id;
	private String name;
	private String lastname;
	private String Username;
	private String emailid;
	private String password;
	
	public  UserDTO() {
		super();
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
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
	public UserDTO(long id, String name, String lastname, String username, String emailid, String password) {
		super();
		this.id = id;
		this.name = name;
		this.lastname = lastname;
		Username = username;
		this.emailid = emailid;
		this.password = password;
	}
	@Override
	public String toString() {
		return "UserDTO [id=" + id + ", name=" + name + ", lastname=" + lastname + ", Username=" + Username
				+ ", emailid=" + emailid + ", password=" + password + "]";
	}
	
	

}
