//* Packages Imports */
import React from "react";

const DeleteModal = ({ item, onClose, data, setData }) => {
  //* Handle Item Delete Function
  const handleDelete = () => {
    const updatedData = data.filter((dataItem) => dataItem !== item);
    setData(updatedData);
    onClose();
  };

  return (
    <div className="deleteModal">
      <div className="deleteEntry">Delete Entry</div>
      <p>Are you sure you want to delete this entry?</p>
   <div className="buttonContainer">
   <button className="confirmDelete" onClick={handleDelete}>
        Delete
      </button>
      <button className="cancelDelete-button" onClick={onClose}>
        Cancel
      </button>
   </div>
    </div>
  );
};

export default DeleteModal;
