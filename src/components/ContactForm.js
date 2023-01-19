import React, {  useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const ContactForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submit, setSubmit] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { name, email, message } = user;
    const response = await fetch(
      "https://portfoliov2form-default-rtdb.firebaseio.com/portfolioform.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      }
    );
    
    if(response){
        setUser({
            name: "",
            email: "",
            message: "",
          })
          setSubmit(true)
          const timer = setTimeout(() => {
            setSubmit(false);
        }, 900);

        return () => {
            clearTimeout(timer)
        }
    }else{
        alert("Failed to Submit ")
    }
   
  };
 
  return (
    <Form onSubmit={postData} method="POST">
      <h3 className="Formheading">Interested to work together? Let's talk</h3>

      {submit && <p style={{color: "Green", margin:"auto", marginTop:"1.3rem",marginBottom:"1.3rem"}}>Submitted Successfully</p>}
      <Form.Group>
        <Form.Label>Full Name:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter  full name"
          required
          autoComplete="off"
          name="name"
          value={user.name}
          onChange={handleChange}
          className="input"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email:</Form.Label>
        <Form.Control
          type="email"
          placeholder="Email"
          required
          autoComplete="off"
          name="email"
          value={user.email}
          onChange={handleChange}
          className="input"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Message:</Form.Label>

        <Form.Control
          type="textarea"
          placeholder="Message"
          required
          autoComplete="off"
          name="message"
          value={user.message}
          onChange={handleChange}
          className="input"
        />
      </Form.Group>
      <Button variant="primary" className="from-btn" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ContactForm;
