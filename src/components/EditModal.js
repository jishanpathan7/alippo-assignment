//* Packages Imports */
import React, { useState } from "react";

const EditModal = ({ item, onClose, data, setData }) => {
  const [editedValues, setEditedValues] = useState({
    name: item.name || "",
    city: item.city || "",
    age: item.age || "",
    pinCode: item.pinCode || "",
  });

  //* Handle the input changes
  const handleChange = (fieldName, value) => {
    setEditedValues((prevValues) => ({ ...prevValues, [fieldName]: value }));
  };

  //* Handle the Item Edit and Save
  const handleSave = () => {
    const updatedItem = { ...item, ...editedValues };
    const updatedData = data.map((dataItem) =>
      dataItem === item ? updatedItem : dataItem
    );

    setData(updatedData);
    onClose();
  };

  return (
    <div className="editContainer">
      <label>Name:</label>
      <input
        type="text"
        value={editedValues.name}
        onChange={(e) => handleChange("name", e.target.value)}
      />
      <label>City:</label>
      <input
        type="text"
        value={editedValues.city}
        onChange={(e) => handleChange("city", e.target.value)}
      />
      <label>Age:</label>
      <input
        type="text"
        value={editedValues.age}
        onChange={(e) => handleChange("age", e.target.value)}
      />
      <label>Pin Code:</label>
      <input
        type="text"
        value={editedValues.pinCode}
        onChange={(e) => handleChange("pinCode", e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default EditModal;
