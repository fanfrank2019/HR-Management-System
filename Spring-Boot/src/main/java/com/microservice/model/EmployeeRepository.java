package com.microservice.model;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface EmployeeRepository extends JpaRepository<Employee, Integer>{
	
	@Query("select e from Employee e where e.username = ?1")
	public Optional<Employee> findByUsername(String username);
	
	@Query("select e.password from Employee e where e.username = ?1")
	public String retrievePassword(String username);
}
