import { useState } from "react";          // <== IMPORT

function AddApartmentPage() {
  const [headline, setHeadline] = useState("");     // <== ADD
  const [price, setPrice] = useState(1);         // <== ADD


  return (
    <div className="AddApartmentPage">
      <h3>Add New Apartment</h3>
      
      {/*  👇  ADD 👇  */}
      <form >
        <label>Title</label>
        <input
          type="text"
          name="headline"
          onChange={(e) => setHeadline(e.target.value)}
          value={headline}
        />

        <label>Price per Day</label>
        <input
          type="number"
          name="pricePerDay"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        
        <button type="submit">Create Apartment</button>
        
      </form>
    </div>
  );
}

export default AddApartmentPage;