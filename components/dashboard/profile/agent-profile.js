import { Avatar, Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { FIELD_TYPE_TEXT } from "../../../data/ui";
import { getAgentDetails } from "../../../utils/api";
import useModal from "../../../utils/useModal";
import FloatingEditButton from "../../stateless/interface/buttons/floating-edit-button";
import ClientCardHeader from "../../stateless/interface/cards/client-card-header";
import ClientCardInfoText from "../../stateless/interface/cards/client-card-info-text";
import ClientDetailCard from "../../stateless/interface/cards/client-detail-card";
import ModalContainer from "../../stateless/interface/modal/modal-container";
import TopAppBar from "../../stateless/interface/navigation/top-appbar";
import MainHeader from "../../stateless/interface/text/main-header";
import DashboardHeaderContainer from "../../stateless/layout/dashboard-header-container";
import AgentProfileForm from "./profile-form";

const AgentProfile = ({ openSidebar }) => {
  const [editModal, openEditModal, closeEditModal] = useModal();
  const [agentAttr, setAgentAttr] = useState({});

  useEffect(() => {
    console.log("useEffect ran");
    getAgentDetails().then((res) => {
      console.log(res);
      setAgentAttr({
        given_name: res.attributes.given_name,
        family_name: res.attributes.family_name,
        email: res.attributes.email,
        "custom:rnf_code": res.attributes["custom:rnf_code"],
      });
    });
  }, []);

  return (
    <>
      <TopAppBar menuOnClick={openSidebar} />
      <Box p={{ md: 5, xs: 1 }}>
        <FloatingEditButton onClick={openEditModal}>Edit Profile</FloatingEditButton>
        {editModal && <AgentProfileForm open={editModal} onClose={closeEditModal} values={agentAttr} />}
        <MainHeader>Profile</MainHeader>
        <Grid container my={3} justifyContent="center">
          <Grid item xs={7} justifyContent="center">
            <Box
              sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", my: 3 }}
            >
              <Avatar sx={{ height: 150, width: 150 }}>VO</Avatar>
            </Box>
          </Grid>

          <ClientCardInfoText label="Given Name" value={agentAttr.given_name} type={FIELD_TYPE_TEXT} />
          <ClientCardInfoText label="Family Name" value={agentAttr.family_name} type={FIELD_TYPE_TEXT} />
          <ClientCardInfoText label="Email" value={agentAttr.email} type={FIELD_TYPE_TEXT} />
          <ClientCardInfoText label="RNF Code" value={agentAttr["custom:rnf_code"]} type={FIELD_TYPE_TEXT} />
          <Grid item sm={6} />
        </Grid>
      </Box>
    </>
  );
};

export default AgentProfile;
