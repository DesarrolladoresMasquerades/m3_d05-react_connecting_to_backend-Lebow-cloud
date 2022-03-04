import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ApartmentsDetailPage() {
  const [formData, setFormData] = useState({
    title: "Loading data...",
    pricePerDay: 0,
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://ironbnb-m3.herokuapp.com/apartments/${params.apartmentId}`)
      .then((response) => {
        setFormData(response.data);
      });
  }, [params.apartmentId]);

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(
        `https://ironbnb-m3.herokuapp.com/apartments/${params.apartmentId}/edit`,
        formData
      )
      .then(() => navigate(`/apartments/${params.apartmendId}`));
      
  }

  function handleChange(e) {
    const inputName = e.target.name;
    const value = e.target.value;

    setFormData((formData) => {
      return { ...formData, [inputName]: value };
    });
  }

  return (
    <div className="AddApartmentPage">
      <h3>Edit apartment {formData.title}</h3>

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
    </div>
  );
}
