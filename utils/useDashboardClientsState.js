import { useEffect, useState } from "react";
import { animateScroll } from "react-scroll";
import { getClients } from "./api";
import { findClientById, findPolicyByPolicyId, getName } from "./utils";

const useDashboardClientsState = (authState) => {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const [loading, setLoading] = useState(true);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const setAllNull = () => {
    setSelectedClient(null);
    setSelectedPolicy(null);
    setClients([]);
  };

  useEffect(() => {
    if (!authState) {
      setLoading(true);
      setAllNull();
      return;
    }

    if (!loading) return;

    getClients()
      .then((clients) => setClients(clients))
      .then(() => setLoading(false));
  }, [loading, authState]);

  useEffect(() => {
    console.log(clients);
    const newSelectedClient = findClientById(clients, selectedClient?.clientId);
    setSelectedClient(newSelectedClient);
    if (newSelectedClient) {
      const foundPolicy = findPolicyByPolicyId(newSelectedClient.policies, selectedPolicy?.policyId);
      setSelectedPolicy(foundPolicy);
    }
  }, [clients, selectedClient, selectedPolicy]);

  const clientOnClick = (client) => {
    setSelectedClient(client);
  };

  const policyOnClick = (policy) => {
    setSelectedPolicy(policy);
  };

  const goBack = () => {
    if (selectedPolicy && selectedClient) {
      setSelectedPolicy(null);
    } else if (selectedClient) {
      setSelectedClient(null);
    }
  };

  useEffect(() => {
    scrollToTop();
    if (!selectedClient) {
      setBreadcrumbs([]);
    } else if (!selectedPolicy) {
      setBreadcrumbs([
        { label: "Clients", onClick: () => setSelectedClient(null) },
        { label: getName(selectedClient), onClick: null },
      ]);
    } else {
      setBreadcrumbs([
        {
          label: "Clients",
          onClick: () => {
            setSelectedClient(null);
            setSelectedPolicy(null);
          },
        },
        { label: getName(selectedClient), onClick: () => setSelectedPolicy(null) },
        { label: `${selectedPolicy?.policyNumber}`, onClick: null },
      ]);
    }
  }, [selectedClient, selectedPolicy]);

  return [
    clients,
    selectedClient,
    selectedPolicy,
    breadcrumbs,
    loading,
    setLoading,
    clientOnClick,
    policyOnClick,
    goBack,
  ];
};

export default useDashboardClientsState;
