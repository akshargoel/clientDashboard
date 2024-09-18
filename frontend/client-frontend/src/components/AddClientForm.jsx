import React, { useState } from 'react';
import axiosInstance from './axiosConfig';
import './AddClientForm.css';

function AddClientForm({ onAddClient }) {
    const [client, setClient] = useState({
        clientId: '',
        clientName: '',
        contactInfo: '',
        receivedDate: '',
        inventoryReceived: '',
        reportedIssues: '',
        clientNotes: '',
        assignedTechnician: '',
        estimatedAmount: '',
        deadline: '',
        status: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setClient(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosInstance.post('/api/clients', client)
            .then(response => {
                onAddClient(response.data);  // Notify parent component about the new client
                setClient({
                    clientId: '',
                    clientName: '',
                    contactInfo: '',
                    receivedDate: '',
                    inventoryReceived: '',
                    reportedIssues: '',
                    clientNotes: '',
                    assignedTechnician: '',
                    estimatedAmount: '',
                    deadline: '',
                    status: ''
                });  // Clear form fields
            })
            .catch(error => console.error('Error adding client:', error));
    };

    return (
        <div className="add-client-form">
            <h2>Add New Client</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Client ID:
                    <input
                        type="text"
                        name="clientId"
                        value={client.clientId}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Client Name:
                    <input
                        type="text"
                        name="clientName"
                        value={client.clientName}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Contact Info:
                    <input
                        type="text"
                        name="contactInfo"
                        value={client.contactInfo}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Received Date:
                    <input
                        type="date"
                        name="receivedDate"
                        value={client.receivedDate}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Inventory Received:
                    <input
                        type="text"
                        name="inventoryReceived"
                        value={client.inventoryReceived}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Reported Issues:
                    <input
                        type="text"
                        name="reportedIssues"
                        value={client.reportedIssues}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Client Notes:
                    <textarea
                        name="clientNotes"
                        value={client.clientNotes}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Assigned Technician:
                    <input
                        type="text"
                        name="assignedTechnician"
                        value={client.assignedTechnician}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Estimated Amount:
                    <input
                        type="number"
                        name="estimatedAmount"
                        value={client.estimatedAmount}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Deadline:
                    <input
                        type="date"
                        name="deadline"
                        value={client.deadline}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Status:
                    <input
                        type="text"
                        name="status"
                        value={client.status}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Add Client</button>
            </form>
        </div>
    );
}

export default AddClientForm;
