import "./contact.scss";
import React, { Fragment } from "react";
import { Button, Dropdown, Form, Input, Space } from 'antd';
import Icon from '@ant-design/icons';
import { dropdownIcon, rightArrow } from "../../constants/icons";

const Contact = () => {
    const { TextArea } = Input;

    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const items = [
        {
          label: <a href="https://www.antgroup.com">1st menu item</a>,
          key: '0',
        },
        {
          label: <a href="https://www.aliyun.com">2nd menu item</a>,
          key: '1',
        },
        {
          label: <a href="https://www.antgroup.com">3rd menu item</a>,
          key: '3',
        },
        {
          label: <a href="https://www.aliyun.com">4th menu item</a>,
          key: '4',
        },
      ];
    
	return (
		<Fragment>
			<section className="contact__section">
                <div className="contact__section--left">
                    <div className="contact__section--left-side">
                        <h1>
                            Know <span>More</span>
                        </h1>
                    </div>
				</div>
                <div className="contact__section--right">
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
                                        className="contact-form-input"
                                        rules={[
                                            {
                                                required: false,
                                                message: "Please enter your email!",
                                            },
                                        ]}
                                    >
                                        <Dropdown
                                            menu={{
                                            items,
                                            }}
                                            className="contact-input"
                                            placement="bottom"
                                            trigger={['click']}
                                        >
                                            <a onClick={(e) => e.preventDefault()}>
                                            <Space className="domain-click">
                                                Click me
                                                <Icon component={dropdownIcon} />
                                            </Space>
                                            </a>
                                        </Dropdown>
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
				</div>
				{/* <h1>Contact</h1> */}
			</section>
		</Fragment>
	);
};

export default Contact;
