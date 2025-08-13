import React, { createContext, useContext, useState } from 'react';

const EmployeeContext = createContext();

export const useEmployees = () => {
  const context = useContext(EmployeeContext);
  if (!context) {
    throw new Error('useEmployees must be used within an EmployeeProvider');
  }
  return context;
};

export const EmployeeProvider = ({ children }) => {
  const [employees] = useState([
    {
      id: 1,
      name: "Ahmed Mohamed",
      position: "Developer",
      status: "present",
      checkIn: "08:00",
      checkOut: "17:00",
    },
    {
      id: 2,
      name: "Mariam Ali",
      position: "Designer",
      status: "late",
      checkIn: "08:45",
      checkOut: "17:30",
    },
    {
      id: 3,
      name: "Omar Khalid",
      position: "Manager",
      status: "absent",
      checkIn: "--",
      checkOut: "--",
    },
    {
      id: 4,
      name: "Fatima Hassan",
      position: "HR",
      status: "present",
      checkIn: "07:55",
      checkOut: "16:58",
    },
  ]);

  return (
    <EmployeeContext.Provider value={{ employees }}>
      {children}
    </EmployeeContext.Provider>
  );
};