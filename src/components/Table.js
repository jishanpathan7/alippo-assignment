//* Packages Imports */
import React, { useState } from "react";

//* Components Imports */
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";

const Table = ({ data, setData }) => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleEdit = (item) => {
    setSelectedItem(item);
    setEditModalOpen(true);
  };

  const handleDelete = (item) => {
    setSelectedItem(item);
    setDeleteModalOpen(true);
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>SL.No</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Pin Code</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name || "-"}</td>
              <td>{item.age || "-"}</td>
              <td>{item.city || "-"}</td>
              <td>{item.pinCode || "-"}</td>
              <td>
                <button onClick={() => handleEdit(item)}>Edit</button>
                <button onClick={() => handleDelete(item)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editModalOpen && (
        <div className="overlay">
          <EditModal
            item={selectedItem}
            data={data}
            setData={setData}
            onClose={() => setEditModalOpen(false)}
          />
        </div>
      )}
      {deleteModalOpen && (
        <div className="overlay">
          <DeleteModal
            data={data}
            setData={setData}
            item={selectedItem}
            onClose={() => setDeleteModalOpen(false)}
          />
        </div>
      )}
    </div>
  );
};

export default Table;
