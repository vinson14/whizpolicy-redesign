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
  const [breadcrumbLinks, setBreadcrumbLinks] = useState(
    defaultDashboardClientBreadcrumbs
  );
  const sidebarOptionOnClick = (value) => {
    setSelectedSidebarOption(value);
    setSelectedClient(null);
    setSelectedPolicy(null);
    setBreadcrumbLinks(defaultBreadcrumbs[value]);
  };

  useEffect(() => {
    console.log("update selectedClient");
    if (selectedClient)
      setSelectedClient(findClientById(clients, selectedClient.clientId));
    if (selectedPolicy && selectedClient)
      setSelectedPolicy(
        findPolicyByPolicyId(selectedClient.policies, selectedPolicy.policyId)
      );
  }, [clients]);

  const defaultBreadcrumbs = {
    [SIDEBAR_CLIENTS_VALUE]: defaultDashboardClientBreadcrumbs,
    [SIDEBAR_PORTFOLIO_VALUE]: defaultDashboardPortfolioBreadcrumbs,
  };

  const clientOnClick = (client) => {
    setSelectedClient(client);
    setBreadcrumbLinks([
      ...breadcrumbLinks,
      { label: client.name, route: "/dashboard" },
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
