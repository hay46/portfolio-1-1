import express from 'express';
import mysql from 'mysql2';
import cors from "cors";
const app = express();
const PORT = 5000; 

app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root", // replace with your MySQL password
  database: "haymanot-ebabu-portfolio", // replace with your database name
});

// Test DB connection
db.connect((err) => {
  if (err) {
    console.error(" Database connection failed:", err.message);
  } else {
    console.log(" Connected to MySQL Database!");
  }
});


// Route to create tables
app.get("/create-all-tables", (req, res) => {
  const createCompanies = `
    CREATE TABLE IF NOT EXISTS companies (
      company_id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL
    )
  `;

  const createCustomers = `
    CREATE TABLE IF NOT EXISTS customers (
      customer_id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      company_id INT,
      FOREIGN KEY (company_id) REFERENCES companies(company_id) ON DELETE SET NULL
    )
  `;

  const createAddresses = `
    CREATE TABLE IF NOT EXISTS addresses (
      address_id INT AUTO_INCREMENT PRIMARY KEY,
      customer_id INT,
      address_line VARCHAR(255) NOT NULL,
      city VARCHAR(100),
      country VARCHAR(100),
      FOREIGN KEY (customer_id) REFERENCES customers(customer_id) ON DELETE CASCADE
    )
  `;
  const createContact = `
    CREATE TABLE IF NOT EXISTS contacts (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
      email VARCHAR(255),
      password VARCHAR(255)
    )
  `;
  db.query(createCompanies, (err) => {
    if (err) return res.status(500).send("Error creating companies: " + err);
    db.query(createCustomers, (err2) => {
      if (err2)
        return res.status(500).send("Error creating customers: " + err2);
      db.query(createAddresses, (err3) => {
        if (err3)
          return res.status(500).send("Error creating addresses: " + err3);
        db.query(createContact, (err4) => {
          if (err4)
            return res.status(500).send("Error creating contacts: " + err4);
          res.send(" All tables created successfully!");
        });
      });
    });
  });
});







// Insert data
app.post("/add-data", (req, res) => {
  console.table(req.body);

  const { name, address } = req.body;
  if (!name || !address) {
    return res.status(400).send(" Please provide name and address.");
  }

  const sqlCompany = "INSERT INTO companies (name) VALUES (?)";
  db.query(sqlCompany, [name], (err, companyResult) => {
    if (err) return res.status(500).send(err);
    const company_id = companyResult.insertId;

    const sqlCustomer = "INSERT INTO customers (name, company_id) VALUES (?, ?)";
    db.query(sqlCustomer, [name, company_id], (err, customerResult) => {
      if (err) return res.status(500).send(err);
      const customer_id = customerResult.insertId;

      const sqlAddress = "INSERT INTO addresses (customer_id, address_line) VALUES (?, ?)";
      db.query(sqlAddress, [customer_id, address], (err, addressResult) => {
        if (err) return res.status(500).send(err);

        res.send({
          message: " Company, customer, and address added successfully!",
          company_id,
          customer_id,
          address_id: addressResult.insertId,
        });
      });
    });
  });
});


// Contact route
app.post("/add-contact", (req, res) => {
  console.table(req.body);
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send(" Please provide name, email, and password.");
  }

  const insertQuery = "INSERT INTO contacts (name, email, password) VALUES (?, ?, ?)";
  db.query(insertQuery, [name, email, password], (err, result) => {
    if (err) return res.status(500).send(err);

    res.send({
      message: " Contact saved successfully!",
      contact_id: result.insertId,
    });

    console.table({ contact_id: result.insertId, name, email });
  });
});




// Example route
app.get("/", (req, res) => {
  res.send("Server and Database are running!");
});



 

app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
