import React, { useState } from 'react';

export default function PasswordForgot() {
    const [formData, setFormData] = useState({
        email: '',
    });

    function handleInputChange(event: React.FormEvent<HTMLInputElement>) {
        const { name, value } = event.target as HTMLInputElement;
        setFormData({
          ...formData,
          [name]: value,
        });
      }
      

    return (
        <div className="login-page">
          <h1>Нууц үг мартсан</h1>
          <form onSubmit={(event) => event.preventDefault()}> {/* Prevent default form submission */}
            <label htmlFor="Имэйл">
              Username:
              <input
                type="email"
                id="Email"
                name="Имэйл"
                value={formData.email}
                onChange={handleInputChange}
              />
            </label>
            </form>
        </div>
    );
}