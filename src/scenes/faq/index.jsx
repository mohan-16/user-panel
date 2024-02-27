import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle=" Frequently Asked Question Page" />

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            color={colors.greenAccent[400]}
            variant="h5"
            style={{ margin: "10px" }}
          >
            How do I navigate the user panel interface?{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Our user panel interface is designed to be intuitive and
          user-friendly. You can navigate between different sections using the
          menu on the left-hand side.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            color={colors.greenAccent[400]}
            variant="h5"
            style={{ margin: "10px" }}
          >
            What should I do if I encounter an error or issue?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Yes, you can access your account from multiple devices. Simply log in
          using your credentials from any supported device with an internet
          connection.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            color={colors.greenAccent[400]}
            variant="h5"
            style={{ margin: "10px" }}
          >
            Is there a mobile app available for the user panel?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Currently, we do not have a dedicated mobile app for the user panel.
          However, our website is optimized for mobile browsers, so you can
          access your account on your smartphone or tablet.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            color={colors.greenAccent[400]}
            variant="h5"
            style={{ margin: "10px" }}
          >
            How can I contact customer support?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          For any questions or assistance, you can contact our customer support
          team by sending an email to support@example.com. Our team is available
          24/7 to assist you.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            color={colors.greenAccent[400]}
            variant="h5"
            style={{ margin: "10px" }}
          >
            Is my data secure with your service?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          : Yes, we take the security of your data very seriously. We use
          encryption and follow industry best practices to protect your
          information
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            color={colors.greenAccent[400]}
            variant="h5"
            style={{ margin: "10px" }}
          >
            How can I report a bug or provide feedback?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          We appreciate your feedback! You can report any bugs or provide
          feedback by contacting our support team or using the feedback form
          located in the "Help" section of your account.
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
