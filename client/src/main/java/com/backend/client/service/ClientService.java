package com.backend.client.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.client.entity.Client;
import com.backend.client.repo.ClientRepository ;

@Service
public class ClientService {

    @Autowired
    private ClientRepository clientRepository;

    public List<Client> getAllClients() {
        return clientRepository.findAll();
    }

    public Client createClient(Client client) {
        return clientRepository.save(client);
    }

    public Client updateClient(Long id, Client clientDetails) {
        Optional<Client> existingClient = clientRepository.findById(id);
        if (existingClient.isPresent()) {
            Client client = existingClient.get();
            client.setClientId(clientDetails.getClientId());
            client.setClientName(clientDetails.getClientName());
            client.setContactInfo(clientDetails.getContactInfo());
            client.setReceivedDate(clientDetails.getReceivedDate());
            client.setInventoryReceived(clientDetails.getInventoryReceived());
            client.setReportedIssues(clientDetails.getReportedIssues());
            client.setClientNotes(clientDetails.getClientNotes());
            client.setAssignedTechnician(clientDetails.getAssignedTechnician());
            client.setEstimatedAmount(clientDetails.getEstimatedAmount());
            client.setDeadline(clientDetails.getDeadline());
            client.setStatus(clientDetails.getStatus());
            return clientRepository.save(client);
        }
        return null;
    }

    public boolean deleteClient(Long id) {
        if (clientRepository.existsById(id)) {
            clientRepository.deleteById(id);
            return true;
        }
        return false;
    }
}

