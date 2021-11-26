import { useEffect, useState } from "react";
import { getClients } from "./api";

const useDashboardClientsState = (authState) => {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [loading, setLoading] = useState(true);

  const setAllNull = () => {
    setSelectedClient(null);
    setSelectedPolicy(null);
    setClients([]);
  };

  useEffect(() => {
    if (!authState) {
      setAllNull();
      return;
    }

    if (!loading) return;

    getClients()
      .then((clients) => setClients(clients))
      .then(() => setLoading(false));
  }, [loading, authState]);

  const clientOnClick = (client) => {
    setSelectedClient(client);
  };

  const policyOnClick = (policy) => {
    setSelectedPolicy(policy);
  };

  return [clients, selectedClient, selectedPolicy, clientOnClick, policyOnClick];
};

export default useDashboardClientsState;
