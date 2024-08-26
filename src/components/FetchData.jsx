import React, { useEffect, useState } from "react";
import supabase from "../supabase";

export default function fetchData(params) {
    const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase
        .from('users')
        .select('*');
  
      if (error) {
        console.error('Error fetching users:', error.message); // Log error message
      } else {
        console.log('Fetched data:', data); // Log the data
        setUsers(data);
      }
      setLoading(false);
    };
  
    fetchUsers();
  }, []);
  

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id_user}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}