import React from 'react'

const Table = ({ formData}) => {
  return (
    <div>
                <table styele={{
                    borderCollapse: "collapse",
                    width: "100%",
                    border: "1px solid #ddd",
                    fontSize: "18px",
                    textAlign: "left",
                    padding: "8px",
                    backgroundColor: "#f2f2f2",
                    color: "#333",
                    textTransform: "capitalize",
                    fontFamily: "Arial, sans-serif",
                    marginTop: "20px",
                    marginBottom: "20px",
                }}>
                    <thead>
                        <tr>
                            <th>Pet Name</th>
                            <th>Pet Type</th>
                            <th>Breed</th>
                            <th>Adopter Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {formData.map((data, index) => (
                            <tr key={index}>
                                <td>{data.petname}</td>
                                <td>{data.pettype}</td>
                                <td>{data.breed}</td>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div style={{ marginTop: "20px", textAlign: "center" }}>
                    
                </div>
            </div>
  )
}

export default Table
