import { Box, Checkbox, FormControlLabel, FormGroup, FormHelperText, Typography } from "@mui/material";
import { Controller } from "react-hook-form";
import useModal from "../../../../utils/useModal";
import ModalContainer from "../modal/modal-container";

const TandCInput = ({ name, control, label, error, type, ...props }) => {
  const [modalState, openModal, closeModal] = useModal();
  const onClick = () => openModal();

  return (
    <>
      <TermsModal open={modalState} handleClose={closeModal} />
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Box>
            <Box display="flex" alignItems="center">
              <Checkbox checked={field.value} {...field} />
              <Typography variant="caption">
                I agree with the{" "}
                <Typography
                  onClick={onClick}
                  variant="caption"
                  color="primary"
                  underline="true"
                  sx={{ cursor: "pointer", textDecoration: "underline" }}
                >
                  Terms and Conditions and Privacy Policy.
                </Typography>
              </Typography>
            </Box>
            <Typography ml={1} variant="caption" color="error.main">
              {error && error.message}
            </Typography>
          </Box>
        )}
        rules={{ ...props }}
      />
    </>
  );
};

const TermsModal = ({ open, handleClose }) => {
  const subPoint = {
    0: "(a)",
    1: "(b)",
  };

  const subSubPoint = {
    0: "(i)",
    1: "(ii)",
  };

  return (
    <ModalContainer open={open} onClose={handleClose} title="">
      <Box display="flex" flexDirection="column" height="100%">
        {text.map((section, sectionIndex) => {
          return (
            <Box key={section.header}>
              <Typography fontWeight={600} my={2}>
                {sectionIndex + 1}. {section.header}
              </Typography>
              {section.subsections.map((subsection, subIndex) => (
                <Typography key={subsection} m={2}>
                  {sectionIndex + 1}.{subIndex + 1}&nbsp;&nbsp;&nbsp;&nbsp;{subsection}
                </Typography>
              ))}
            </Box>
          );
        })}
      </Box>
    </ModalContainer>
  );
};

const text = [
  {
    header: "Term Of Service",
    subsections: [
      'We are layZpeeps Pte. Ltd – Singapore based company No. [ARCA Number] – ("we", "us", "our", "layZpeeps") is the owner and operator of this website, https://www.whizpolicy.com (the "Site", "Software").',
      "Your use of this Site is subjected to these Terms of Service. By using the Site, you are deemed to have accepted and agreed to be bounded by these Terms of Service. We may at any time revise these Terms of Service by updating the revised version of these Terms of Service on the Site. If You do not agree to these Terms of Service, please do not use or access the Site.",
      "These Terms of Service should be read in tandem with the Privacy Policy and other terms and conditions that apply to certain programs, promotions, contests as and when they are updated.",
    ],
  },
  {
    header: "SOFTWARE AND SUBSCRIPTION",
    subsections: [
      "Individuals and companies can subscribe to the Software on a monthly or annual subscription, and each person who uses it must pay and maintain an active subscription, whether in their own name or on through of their company. Subscriptions are non-transferable and non-sellable. It will be deemed a breach of these Terms if you provide access to The Software to a third party, either directly or indirectly, without our prior written agreement.",
      "Your Software subscription permits you to use the Software for the duration for which you have paid. Your subscription will stay valid until the end of your subscription period even after your cancellation.",
    ],
  },
  {
    header: "SITE ACCESS",
    subsections: [
      "You are responsible for all access to the Site via your internet connection, even if it is by someone else.",
      "We do not warrant that Our Site is free from any viruses or other malicious, destructive or corrupting code or that viruses, malware or spyware will not be transmitted in connection with or arising from the use of Our Website.",
      "We shall make reasonable efforts to keep the Site up and running at all times. We cannot, however, promise that the Site or any specific function or element of the Site will always be accessible or error-free. The Site may be inaccessible at times when we are doing upgrades or performing necessary maintenance on the Site. We are also not liable for any loss of data or consequential damage as a result of the temporary disruption.",
    ],
  },
  {
    header: "ACCESS TO SITE FROM LOCATIONS OTHER THAN SINGAPORE",
    subsections: [
      "While the Site is available worldwide, the content and services provided by Our Website are intended primarily for Singapore. We make no promise that the materials on the Site are appropriate or available for use in locations outside Singapore.",
      "Access to the Site from locations other than Singapore is at the user's own risk, and the user is responsible for adhering to any local laws and regulations.",
    ],
  },
  {
    header: "DISCLAIMER OF WARRANTIES AND LIMITATION OF LIABILITY",
    subsections: [
      'All information published on the Site is provided on an "as is" and "as available" basis with no explicit or implied warranty of any kind. We make no representations as to the quality, completeness or accuracy of any content made available on the Site.',
      "The Site and Software do not offer advice and accepts no liability. Nothing published on the Site is intended to provide anyone with any legal, tax, investment, financial, or other sort of advice. Any decision made based on the information or advice from the Site or Software is at your own risk, and you are solely responsible for the accuracy and completeness of any advice rendered.",
      "We shall not be liable for any loss of profit, business, or income, any costs or expenditures, or any special, indirect, or consequential damages of any kind, caused or incurred by you as a consequence of or in connection with the provision to the Site.",
    ],
  },
  {
    header: "THIRD PARTY WEBSITES, CONTENT, SYSTEMS, TRANSACTIONS",
    subsections: [
      "Links to other websites and online resources may be provided by the Site. We are not responsible for, and do not promote, such third-party websites or materials. Use of third-party websites and resources is entirely at your own risk and We disclaim liability for any and all forms of loss or damage arising out of the use of those other websites and their content.",
      "You may create a link to this Site, provided that: (a)The link is fair and lawful, and it is not presented in an unethical manner that is: (i)	Misleading or implying any form of affiliation, approval, or endorsement by us that does not exist, or (ii)	Endangering our reputation or the reputation of any of our affiliates; (b)	You retain the legal right and technical ability to immediately remove the link at any time, following a request by us to do so.",
      "We retain the right to compel you to delete any link to the Site at any time, and you agree to remove any such link immediately upon our request.",
    ],
  },
  {
    header: "REGISTRATION",
    subsections: [
      "To register as a user on Our Site, you must be at least 18 years old and not be prohibited from doing so by any relevant legislation.",
      "You accept that the registration information supplied by You or anyone authorised by You at registration is correct and that you agree to update the abovementioned registration information as and when it changes.",
      "You are solely responsible for the security of your user login information and password at all times. You agree to alert us as soon as possible if you feel that your account has been accessed without your permission.",
      "You agree not to get or attempt to obtain unauthorised access to the Site or any protected information by any methods other than those specifically made available by Us for Your use.",
      "We have the right to refuse your registration request or revoke your current registration at our sole discretion.",
    ],
  },
  {
    header: "INDEMNITY",
    subsections: [
      "You agree to indemnify and hold harmless layZpeeps handling or otherwise providing access to the Site, from and against any and all claims, actions, demands, proceedings, liabilities or judgments, and against all losses, taxes, expenses, costs, legal fees, and liabilities (present, future, contingent or otherwise on an indemnity basis), which may be suffered or incurred by any of the Indemnified Persons as a result of or in connection with a breach of this Term of Service by You.",
    ],
  },
  {
    header: "INTELLECTUAL PROPERTY",
    subsections: [
      "The intellectual property rights in the Site and all of the text, pictures, videos, graphics, user interfaces, visual interfaces, trademarks, logos, applications, programs, computer code and other content made available on it are owned by us and our licensors. You may not print or otherwise make copies of any such content without our express prior permission.",
      'All Trade Marks are registered and unregistered trademarks of layZpeeps, its related corporations and/or third parties. Nothing on our Site should be construed as granting, by implication or otherwise, any licence or right to use any Trade Marks displayed on the Website, without our written permission or any other applicable trade mark owner. The name or word "layZpeeps" may not be used in any way without our express prior permission.',
    ],
  },
  {
    header: "REFUND AND CANCELLATION POLICY",
    subsections: [
      "There will be no refund once a purchase is made. The purchase is non-refundable and non-transferable once made.",
      "You may cancel your monthly subscription at any time during your monthly subscription up to the point of auto-renewal, which occurs at 11.59pm on the final day of your subscription. Your account will remain active until the expiration of your current license. At that time, the Software will restrict access to your account and maintain your client data for a maximum of 180 days beyond the final subscription expiration date. This is referred to as the 180-Day Storage Period.",
      "Your account and all your client data will be erased after the 180-Day Storage Period. You agree that upon the closure of your account, all your information and client records may not be retrieved.",
    ],
  },
  {
    header: "AUTO-RENEWAL POLICY",
    subsections: [
      "Your subscription will be automatically renewed upon expiry.",
      "You may deactivate the auto-renewal anytime on your setting page.",
    ],
  },
  {
    header: "COLLECTION OF PERSONAL INFORMATION",
    subsections: [
      "We may collect and use information about you in accordance with our privacy policy. You can view a copy of this policy by clicking here https://www.whizpolicy.com/privacy-policy",
    ],
  },
  {
    header: "DURATION OF TERMS",
    subsections: [
      "These Terms of Service are in force until terminated. We reserve the rights to terminate your access to or use of the Site at any time and for any reason. If we terminate your access to the Site, you will not have the right to bring claims against us or our affiliates with respect to such termination.",
    ],
  },
  {
    header: "GOVERNING LAWS",
    subsections: [
      "These Terms of Service will be governed by and construed in accordance with the laws of Singapore, and the courts of Singapore will have jurisdiction over any claim or dispute arising under or in connection with these Terms of Service.",
    ],
  },
];

export default TandCInput;
