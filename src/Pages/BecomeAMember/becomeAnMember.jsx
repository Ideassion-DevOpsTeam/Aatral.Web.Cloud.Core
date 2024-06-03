import React, { Fragment, useState } from "react";
import "./becomeAnMember.scss";
import { Button, Form, Input, Select } from "antd";
import Icon from "@ant-design/icons";
import { rightArrow } from "../../constants/icons";
import { useMutation } from "@apollo/client";
import SocialIcons from "../../components/Social/SocialIcons";

// static_data
import { items } from "../Contact/static_data";
// api
import { joinMember } from "../../api";
// components
import MailSucessComponent from "../../components/Sucess/mailSucess";

const BecomeAnMember = () => {
  const [addMember, { data }] = useMutation(joinMember);
  const [isValueSelected, setIsValueSelected] = useState(false);
  const onFinish = async (values) => {
    // console.log("values-become", values);
    if (values.designation === "Others_Specify") {
      values.otherDesignation = values.query;
    }
    await addMember({ variables: values });
  };

  const handleSelect = (value) => {
    setIsValueSelected(true);
  };

  let displayCont = data ? (
    <MailSucessComponent />
  ) : (
    <div className="become__a__member__section__block">
      <div className="become__a__member__section__block--top">
        <p className="become__a__member__section__block--top-member-tier">
          <span className="color-black"> Join now to </span>
          <span className="color-yellow">spark connections!</span>
        </p>
      </div>
      <div className="become__a__member__section__block--bottom">
        <div className="contact__section--right-form become__a__member--form">
          <Form
            className="become__a__member__section__block-contact-form"
            name="become__a__member"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <div className="contact__section--right-form-inputs become__a__member">
              <Form.Item
                labelClassName="custom-label-class"
                label="Full Name"
                name="name"
                className="contact-form-input"
                rules={[
                  {
                    required: true,
                    message: "Please enter your Full name!",
                  },
                ]}
              >
                <Input className="contact-input" />
              </Form.Item>

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
            </div>

            <div className="contact__section--right-form-inputs become__a__member">
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

              <Form.Item
                label="Company Name"
                name="company"
                className="contact-form-input"
                rules={[
                  {
                    required: false,
                    message: "Please enter your Company Name!",
                  },
                ]}
              >
                <Input className="contact-input" />
              </Form.Item>
            </div>

            <Form.Item className="form-button-submit">
              <Button
                className="contact-form-submit-btn become__a__member"
                htmlType="submit"
              >
                Send Message <Icon component={rightArrow} />
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
  return (
    <section className="become__a__member__section">
      <SocialIcons />
      {displayCont}
    </section>
  );
};

export default BecomeAnMember;
