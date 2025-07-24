# SmartERP React Login App

This is a simple React-based login system for a SmartERP application with company selection and a home dashboard. The project simulates authentication and navigates to a home page with ERP application modules after a successful login.

## ✨ Features

- Company dropdown selector
- Input validation (company, username, password)
- Inline error messages
- Global company context
- Simulated login with hardcoded credentials
- Dashboard (Home page) with ERP modules
- Responsive and clean UI using TailwindCSS
- Background particles effect

### Prerequisites

Make sure you have installed:

- Node.js (v16 or above)
- npm or yarn



#### 📁 Project Structure

Below is the structure relevant to the login flow when a user signs in with username and password:


##### 🔁 Login Call Flow

1. **User Input**:  
   On `LoginForm.jsx`, the user fills in `company`, `username`, and `password`.

2. **Validation**:  
   `validateForm()` ensures all fields are filled.

3. **Simulated Authentication**:
   ```js
   if (form.username === "admin@smarterp.com" && form.password === "password123")

###### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/smarterp-login.git
cd smarterp-login
