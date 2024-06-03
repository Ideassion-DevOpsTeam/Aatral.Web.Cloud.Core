import React from "react";
import "./becomeAnMember.scss";
import { Button, Form, Input } from "antd";
import Icon from "@ant-design/icons";
import { rightArrow } from "../../constants/icons";
import SocialIcons from "../../components/Social/SocialIcons";

const BecomeAnMember = () => {
  return (
    <section className="become__a__member__section">
      <SocialIcons />
      <div className="become__a__member__section__block">
        <div className="become__a__member__section__block--top">
          {/* <p className="become__a__member__section__block--top-coming-soon">
            Coming soon!
          </p> */}
          <p className="become__a__member__section__block--top-member-tier">
          Join now to spark connections!
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
              // onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <div className="contact__section--right-form-inputs become__a__member">
                <Form.Item
                  labelClassName="custom-label-class"
                  label="Full Name"
                  name="fullname"
                  className="contact-form-input"
                  rules={[
                    {
                      required: false,
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
                  label="Designation"
                  name="designation"
                  className="contact-form-input"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your Designation!",
                    },
                  ]}
                >
                  <Input className="contact-input" />
                </Form.Item>

                <Form.Item
                  label="Company Name"
                  name="companyname"
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
    </section>
  );
};

export default BecomeAnMember;
