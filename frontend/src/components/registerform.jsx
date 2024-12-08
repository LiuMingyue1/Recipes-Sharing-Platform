import React, { useState } from 'react';
import axios from 'axios';
import '../style/registerForm.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phonenumber: '',
    country: 'US',
    state: '',
    city: '',
    address: '',
    postalcode: '',
    password: '',
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    try {
      const response = await axios.post('/api/users', {
        name: formData.name,
        email: formData.email,
        phone: formData.phonenumber,
        password: formData.password,
        address: `${formData.address}, ${formData.city}, ${formData.state}, ${formData.country}`,
        postalCode: formData.postalcode,
      });

      setSubmittedData(response.data);
      setFormData({
        name: '',
        email: '',
        phonenumber: '',
        country: 'US',
        state: '',
        city: '',
        address: '',
        postalcode: '',
        password: '',
      });
    } catch (err) {
      console.error(err);
      setError('Failed to register. Please try again later.');
    }
  };

  return (
    <div>
      <form id="reservation-form" onSubmit={handleSubmit}>
        <h1>Register Form</h1>

        {/* Name */}
        <div className="form-row full-width">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div className="form-row full-width">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Password */}
        <div className="form-row full-width">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        {/* Phone */}
        <div className="form-row full-width phone-row">
          <label htmlFor="phonenumber">Phone</label>
          <div style={{ display: 'flex', gap: '8px' }}>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              style={{ flex: '0 0 100px' }} 
            >
              <option value="US">+1 (US)</option>
              <option value="IN">+91 (IN)</option>
              <option value="CA">+1 (CA)</option>
              <option value="EU">+44 (EU)</option>
            </select>
            <input
              type="tel"
              id="phonenumber"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
              style={{ flex: '1' }} 
            />
          </div>
        </div>

        {/* State */}
        <div className="form-row full-width">
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
        </div>

        {/* City */}
        <div className="form-row full-width">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>

        {/* Address */}
        <div className="form-row full-width">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        {/* ZIP / Postal Code */}
        <div className="form-row full-width">
          <label htmlFor="postalcode">ZIP / Postal Code</label>
          <input
            type="text"
            id="postalcode"
            name="postalcode"
            value={formData.postalcode}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit">Register</button>
        </div>
      </form>

      {error && <div className="error-message">{error}</div>}

      {submittedData && (
        <div className="submitted-data">
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email Address:</strong> {submittedData.email}</p>
          <p><strong>Phone Number:</strong> {submittedData.phone}</p>
          <p><strong>Country:</strong> {submittedData.country}</p>
          <p><strong>Address:</strong> {submittedData.address}</p>
          <p><strong>ZIP / Postal Code:</strong> {submittedData.postalCode}</p>
        </div>
      )}
    </div>
  );
};

export default RegisterForm;
