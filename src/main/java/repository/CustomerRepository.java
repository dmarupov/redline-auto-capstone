package repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class CustomerRepository {

	@Autowired
	JdbcTemplate jdbcTemplate;
	
	public List<Map<String, Object>> getAllCustomers() {
		//return jdbcTemplate.queryForList("Select * from CUSTOMER");
		return jdbcTemplate.queryForList("SELECT * FROM myTable");
		
	}

	public List<Map<String, Object>> getMakeDropDownList() {
		return jdbcTemplate.queryForList("select * from RLA_DPDN_TYPE where DPDN_TYPE = 'Make'");
	}
}
