import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ApartmentCreatePage() {
  const [formData, setFormData] = useState({
    title: "Loading data...",
    pricePerDay: 0,
  });
  const params = useParams();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(
        `https://ironbnb-m3.herokuapp.com/apartments/`,
        formData
      )
      .then(() => navigate("/"));
      
  }

  function handleChange(e) {
    const inputName = e.target.name;
    const value = e.target.value;

    setFormData((formData) => {
      return { ...formData, [inputName]: value };
    });
  }

  return  (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input
      type="text"
      name="title"
      value={formData.headline}
      onChange={handleChange}
      />

      <label>Price per Day</label>
      <input
      type="number"
      name="pricePerDay"
      value={formData.pricePerDay}
      onChange={handleChange}
    />

    <button type="submit">Save Changes</button>
  </form>
  )  
    
  ;
}