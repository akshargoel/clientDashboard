import React, { useState, useEffect } from 'react';
import axiosInstance from './axiosConfig';
import AddClientForm from './AddClientForm';
import "./ClientDashboard.css"


function ClientDashboard() {
    const [clients, setClients] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [showAddForm, setShowAddForm] = useState(false);

    useEffect(() => {
        axiosInstance.get('/api/clients')
            .then(response => setClients(response.data))
            .catch(error => console.error('Error fetching client data:', error));
    }, []);

    const handleAddClient = (newClient) => {
        setClients(prevClients => [...prevClients, newClient]);
    };

    const handleDelete = (id) => {
        axiosInstance.delete(`/api/clients/${id}`)
            .then(() => setClients(clients.filter(client => client.id !== id)))
            .catch(error => console.error('Error deleting client:', error));
    };

    const filteredClients = clients.filter(client =>
        client.clientId.toLowerCase().includes(searchQuery.toLowerCase()) ||
        client.clientName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container">
            <h2>Client Management Dashboard</h2>
            <button onClick={() => setShowAddForm(!showAddForm)}>
                {showAddForm ? 'Hide Add Client Form' : 'Show Add Client Form'}
            </button>
            {showAddForm && <AddClientForm onAddClient={handleAddClient} />}
            <input
                type="text"
                placeholder="Search by Client Name or ID..."
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Client ID</th>
                        <th>Client Name</th>
                        <th>Contact Info</th>
                        <th>Received Date</th>
                        <th>Inventory Received</th>
                        <th>Reported Issues</th>
                        <th>Client Notes</th>
                        <th>Assigned Technician</th>
                        <th>Estimated Amount</th>
                        <th>Deadline</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredClients.map((client, index) => (
                        <tr key={client.id}>
                            <td>{index + 1}</td>
                            <td>{client.clientId}</td>
                            <td>{client.clientName}</td>
                            <td>{client.contactInfo}</td>
                            <td>{client.receivedDate}</td>
                            <td>{client.inventoryReceived}</td>
                            <td>{client.reportedIssues}</td>
                            <td>{client.clientNotes}</td>
                            <td>{client.assignedTechnician}</td>
                            <td>{client.estimatedAmount}</td>
                            <td>{client.deadline}</td>
                            <td>{client.status}</td>
                            <td>
                                <button className="btn btn-primary">View</button>
                                <button className="btn btn-warning">Edit</button>
                                <button className="btn btn-danger" onClick={() => handleDelete(client.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ClientDashboard;
