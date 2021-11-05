import { FC } from "react";
import ContactForm from "src/components/Forms/ContactForm";
import Layout from "src/components/Layout";
import { Col } from "src/styles/grid";
import GridTemplate from "src/templatetes/GridTemplate";

const Contact: FC = () => (
  <Layout pageTitle="Contact Us">
    <GridTemplate>
      <Col data-testid="page-wrapper" xs={12}>
        <h1>Contact 4 buddy</h1>
        <ContactForm />
      </Col>
    </GridTemplate>
  </Layout>
);

export default Contact;
