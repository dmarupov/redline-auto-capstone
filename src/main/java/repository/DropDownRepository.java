package repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class DropDownRepository {

	@Autowired
	JdbcTemplate jdbcTemplate;
	
	public List<Map<String, Object>> getAllCustomers() {
		//return jdbcTemplate.queryForList("Select * from CUSTOMER");
		return jdbcTemplate.queryForList("SELECT * FROM myTable");
		
	}
	
	public List<Map<String, Object>> getAllVehicles() {
		return jdbcTemplate.queryForList("SELECT * FROM RLA_VHCL");
		
	}

	public List<Map<String, Object>> getMakeDropDownList() {
		return jdbcTemplate.queryForList("select * from RLA_DPDN_TYPE where DPDN_TYPE = 'Make' order by DPDN_DESC");
	}
	
	public List<Map<String, Object>> getModelDropDownList() {
		return jdbcTemplate.queryForList("select * from RLA_DPDN_TYPE where DPDN_TYPE = 'Model' order by DPDN_DESC");
	}
}
