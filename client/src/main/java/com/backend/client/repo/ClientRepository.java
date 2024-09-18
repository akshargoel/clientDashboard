package com.backend.client.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.client.entity.Client;

public interface ClientRepository extends JpaRepository<Client, Long> {
}
