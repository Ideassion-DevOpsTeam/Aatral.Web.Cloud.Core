import "./contact.scss";
import React, { Fragment, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Form, Input, Select } from "antd";
import Icon from "@ant-design/icons";
import { useMutation } from "@apollo/client";
import { rightArrow } from "../../constants/icons";
// assets
import { ReactComponent as PaperFlight } from "../../assets/Icons/Contact/papaer_flight.svg";
import { ReactComponent as RightArrow } from "../../assets/Icons/Contact/right_yellow.svg";
// static_data
import { items } from "./static_data";
// components
import ButtonComponent from "../../components/UI/Button";
import MailSucessComponent from "../../components/Sucess/mailSucess";
// api
import { createContact } from "../../api";
import SocialIconsComponent from "../../components/Social/SocialIcons";

const Contact = () => {
  const [addContact, { data }] = useMutation(createContact);
  const [isValueSelected, setIsValueSelected] = useState(false);

  const { TextArea } = Input;

  const onFinish = async (values) => {
    if (values.designation === "Others_Specify") {
      values.otherDesignation = values.query;
    }
    await addContact({ variables: values });
  };
  const onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
  };

  const handleSelect = (value) => {
    setIsValueSelected(true);
  };

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
                  required: true,
                  message: "Please enter your first name!",
                },
                {
                  pattern: new RegExp(/^[a-zA-Z]+$/),
                  message: "No Numbers or Special Characters Allowed"
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
                  required: true,
                  message: "Please enter your last name!",
                },
                {
                  pattern: new RegExp(/^[a-zA-Z]+$/),
                  message: "No Numbers or Special Characters Allowed"
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
                  required: true,
                  message: "Please enter your email!",
                },
              ]}
            >
              <Input className="contact-input" />
            </Form.Item>

            <Form.Item
              className="contact-form-input"
              name="designation"
              label={!isValueSelected ? "Designation" : null}
              rules={[
                {
                  required: true,
                  message: "Please enter your designation!",
                },
              ]}
            >
              <Select onChange={handleSelect} options={items} />
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
    disPlayContent = <MailSucessComponent />;
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
