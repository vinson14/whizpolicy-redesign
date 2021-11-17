import { useEffect, useState } from "react";
import {
  defaultDashboardClientBreadcrumbs,
  defaultDashboardPortfolioBreadcrumbs,
  POLICY_NUMBER_KEY,
  SIDEBAR_CLIENTS_VALUE,
  SIDEBAR_PORTFOLIO_VALUE,
} from "../data/ui";
import { findClientById, findPolicyByPolicyId } from "./utils";
import { animateScroll } from "react-scroll";

const useDashboardState = (clients, policies) => {
  const [selectedSidebarOption, setSelectedSidebarOption] = useState(
    SIDEBAR_CLIENTS_VALUE
  );
  const [selectedClient, setSelectedClient] = useState();
  const [selectedPolicy, setSelectedPolicy] = useState();

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const defaultBreadcrumbs = {
    [SIDEBAR_CLIENTS_VALUE]: [
      { label: "Dashboard", onClick: null },
      { label: "Clients", onClick: () => setSelectedClient(null) },
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
    scrollToTop();
  };

  useEffect(() => {
    console.log("update selectedClient");
    if (clients.length === 0) {
      console.log(clients.length);
      setSelectedClient(null);
      setSelectedPolicy(null);
    } else if (selectedPolicy && selectedClient) {
      setSelectedClient(findClientById(clients, selectedClient.clientId));
      setSelectedPolicy(
        findPolicyByPolicyId(selectedClient.policies, selectedPolicy.policyId)
      );
    } else if (selectedClient) {
      setSelectedClient(findClientById(clients, selectedClient.clientId));
    }
  }, [clients]);

  useEffect(() => {
    if (!selectedClient && !selectedPolicy)
      setBreadcrumbLinks(defaultBreadcrumbs[SIDEBAR_CLIENTS_VALUE]);
    else if (selectedClient && selectedPolicy)
      setBreadcrumbLinks([
        ...defaultBreadcrumbs[SIDEBAR_CLIENTS_VALUE],
        { label: selectedClient.name, onClick: () => setSelectedPolicy(null) },
        { label: selectedPolicy[POLICY_NUMBER_KEY], onClick: null },
      ]);
    else if (selectedClient)
      setBreadcrumbLinks([
        ...defaultBreadcrumbs[SIDEBAR_CLIENTS_VALUE],
        { label: selectedClient.name, onClick: () => setSelectedPolicy(null) },
      ]);
  }, [selectedClient, selectedPolicy]);

  const clientOnClick = (client) => {
    setSelectedClient(client);
    scrollToTop();
  };

  const policyOnClick = (policy) => {
    setSelectedPolicy(policy);
    scrollToTop();
  };

  const goBackOneLevel = () => {
    if (selectedPolicy && selectedClient) setSelectedPolicy(null);
    else if (selectedClient) setSelectedClient(null);
    scrollToTop();
  };

  return [
    selectedSidebarOption,
    selectedClient,
    selectedPolicy,
    breadcrumbLinks,
    sidebarOptionOnClick,
    clientOnClick,
    policyOnClick,
    goBackOneLevel,
  ];
};

export default useDashboardState;
