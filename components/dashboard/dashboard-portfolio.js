import { useEffect } from "react";

const DashboardPortfolio = () => {
  useEffect(() => {
    console.log("dashboard portfolio rendered");
  }, []);
  return <div>Dashboard Portfolio Component</div>;
};

export default DashboardPortfolio;
