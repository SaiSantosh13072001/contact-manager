import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const ContactForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        company: '',
        jobTitle: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);  // Send data to parent component
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            company: '',
            jobTitle: '',
        });
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, margin: 'auto' }}>
            <TextField label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} required />
            <TextField label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} required />
            <TextField label="Email" name="email" value={formData.email} onChange={handleChange} required />
            <TextField label="Phone Number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
            <TextField label="Company" name="company" value={formData.company} onChange={handleChange} />
            <TextField label="Job Title" name="jobTitle" value={formData.jobTitle} onChange={handleChange} />
            <Button variant="contained" type="submit">Add Contact</Button>
        </Box>
    );
};

export default ContactForm;
