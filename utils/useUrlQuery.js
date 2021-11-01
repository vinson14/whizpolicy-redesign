import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  defaultDashboardClientBreadcrumbs,
  defaultDashboardPortfolioBreadcrumbs,
  SIDEBAR_CLIENTS_VALUE,
  SIDEBAR_PORTFOLIO_VALUE,
} from "../data/ui";
import { findClientById, findPolicyByPolicyNumber } from "./utils";
const useUrlQuery = (clients, policies) => {
  const router = useRouter();
  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [activeOption, setActiveOption] = useState();
  const [breadcrumbLinks, setBreadcrumbLinks] = useState(
    defaultDashboardClientBreadcrumbs
  );
  useEffect(() => {
    if (clients.length === 0) return;

    const clientId = router.query.clientId;
    const policyNumber = router.query.policyNumber;

    if (!clientId && !policyNumber) {
      setSelectedClient(null);
      setSelectedPolicy(null);
      if (!activeOption || activeOption == SIDEBAR_CLIENTS_VALUE)
        setBreadcrumbLinks(defaultDashboardClientBreadcrumbs);
      else setBreadcrumbLinks(defaultDashboardPortfolioBreadcrumbs);
      setActiveOption(activeOption ? activeOption : SIDEBAR_CLIENTS_VALUE);
    } else if (clientId && policyNumber == null) {
      const client = findClientById(clients, clientId);
      setSelectedClient(client);
      setSelectedPolicy(null);
      setBreadcrumbLinks([
        ...defaultDashboardClientBreadcrumbs,
        { label: client.name, route: `/dashboard?clientId=${clientId}` },
      ]);
      setActiveOption(SIDEBAR_CLIENTS_VALUE);
    } else if (!clientId && policyNumber) {
      setSelectedClient(null);
      setSelectedPolicy(findPolicyByPolicyNumber(policies, policyNumber));
      setBreadcrumbLinks([
        ...defaultDashboardPortfolioBreadcrumbs,
        {
          label: `${policyNumber}`,
          route: `/dashboard?policyNumber=${policyNumber}`,
        },
      ]);
      setActiveOption(SIDEBAR_PORTFOLIO_VALUE);
    } else {
      const client = findClientById(clients, clientId);
      setSelectedClient(client);
      setSelectedPolicy(
        findPolicyByPolicyNumber(client.policies, policyNumber)
      );
      setBreadcrumbLinks([
        ...defaultDashboardClientBreadcrumbs,
        { label: client.name, route: `/dashboard?clientId=${clientId}` },
        {
          label: policyNumber,
          route: `/dashboard?clientId=${clientId}&policyNumber=${policyNumber}`,
        },
      ]);
      setActiveOption(SIDEBAR_CLIENTS_VALUE);
    }
  }, [clients, policies, router.query.clientId, router.query.policyNumber]);

  return [
    selectedClient,
    selectedPolicy,
    breadcrumbLinks,
    activeOption,
    setActiveOption,
  ];
};

export default useUrlQuery;
