import "./contact.scss";
import React, { Fragment, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Form, Input, Select } from "antd";
import Icon from "@ant-design/icons";
import { useMutation } from "@apollo/client";
import { rightArrow } from "../../constants/icons";

// assets
import ContactLogo from "../../assets/Images/contact_logo.svg";
import { ReactComponent as Hambuger } from "../../assets/Icons/hambuger.svg";

// static_data
import { items } from "./static_data";
// components
import MailSucessComponent from "../../components/Sucess/mailSucess";
import Navigation from "../../components/Header/Navigation/Navigation";
//loader
import Loader from "../../components/Loader/loader";
// api
import { createContact } from "../../api";
import SocialIconsComponent from "../../components/Social/SocialIcons";

const Contact = () => {
  const [addContact, { data, loading }] = useMutation(createContact);
  const [menu, setMenu] = useState(false);
  const [form] = Form.useForm();
  const [isValueSelected, setIsValueSelected] = useState(null);

  const { TextArea } = Input;

  const onFinish = async (values) => {
    if (isValueSelected === "Others") {
      values.otherDesignation = values.designation;
      values.designation = null;
    }

    await addContact({ variables: values });
  };
  const onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
  };

  const handleSelect = (value) => {
    setIsValueSelected(value);
    if (value === "Others") {
      form.setFieldsValue({ designation: null });
    }
  };

  let disPlayContent = (
    <div className="contact__section--right-side">
      <div className="contact__section--right-form">
        <Form
          form={form}
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
                  pattern: new RegExp(/^[a-zA-Z ]+$/),
                  message: "No Numbers or Special Characters Allowed",
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
                  pattern: new RegExp(/^[a-zA-Z ]+$/),
                  message: "No Numbers or Special Characters Allowed",
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
                  message: "Please enter your email",
                },
                {
                  pattern: new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g),
                  message: "Enter a valid email address",
                },
              ]}
            >
              <Input className="contact-input" />
            </Form.Item>

            <Form.Item
              className="contact-form-input"
              name="designation"
              label={
                !isValueSelected || isValueSelected === "Others"
                  ? "Designation"
                  : null
              }
              rules={[
                {
                  required: true,
                  message: "Please enter your designation!",
                },
              ]}
            >
              {isValueSelected === "Others" ? (
                <Input className="contact-input" />
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
    disPlayContent = <MailSucessComponent />;
  }

  if (loading) {
    disPlayContent = <Loader />;
  }
  return (
    <Fragment>
      <section className="contact__section">
        <section className="mobile-header-contact">
          <div>
            <Link to="/">
              <img
                className="contact__white_logo"
                src={`${ContactLogo}`}
                alt=""
              />
            </Link>
          </div>
          <Hambuger onClick={() => setMenu(!menu)} />
          {menu ? <Navigation setMenu={setMenu} /> : null}
        </section>
        <SocialIconsComponent />
        <div className="contact__section--left">
          <div className="contact">
            <div className={`contact_left contact`}></div>
            <div>
              <Link to="/">
                <img
                  className="contact__white_logo"
                  src={`${ContactLogo}`}
                  alt=""
                />
              </Link>
            </div>
          </div>
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
