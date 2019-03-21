package repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepository {

	@Autowired
	JdbcTemplate jdbcTemplate;
	
	public List<Map<String, Object>> getAllCustomers() {

		return jdbcTemplate.queryForList("Select * from Login");
	}
}
