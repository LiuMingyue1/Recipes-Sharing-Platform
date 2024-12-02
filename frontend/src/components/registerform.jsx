import React, { useState } from 'react';
import axios from 'axios'; // 引入axios用于发送HTTP请求

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
    password: '', // 新增密码字段
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState(null); // 存储错误信息

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null); // 提交时清除之前的错误
    try {
      const response = await axios.post('/api/users', {
        name: formData.name,
        email: formData.email,
        phone: formData.phonenumber,
        password: formData.password,
        address: `${formData.address}, ${formData.city}, ${formData.state}, ${formData.country}`,
        postalCode: formData.postalcode,
      });

      // 设置返回的数据
      setSubmittedData(response.data);
      // 清空表单
      setFormData({
        name: '',
        email: '',
        phonenumber: '',
        country: 'US',
        state: '',
        city: '',
        address: '',
        postalcode: '',
        password: '', // 清空密码
      });
    } catch (err) {
      console.error(err);
      setError('Failed to register. Please try again later.');
    }
  };

  return (
    <div className="mx-auto max-w-2xl">
      <div className="min-h-screen flex items-center justify-center">
        <form id="reservation-form" className="space-y-4 p-8" onSubmit={handleSubmit}>
          <h1 className="text-2xl font-semibold mb-4">Reservation Form</h1>

          <div>
            <label htmlFor="name" className="block font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border p-3 rounded-lg"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-96 border p-3 rounded-lg"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="phonenumber" className="block font-medium">Phone number</label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">Country</label>
                <select
                  id="country"
                  name="country"
                  className="h-full rounded-md border bg-transparent py-3 pl-6 pr-1 text-gray-400"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option value="US">+1 (US)</option>
                  <option value="IN">+91 (IN)</option>
                  <option value="CA">+1 (CA)</option>
                  <option value="EU">+44 (EU)</option>
                </select>
              </div>
              <input
                type="tel"
                name="phonenumber"
                id="phonenumber"
                className="w-96 border p-3 pl-32 rounded-lg"
                value={formData.phonenumber}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block font-medium">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-96 border p-3 rounded-lg"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="state" className="block font-medium">State</label>
            <input
              type="text"
              id="state"
              name="state"
              className="w-96 border p-3 rounded-lg"
              value={formData.state}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="city" className="block font-medium">City</label>
            <input
              type="text"
              id="city"
              name="city"
              className="w-96 border p-3 rounded-lg"
              value={formData.city}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="address" className="block font-medium">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              className="w-96 border p-3 rounded-lg"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="postalcode" className="block font-medium">ZIP / Postal code</label>
            <input
              type="text"
              id="postalcode"
              name="postalcode"
              className="w-96 border p-3 rounded-lg"
              value={formData.postalcode}
              onChange={handleChange}
            />
          </div>

          <div>
            <button
              type="submit"
              id="button"
              className="w-full bg-[#333300] text-white font-semibold py-3 rounded-lg hover:bg-[#2b2b2b] focus:outline-none focus:ring focus:ring-[#666600]"
            >
              Register
            </button>
          </div>
        </form>

        {error && (
          <div className="mt-6 p-4 bg-red-200 border rounded-lg text-red-800">
            {error}
          </div>
        )}

        {submittedData && (
          <div id="display-data" className="mt-6 p-4 bg-gray-200 border rounded-lg text-gray-800">
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Email Address:</strong> {submittedData.email}</p>
            <p><strong>Phone Number:</strong> {submittedData.phone}</p>
            <p><strong>Country:</strong> {submittedData.country}</p>
            <p><strong>Address:</strong> {submittedData.address}</p>
            <p><strong>ZIP / Postal Code:</strong> {submittedData.postalCode}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterForm;
