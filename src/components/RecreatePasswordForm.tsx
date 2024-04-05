import React, { useState } from 'react';

export default function PasswordReset() {
    const [formData, setFormData] = useState({
        newpassword: '',
        renewpassword: '',
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
          <h1>Нэвтрэх</h1>
          <form onSubmit={(event) => event.preventDefault()}> {/* Prevent default form submission */}
            <label htmlFor="Имэйл">
              Шинэ нууц үг:
              <input
                type="email"
                id="Email"
                name="Имэйл"
                value={formData.newpassword}
                onChange={handleInputChange}
              />
            </label>
            <label htmlFor="Нууц үг">
            Шинэ нууц үг баталгаажуулах:
                <input 
                    type="password"
                    id="password"
                    name="Нууц үг"
                    value={formData.renewpassword}
                    onChange={handleInputChange}
                />
            </label>
            </form>
        </div>
    );
}