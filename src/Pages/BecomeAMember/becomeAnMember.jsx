import React, { useState } from "react";
import "./becomeAnMember.scss";
import { Button, Form, Input, Select } from "antd";
import Icon from "@ant-design/icons";
import { rightArrow } from "../../constants/icons";
import { useMutation } from "@apollo/client";
import SocialIcons from "../../components/Social/SocialIcons";
import PhoneInput from 'react-phone-number-input';
import { isValidPhoneNumber } from 'libphonenumber-js';
// static_data
import { items, industry, employeeCount } from "../Contact/static_data";
// api
import { joinMember } from "../../api";
// components
import MailSucessComponent from "../../components/Sucess/mailSucess";
//loader
import Loader from "../../components/Loader/loader";
import { Country, State, City } from "country-state-city";

const BecomeAnMember = () => {
  const [addMember, { data, loading }] = useMutation(joinMember);
  const [isValueSelected, setIsValueSelected] = useState(null);
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const [isSelectedIndustry, setIsSelectedIndustry] = useState(null);
  const [file, setFile] = useState('');
  const [phone, setPhone] = useState('');
  const [base64, setBase64] = useState(null);
  const [ isSelectedEmployeeCount, setIsSelectedEmployeeCount ] = useState(null);
  const [ states, setStates ] = useState([]);
  const [ cities, setCities ] = useState([]);
  const { Option } = Select;
  const [ selectedCSC, setSelectedCSC ] = useState({ country: '', state: '', city: '' });

  const onFinish = async (values) => {
    
    if (base64) {
      values.companyLogo = base64;
    }

    values.address = `${values.address1} ${values.address2}, ${values.city}, ${values.state}, ${values.country}, ${values.pincode}`;

    await addMember({ variables: values });
  };

  const handleSelect = value => {
    setIsValueSelected(value);
  };

  const handleSelectIndustry = value => {
    setIsSelectedIndustry(value);
  };

  const handleSelectemployeeCount = value => {
    setIsSelectedEmployeeCount(value);
  }

  const handleFileChange = (event) => {
    const selectedFile = event.target.files?.[0] || null;
    setFile(selectedFile);
  
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setBase64(reader.result);
      };
      reader.onerror = (error) => {
        console.error("File could not be read:", error); 
      };
      reader.readAsDataURL(selectedFile); 
    } else {
      setBase64(null);
    }
  };
  
  const validateFile = (file) => {
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
    return allowedTypes.includes(file.type);

  };

  const handleCountryChange = (value, option) => {
    const countryCode = option.key;
    setSelectedCSC({ ...selectedCSC, country: countryCode, state: '', city: '' });

    const countryStates = State.getStatesOfCountry(countryCode).map((state) => ({ label: state.name, value: state.name, key: state.isoCode }));
    setStates(countryStates);
    form.setFieldsValue({ state: undefined, city: undefined });
  };

  const handleStateChange = (value, option) => {
    const stateCode = option.key;
    const countryCode = selectedCSC?.country;
    
    setSelectedCSC({ ...selectedCSC, state: stateCode, city: '' });

    const stateCities = City.getCitiesOfState(countryCode, stateCode).map((city) => ({ label: city.name, value: city.name }));
    setCities(stateCities);
    form.setFieldsValue({ city: undefined });
  }

  const handleCityChange = city => {
    setSelectedCSC({ ...selectedCSC, city: city });
  }

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
              form={form}
              className="become__a__member__section__block-contact-form"
              name="become__a__member"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              < div className="contact__section--right-form-inputs become__a__member">

                <Form.Item
                  labelClassName="custom-label-class"
                  label="First Name"
                  name="firstName"
                  className="contact-form-input"
                  rules={[
                    {
                      required: true,
                      message: "Enter your First name!",
                    },
                    {
                      pattern: new RegExp(/^[a-zA-Z ]+$/),
                      message: "No Numbers or Special Characters Allowed",
                    },
                    {
                      pattern: new RegExp(/^[\s\S]{1,50}$/),
                      message: "Maximum 50 characters allowed!",
                    }
                  ]}
                >
                  <Input className="contact-input" autoComplete="none" />
                </Form.Item>
                <Form.Item
                  labelClassName="custom-label-class"
                  label="Last Name"
                  name="lastName"
                  className="contact-form-input"
                  rules={[
                    {
                      required: true,
                      message: "Enter your Last name!",
                    },
                    {
                      pattern: new RegExp(/^[a-zA-Z ]+$/),
                      message: "No Numbers or Special Characters Allowed",
                    },
                    {
                      pattern: new RegExp(/^[\s\S]{1,50}$/),
                      message: "Maximum 50 characters allowed!",
                    }
                  ]}
                >
                  <Input className="contact-input" autoComplete="none" />
                </Form.Item>
              </div>
              <div className="contact__section--right-form-inputs become__a__member">
                <Form.Item
                  // labelClassName="custom-label-class"
                  name="phone"
                  // label="Phone Number"
                  className="contact-form-input"
                  rules={[
                    { required: true, message: 'Enter your phone number!' },
                    () => ({
                      validator(_, value) {
                        if (value && !isValidPhoneNumber(value)) {
                          return Promise.reject('Enter a valid phone number');
                        }
                        return Promise.resolve();
                      },
                    }),
                  ]}
                >
                  <PhoneInput
                    international
                    defaultCountry="US"
                    value={phone}
                    onChange={value => setPhone(value)}
                    placeholder="Enter phone number"
                    className="contact-input"
                    style={{ fontFamily: 'Manrope'}}
                  />
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="email"
                  className="contact-form-input"
                  rules={[
                    {
                      required: true,
                      message: "Enter your email",
                    },
                    {
                      pattern: new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g),
                      message: "Enter a valid email address",
                    },
                  ]}
                >
                  <Input className="contact-input" autoComplete="none" />
                </Form.Item>
              </div>
              <div className="contact__section--right-form-inputs become__a__member">
                <Form.Item
                  label="Address 1"
                  name="address1"
                  className="contact-form-input query"
                  rules={[
                    {
                      required: true,
                      message: "Enter your Address",
                    },
                    {
                      pattern: new RegExp(/^[\s\S]{1,250}$/),
                      message: "Maximum 250 characters allowed!",
                    }
                  ]}
                >
                  <TextArea rows={1} className="contact-input" autoComplete="none" />
                </Form.Item>
              </div>
              <div className="contact__section--right-form-inputs become__a__member">
                <Form.Item
                  label="Address 2"
                  name="address2"
                  className="contact-form-input query"
                  rules={[
                    {
                      required: false,
                      message: "Enter your Address",
                    },
                    {
                      pattern: new RegExp(/^[\s\S]{1,250}$/),
                      message: "Maximum 250 characters allowed!",
                    }
                  ]}
                >
                  <TextArea rows={1} className="contact-input" autoComplete="none" />
                </Form.Item>
              </div>
              <div className="contact__section--right-form-inputs become__a__member">
              <Form.Item
                  label={
                    !selectedCSC.country
                      ? "Country"
                      : null
                  }
                  name="country"
                  rules={[{ required: true, message: "Select your country!" }]}
                  className="contact-form-input"
                >
                  <Select
                    showSearch
                    onChange={handleCountryChange}
                    autoComplete="none"
                  >
                    {Country.getAllCountries().map((country) => (
                      <Option key={country.isoCode} value={country.name}>
                        {country.name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item
                  label={
                    !selectedCSC.state
                      ? "State"
                      : null
                  }
                  name="state"
                  rules={[{ required: true, message: "Select your state!" }]}
                  className="contact-form-input"
                >
                  <Select options={states} showSearch onChange={handleStateChange} autoComplete="none" />
                </Form.Item>
              </div>
              <div className="contact__section--right-form-inputs become__a__member">
                <Form.Item
                    label={
                      !selectedCSC.city
                        ? "City"
                        : null
                    }
                    name="city"
                    rules={[{ required: true, message: "Select your city!" }]}
                    className="contact-form-input"
                  >
                    <Select options={cities} showSearch autoComplete="none" onChange={handleCityChange} />
                </Form.Item>
                <Form.Item
                  label="PIN Code"
                  name="pincode"
                  className="contact-form-input"
                  rules={[
                    { required: true, message: "Enter your PIN code!" },
                    {
                      pattern: /^[0-9]{4,6}$/,
                      message: "Enter a valid PIN code (4-6 digits)!",
                    },
                  ]}

                >
                  <Input
                    type="text"
                    maxLength={6}
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    }}
                    className="contact-input"
                    autoComplete="none"
                  />
                </Form.Item>
              </div>
              <div className="contact__section--right-form-inputs become__a__member">
                <Form.Item
                  label="Company Name"
                  name="company"
                  className="contact-form-input"
                  rules={[
                    {
                      required: true,
                      message: "Enter your Company Name!",
                    },
                    {
                      pattern: new RegExp(/^[\s\S]{1,100}$/),
                      message: "Maximum 100 characters allowed!",
                    }
                  ]}
                >
                  <Input className="contact-input" autoComplete="none" />
                </Form.Item>
                <Form.Item
                  labelClassName="custom-label-class"
                  label="Company Logo"
                  name="companyLogo"
                  className="contact-form-input"
                  rules={[
                    {
                      required: false,
                      message: "Enter your Company Logo!",
                    },
                    {
                      // Custom validator for the file input to check its type
                      validator: async (_, value) => {
                        if (file) {
                          if (!validateFile(file)) {
                            return Promise.reject(new Error("Invalid file type. Only .png, .jpg, and .jpeg are allowed."));
                          }
                        }
                        return Promise.resolve(); // Everything is fine, no error
                      },
                    },
                  ]}
                >
                  <Input
                    className="contact-input choose-button"
                    type="file"
                    onChange={handleFileChange}
                    accept=".png, .jpg, .jpeg"
                  />
                </Form.Item>
              </div>
              <div className="contact__section--right-form-inputs become__a__member">
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
                      message: "Enter your designation!",
                    },
                  ]}
                >
                  {isValueSelected === "Others" ? (
                    <Input className="contact-input" autoComplete="none" />
                  ) : (
                    <Select onChange={handleSelect} options={items} />
                  )}
                </Form.Item>
                <Form.Item
                  label="Sub-Designation"
                  name="subDesignation"
                  className="contact-form-input"
                  rules={[
                    {
                      required: true,
                      message: "Enter your Sub-Designation!",
                    },
                  ]}
                >
                  <Input className="contact-input" />
                </Form.Item>
              </div>
              <div className="contact__section--right-form-inputs become__a__member">
                <Form.Item
                  className="contact-form-input"
                  name="industry"
                  label={
                    !isSelectedIndustry || isSelectedIndustry === "Others"
                      ? "Industry"
                      : null
                  }
                  rules={[
                    {
                      required: true,
                      message: "Enter your Industry!",
                    },
                  ]}
                >
                  {isSelectedIndustry === "Others" ? (
                    <Input className="contact-input" autoComplete="none" />
                  ) : (
                    <Select onChange={handleSelectIndustry} options={industry} autoComplete="none" />
                  )}
                </Form.Item>
                <Form.Item
                  label="Sub-Category"
                  name="subCategory"
                  className="contact-form-input"
                  rules={[
                    {
                      required: true,
                      message: "Enter your Sub-Category!",
                    },
                    {
                      pattern: new RegExp(/^[\s\S]{1,100}$/),
                      message: "Maximum 100 characters allowed!",
                    }
                  ]}
                >
                  <Input className="contact-input" autoComplete="none" />
                </Form.Item>
              </div>
              <div className="contact__section--right-form-inputs become__a__member">
                <Form.Item
                  labelClassName="custom-label-class"
                  label="Website/Domain"
                  name="website"
                  className="contact-form-input"
                  rules={[
                    {
                      type: "url",
                      message: "Enter a valid URL!",
                    },
                    {
                      required: false,
                      message: "URL is required!",
                    },
                  ]}
                >
                  <Input className="contact-input" type="url" autoComplete="none" />
                </Form.Item>
                <Form.Item
                  labelClassName="custom-label-class"
                  label="GST Number"
                  name="gstNumber"
                  className="contact-form-input"
                  rules={[
                    {
                      required: false,
                      message: "Enter a valid GST Number!",
                    },
                    {
                      pattern: new RegExp(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/i),
                      message: "Enter a valid GST Number!",
                    },
                  ]}
                >
                  <Input className="contact-input" type="text" autoComplete="none" />
                </Form.Item>
              </div>
              <div className="contact__section--right-form-inputs become__a__member">
                <Form.Item
                  labelClassName="custom-label-class"
                  className="contact-form-input"
                  name="employeeCount"
                  label={
                    !isSelectedEmployeeCount || isSelectedEmployeeCount === "Others"
                      ? "Employee Count"
                      : null
                  }
                >
                  {isSelectedEmployeeCount === "Others" ? (
                    <Input className="contact-input" autoComplete="none"  />
                  ) : (
                    <Select onChange={handleSelectemployeeCount} options={employeeCount} autoComplete="none" />
                  )}
                </Form.Item>
                <Form.Item
                  label="Remarks"
                  name="remarks"
                  className="contact-form-input"
                  rules={[
                    {
                      required: false,
                      message: "Enter your Remarks",
                    },
                    {
                      pattern: new RegExp(/^[\s\S]{1,500}$/),
                      message: "Maximum 250 characters allowed!",
                    }
                  ]}
                >
                  <TextArea rows={1} className="contact-input" autoComplete="none" />
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

  if (loading) {
    displayCont = <Loader />;
  }
  return (
    <section className="become__a__member__section scrollview">
      <SocialIcons />
      {displayCont}
    </section>
  );
};

export default BecomeAnMember;