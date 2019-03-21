package repository;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "Login", uniqueConstraints=
@UniqueConstraint(columnNames = {"user", "password", "entries"}))
public class Login {
	
	@Id
	@GeneratedValue
	//@Column(name="user")
	private String user;
	//@Column(name="password")
	private String password;
	//@Column(name="entries")
	private Integer entries;
	
	public Login(String USER, String PASSWORD, Integer ENTRIES) {
		user = USER;
		password = PASSWORD;
		entries = ENTRIES;
	}
	
	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getEntries() {
		return entries;
	}

	public void setEntries(int entries) {
		this.entries = entries;
	}
}
