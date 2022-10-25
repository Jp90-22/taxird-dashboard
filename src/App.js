import React from "react";

import styled from "styled-components";
import Dashboard from "./app/components/Dashboard";
import Sidebar from "./app/components/Sidebar";

export default function App() {
  return (
    <Div>
      <Sidebar />
      <Dashboard />
    </Div>
  );
}

const Div = styled.div``;
