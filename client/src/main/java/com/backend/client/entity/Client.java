package com.backend.client.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String clientId;
    private String clientName;
    private String contactInfo;
    private String receivedDate;
    private String inventoryReceived;
    private String reportedIssues;
    private String clientNotes;
    private String assignedTechnician;
    private Double estimatedAmount;
    private String deadline;
    private String status;
    
    
	public Client(Long id, String clientId, String clientName, String contactInfo, String receivedDate,
			String inventoryReceived, String reportedIssues, String clientNotes, String assignedTechnician,
			Double estimatedAmount, String deadline, String status) {
		super();
		this.id = id;
		this.clientId = clientId;
		this.clientName = clientName;
		this.contactInfo = contactInfo;
		this.receivedDate = receivedDate;
		this.inventoryReceived = inventoryReceived;
		this.reportedIssues = reportedIssues;
		this.clientNotes = clientNotes;
		this.assignedTechnician = assignedTechnician;
		this.estimatedAmount = estimatedAmount;
		this.deadline = deadline;
		this.status = status;
	}
	
	public Client() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getClientId() {
		return clientId;
	}
	public void setClientId(String clientId) {
		this.clientId = clientId;
	}
	public String getClientName() {
		return clientName;
	}
	public void setClientName(String clientName) {
		this.clientName = clientName;
	}
	public String getContactInfo() {
		return contactInfo;
	}
	public void setContactInfo(String contactInfo) {
		this.contactInfo = contactInfo;
	}
	public String getReceivedDate() {
		return receivedDate;
	}
	public void setReceivedDate(String receivedDate) {
		this.receivedDate = receivedDate;
	}
	public String getInventoryReceived() {
		return inventoryReceived;
	}
	public void setInventoryReceived(String inventoryReceived) {
		this.inventoryReceived = inventoryReceived;
	}
	public String getReportedIssues() {
		return reportedIssues;
	}
	public void setReportedIssues(String reportedIssues) {
		this.reportedIssues = reportedIssues;
	}
	public String getClientNotes() {
		return clientNotes;
	}
	public void setClientNotes(String clientNotes) {
		this.clientNotes = clientNotes;
	}
	public String getAssignedTechnician() {
		return assignedTechnician;
	}
	public void setAssignedTechnician(String assignedTechnician) {
		this.assignedTechnician = assignedTechnician;
	}
	public Double getEstimatedAmount() {
		return estimatedAmount;
	}
	public void setEstimatedAmount(Double estimatedAmount) {
		this.estimatedAmount = estimatedAmount;
	}
	public String getDeadline() {
		return deadline;
	}
	public void setDeadline(String deadline) {
		this.deadline = deadline;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Client [id=" + id + ", clientId=" + clientId + ", clientName=" + clientName + ", contactInfo="
				+ contactInfo + ", receivedDate=" + receivedDate + ", inventoryReceived=" + inventoryReceived
				+ ", reportedIssues=" + reportedIssues + ", clientNotes=" + clientNotes + ", assignedTechnician="
				+ assignedTechnician + ", estimatedAmount=" + estimatedAmount + ", deadline=" + deadline + ", status="
				+ status + "]";
	}
    
    
    
}
