import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from './components/Landing_Page/Landing_page';

const App = () => {
    return (
      <Router>
        {/* Define routes */}
        <Route path="/" element={<Layout />} />
        {/* Add more routes as needed */}
      </Router>
    );
  };
  
  export default App;