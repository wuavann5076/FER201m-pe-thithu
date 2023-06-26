import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Container } from "react-bootstrap";

import axios from "axios";
import { Link } from "react-router-dom";

function SearchList() {
  const [staffs, setStaffs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://6498fe7b79fbe9bcf83e8a2e.mockapi.io/staffManagement"
        );
        setStaffs(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="SearchList">
      <Container>
        <h1 className="text-center mt-4">staffs List</h1>

        <div>
          <Table>
            <thead>
              <tr>
                <th>staffs Name</th>
                <th>Location</th>
                <th>Description</th>
                <th>Timeline</th>
              </tr>
            </thead>
            <tbody>
              {staffs.map((staffs) => (
                <tr key={staffs.id}>
                  <td>{staffs.name}</td>
                  <td>{staffs.address}</td>
                  <td>{staffs.age}</td>
                  <td>
                    <img src={staffs.avatar} />
                  </td>
                  <td>
                    <Link to={`/staffDetail/${staffs.id}`}>
                      <Button>Detail</Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
}

export default SearchList;
