package conroller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import repository.CustomerRepository;

@RestController
@EnableAutoConfiguration
public class DatabaseController {
	
	@Autowired
	CustomerRepository repository;
	
	@RequestMapping("/test")
    public String customerInformation() { 		
        return "Hello World!";
    }
	
	@RequestMapping("/customer")
	public List<Map<String, Object>> allUsers() {
		return repository.getAllCustomers();
	}
	
	@RequestMapping("/makedropdownlst")
	public List<Map<String, Object>> makeDropDownList() {
		return repository.getMakeDropDownList();
	}
}
