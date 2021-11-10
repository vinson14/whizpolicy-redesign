import { useEffect, useState } from "react";
import {
  defaultDashboardClientBreadcrumbs,
  defaultDashboardPortfolioBreadcrumbs,
  POLICY_NUMBER_KEY,
  SIDEBAR_CLIENTS_VALUE,
  SIDEBAR_PORTFOLIO_VALUE,
} from "../data/ui";
import { findClientById, findPolicyByPolicyId } from "./utils";

const useDashboardState = (clients, policies) => {
  const [selectedSidebarOption, setSelectedSidebarOption] = useState(
    SIDEBAR_CLIENTS_VALUE
  );
  const [selectedClient, setSelectedClient] = useState();
  const [selectedPolicy, setSelectedPolicy] = useState();

  const breadcrumbClientOnClick = () => {
    setSelectedClient(null);
    setSelectedPolicy(null);
    setBreadcrumbLinks(defaultBreadcrumbs[SIDEBAR_CLIENTS_VALUE]);
  };

  const defaultBreadcrumbs = {
    [SIDEBAR_CLIENTS_VALUE]: [
      { label: "Dashboard", onClick: null },
      { label: "Clients", onClick: breadcrumbClientOnClick },
    ],
  };

  const [breadcrumbLinks, setBreadcrumbLinks] = useState(
    defaultBreadcrumbs[SIDEBAR_CLIENTS_VALUE]
  );
  const sidebarOptionOnClick = (value) => {
    setSelectedSidebarOption(value);
    setSelectedClient(null);
    setSelectedPolicy(null);
    setBreadcrumbLinks(defaultBreadcrumbs[value]);
  };

  useEffect(() => {
    console.log("update selectedClient");
    if (clients.length === 0) {
      console.log(clients.length);
      setSelectedClient(null);
      setSelectedPolicy(null);
    } else if (selectedClient)
      setSelectedClient(findClientById(clients, selectedClient.clientId));
    else if (selectedPolicy && selectedClient) {
      setSelectedClient(findClientById(clients, selectedClient.clientId));
      setSelectedPolicy(
        findPolicyByPolicyId(selectedClient.policies, selectedPolicy.policyId)
      );
    }
  }, [clients]);

  const clientOnClick = (client) => {
    setSelectedClient(client);
    setBreadcrumbLinks([
      ...breadcrumbLinks,
      { label: client.name, onClick: () => setSelectedPolicy(null) },
    ]);
  };

  const policyOnClick = (policy) => {
    setSelectedPolicy(policy);
    setBreadcrumbLinks([
      ...breadcrumbLinks,
      { label: policy[POLICY_NUMBER_KEY], route: "/dashboard" },
    ]);
  };

  return [
    selectedSidebarOption,
    selectedClient,
    selectedPolicy,
    breadcrumbLinks,
    sidebarOptionOnClick,
    clientOnClick,
    policyOnClick,
  ];
};

export default useDashboardState;
