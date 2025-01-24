import * as React from "react";
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Text,
} from "@react-email/components";
import { FormData } from "./ContactForm";

export const EmailTemplate = ({ firstName, lastName, email, companyName, findAboutUs }: FormData) => {
  const containerStyle = {
    margin: "0 auto",
    padding: "0 1.25rem",
    marginTop: "1.25rem",
    marginBottom: "3rem",
  };

  const hrStyle = {
    marginTop: "0.625rem",
    marginBottom: "1.875rem",
    border: "1px solid #ccc",
  };

  const textStyle = {
    base: {
      fontSize: "1rem",
      marginTop: "0",
      marginBottom: "0.625rem",
    },
  };

  return (
    <Html>
      <Head />
      <Preview>Contact Form</Preview>
      <Body style={{ fontFamily: "sans-serif", background: "#fff" }}>
        <Container style={containerStyle}>
          <Hr style={hrStyle} />

          <Text style={textStyle.base}>
            <b>From:</b> <i>{email}</i>,
          </Text>
          <Text style={textStyle.base}><b>Name</b>: {firstName} {lastName}</Text>
          <Text style={textStyle.base}><b>Company name:</b> {companyName}</Text>
          <Text style={textStyle.base}><b>Found about Learna from:</b> {findAboutUs}</Text>
          <Text style={textStyle.base}>
            Sent via Contact Form
          </Text>
          <Hr style={hrStyle} />
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplate;