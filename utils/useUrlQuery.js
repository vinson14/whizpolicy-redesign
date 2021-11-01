import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { defaultDashboardClientBreadcrumbs } from "../data/ui";
import { findClientById, findPolicyByPolicyNumber } from "./utils";

const useUrlQuery = (clients, policies) => {
  const router = useRouter();
  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [breadcrumbLinks, setBreadcrumbLinks] = useState(
    defaultDashboardClientBreadcrumbs
  );
  useEffect(() => {
    if (clients.length === 0) return;

    const clientId = router.query.clientId;
    const policyNumber = router.query.policyNumber;

    if (clientId == null) {
      setSelectedClient(null);
      setSelectedPolicy(null);
      setBreadcrumbLinks(defaultDashboardClientBreadcrumbs);
    } else if (policyNumber == null) {
      const client = findClientById(clients, clientId);
      setSelectedClient(client);
      setSelectedPolicy(null);
      setBreadcrumbLinks([
        ...defaultDashboardClientBreadcrumbs,
        { label: client.name, route: `/dashboard?clientId=${clientId}` },
      ]);
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
    }
  }, [clients, policies, router.query.clientId, router.query.policyNumber]);

  return [selectedClient, selectedPolicy, breadcrumbLinks];
};

export default useUrlQuery;
