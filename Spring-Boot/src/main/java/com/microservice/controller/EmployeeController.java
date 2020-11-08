package com.microservice.controller;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.google.gson.Gson;
import com.microservice.exception.EmployeeNotFoundException;
import com.microservice.model.Employee;
import com.microservice.model.EmployeeRepository;
@CrossOrigin(origins="http://localhost:4200")

@RestController
public class EmployeeController {
	
	@Autowired
	private EmployeeRepository er;
	
	@GetMapping(value="/employees")
	public List<Employee> getEmployees() {
		return er.findAll();
	}
	
	@GetMapping(value="/employees/{id}")
	public Employee retrieveEmployee(@PathVariable int id) {
		Optional<Employee> emp = er.findById(id);
		if(!emp.isPresent()) {
			throw new EmployeeNotFoundException("Employee " + id + " cannot be found");
		}
		return emp.get();
	}
	
	@DeleteMapping(value="/employees/{id}")
	public void deleteEmployee(@PathVariable int id) {
		Optional<Employee> emp = er.findById(id);
		if(!emp.isPresent()) {
			throw new EmployeeNotFoundException("Employee " + id + " cannot be found");
		}
		er.deleteById(id);
	}
	
	@PostMapping(value="/employees")
	public ResponseEntity<Object> addEmployee(@RequestBody Employee emp) {
		Employee saveEmp = er.save(emp);
		URI location = ServletUriComponentsBuilder.fromCurrentContextPath().path("/{id}").buildAndExpand(saveEmp.getId()).toUri();
		return ResponseEntity.created(location).build();
	}
	
	@PutMapping(value="/employees/{id}")
	public ResponseEntity<Object> updateEmployee(@RequestBody Employee emp, @PathVariable int id) {
		Optional<Employee> empl = er.findById(id);
		if(!empl.isPresent()) {
			throw new EmployeeNotFoundException("Employee " + id + " cannot be found");
		}
		emp.setId(id);
		er.save(emp);
		return ResponseEntity.noContent().build();
	}
	
	@GetMapping(value="/login/{username}")
	public Employee retrieveEmployeeByUsername(@PathVariable("username") String username) {
		Optional<Employee> emp = er.findByUsername(username);
		if(!emp.isPresent()) {
			throw new EmployeeNotFoundException("Employee " + username + " cannot be found");
		}
		return emp.get();
	}
	
	/*@GetMapping(value="login/{username}")
	public String retrievePassword(@PathVariable("username") String username) {
		/*Gson gson = new Gson();
		String convert = "{"+"\"username:\\"+er.retrievePassword(username)+"}";
		String json = gson.toJson(convert);
		return er.retrievePassword(username);
	}*/
}
