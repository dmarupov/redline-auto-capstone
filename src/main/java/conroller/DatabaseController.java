package conroller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import repository.DropDownRepository;

@RestController
@EnableAutoConfiguration
public class DatabaseController {
	
	@Autowired
	DropDownRepository repository;
	
	@RequestMapping("/makedropdownlst")
	public List<Map<String, Object>> makeDropDownList() {
		return repository.getMakeDropDownList();
	}
	
	@RequestMapping("/modeldropdownlst")
	public List<Map<String, Object>> modelDropDownList() {
		return repository.getModelDropDownList();
	}
	
	@RequestMapping("/test")
    public String customerInformation() { 		
        return "Hello World!";
    }
	
	@RequestMapping("/vehicles")
	public List<Map<String, Object>> getAllVehicles() {
		return repository.getAllVehicles();
	}
	
	@RequestMapping("/customer")
	public List<Map<String, Object>> allUsers() {
		return repository.getAllCustomers();
	}
}
