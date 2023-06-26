import axios from "axios";
import { useParams } from "react-router-dom"; // Import the useParams hook from react-router-dom
import { useState, useEffect } from "react";

const StaffDetail = () => {
  const { id } = useParams();
  const [staffs, setStaffs] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(
          `https://6498fe7b79fbe9bcf83e8a2e.mockapi.io/staffManagement/${id}`
        );
        setStaffs(response.data);
      } catch (error) {
        console.error("Error fetching event details:", error);
      }
    };

    fetchEvent();
  }, [id]);

  if (!staffs) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Staff Detail</h2>
      <p>Staff ID: {staffs.id}</p>
      <p>Staff Name: {staffs.name}</p>
      <p>Description: {staffs.address}</p>
    </div>
  );
};

export default StaffDetail;
