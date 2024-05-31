import "./contact.scss";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Dropdown, Form, Input, Space, Select } from "antd";
import Icon from "@ant-design/icons";
import { useMutation } from "@apollo/client";
import { dropdownIcon, rightArrow } from "../../constants/icons";

// assets
import { ReactComponent as PaperFlight } from "../../assets/Icons/Contact/papaer_flight.svg";
import { ReactComponent as RightArrow } from "../../assets/Icons/Contact/right_yellow.svg";

// components
import ButtonComponent from "../../components/UI/Button";

// api
import { createContact } from "../../api";
import SocialIconsComponent from "../../components/Social/SocialIcons";

const Contact = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [addContact, { data }] = useMutation(createContact);

  // console.log("data ", data);
  const { TextArea } = Input;

  const onFinish = async (values) => {
    // console.log("Success:", values);
    await addContact({ variables: values });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleSelect = (value) => {
    console.log(`Selected: ${value}`);
    setSelectedValue(value);
  };

  const items = [
    {
      label: "Chief Executive Officer (CEO)",
      value: "Chief Executive Officer (CEO)",
    },
    {
      label: "Chief Technology Officer (CTO) (CEO)",
      value: "Chief Technology Officer (CTO) (CEO)",
    },
    {
      label: "Chief Operating Officer (COO) (CEO)",
      value: "Chief Operating Officer (COO) (CEO)",
    },
    {
      label: "Chief Information Officer (CIO)",
      value: "Chief Information Officer (CIO)",
    },
    {
      label: "Chief Financial Officer (CFO)",
      value: "Chief Financial Officer (CFO)",
    },
    {
      label:
        "Chief Security Officer (CSO) or Chief Information Security Officer (CISO)",
      value:
        "Chief Security Officer (CSO) or Chief Information Security Officer (CISO)",
    },
    { label: "Chief Data Officer (CDO)", value: "Chief Data Officer (CDO)" },
    {
      label: "Chief Human Resources Officer (CHRO)",
      value: "Chief Human Resources Officer (CHRO)",
    },
    {
      label: "Chief Product Officer (CPO)",
      value: "Chief Product Officer (CPO)",
    },
    {
      label: "Chief Development Officer (CDO)",
      value: "Chief Development Officer (CDO)",
    },
    {
      label: "Chief Strategy Officer (CSO)",
      value: "Chief Strategy Officer (CSO)",
    },
    { label: "Others (Specify)", value: "Others (Specify)" },
  ];

  let disPlayContent = (
    <div className="contact__section--right-side">
      <div className="contact__section--right-form">
        <Form
          className="contact-form"
          name="ContactForm"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className="contact__section--right-form-inputs">
            <Form.Item
              label="First Name"
              name="firstname"
              className="contact-form-input"
              rules={[
                {
                  required: false,
                  message: "Please enter your first name!",
                },
              ]}
            >
              <Input className="contact-input" />
            </Form.Item>

            <Form.Item
              label="Last name"
              name="lastname"
              className="contact-form-input"
              rules={[
                {
                  required: false,
                  message: "Please enter your last name!",
                },
              ]}
            >
              <Input className="contact-input" />
            </Form.Item>
          </div>

          <div className="contact__section--right-form-inputs">
            <Form.Item
              label="Email"
              name="email"
              className="contact-form-input"
              rules={[
                {
                  required: false,
                  message: "Please enter your email!",
                },
              ]}
            >
              <Input className="contact-input" />
            </Form.Item>

            <Form.Item
              label={
                selectedValue === null
                  ? "Designation:"
                  : selectedValue === "Others (Specify)"
                  ? "Specify:"
                  : null
              }
              className="contact-form-input"
              name="designation"
              rules={[
                {
                  required: false,
                  message: "Please enter your designation!",
                },
              ]}
            >
              {selectedValue === "Others (Specify)" ? (
                <Input className="contact-input" value="test" />
              ) : (
                <Select onChange={handleSelect} options={items} />
              )}
            </Form.Item>
          </div>

          <div className="contact__section--right-form-inputs">
            <Form.Item
              label="Query"
              name="query"
              className="contact-form-input query"
              rules={[
                {
                  required: false,
                  message: "Please enter your query!",
                },
              ]}
            >
              <TextArea rows={4} className="contact-input" />
            </Form.Item>
          </div>

          <Form.Item className="form-button-submit">
            <Button className="contact-form-submit-btn" htmlType="submit">
              Send Message <Icon component={rightArrow} />
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );

  if (data) {
    disPlayContent = (
      <div className="contact__sucess-cont">
        <section className="contact__sucess-cont__desc-cont">
          <label>
            Your message has been sent! We’ll get back to you as soon as
            possible.
          </label>
          <ButtonComponent>
            <Link to="/">
              Go to home <RightArrow />
            </Link>
          </ButtonComponent>
        </section>
        <section className="contact__sucess-cont__icon-cont">
          <PaperFlight />;
        </section>
      </div>
    );
  }

  return (
    <Fragment>
      <section className="contact__section">
      <SocialIconsComponent />
        <div className="contact__section--left">
          <div className="contact__section--left-side">
            <h1>
              Know <span>More</span>
            </h1>
          </div>
        </div>
        <div className="contact__section--right pad-0">{disPlayContent}</div>
      </section>
    </Fragment>
  );
};

export default Contact;
