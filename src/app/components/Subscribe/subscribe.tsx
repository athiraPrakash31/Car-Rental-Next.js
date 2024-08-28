"use client"
import styles from "./subscribe.module.css";
import Image from "next/image";
import GoogleStore from "../../../../public/Images/goole-play-white.svg";
import AppStore from "../../../../public/Images/Layer_1.svg";
import Mobile2 from "../../../../public/Images/Mobile2.svg";
import Mobile from "../../../../public/Images/Mobile.svg";
import { useState, ChangeEvent } from "react";

export const Subscribe = () => {
  // Type definitions for form data and errors
  type FormData = {
    name: string;
    email: string;
  };

  type Errors = {
    name?: string;
    email?: string;
    phone?: string;
  };

  // State for form data
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
  });

  // State for phone number
  const [phone, setPhone] = useState<string>("");

  // State for errors
  const [errors, setErrors] = useState<Errors>({});

  // Handle input changes for name and email
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  // Handle phone number input change
  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    setErrors({
      ...errors,
      phone: "",
    });
  };

  // Validate name and email
  const validateForm = () => {
    const newErrors: Errors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = "Name must contain only letters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Validate phone number
  const validatePhoneNumber = () => {
    if (!/^\d{10}$/.test(phone)) {
      setErrors({
        ...errors,
        phone: "Phone number must be exactly 10 digits",
      });
      return false;
    }
    return true;
  };

  // Handle form submission for subscribing
  const handleSubscribe = () => {
    if (validateForm()) {
      alert("Subscribed successfully!");
      setFormData({
        name: "",
        email: "",
      });
    }
  };

  // Handle phone number submission
  const handleGetLink = () => {
    if (validatePhoneNumber()) {
      alert("Link sent!");
      setPhone("");
    }
  };

  return (
    <div className={styles.subscription}>
      <div className={styles.col}>
        <h3>Subscribe here for exclusive offers and updates!</h3>
        <div className={styles.inputBox}>
            <div className={styles.inputWrapper}>

          <input
            className={styles.inputField}
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className={styles.error}>{errors.name}</div>}
            </div>
            <div className={styles.inputWrapper}>

          <input
            className={styles.inputField}
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className={styles.error}>{errors.email}</div>}
            </div>
        </div>
        <p>
          Don&apos;t miss out! Enter your email and your name, then hit
          subscribe to unlock a world of special offers and details.
        </p>
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>
      <div className={styles.col}>
        <div className={styles.redBack}>
          <Image src={Mobile} alt="mobile" width={231} height={417} />
          <div className={styles.contents}>
            <p>
              Enter your number and receive a direct link to download the app
            </p>
            <input
              type="text"
              className={styles.enterNumber}
              placeholder="Enter Phone Number"
              value={phone}
              onChange={handlePhoneChange}
            />
            {errors.phone && (
              <div className={styles.errorphone}>{errors.phone}</div>
            )}
            <button onClick={handleGetLink}>Get the link</button>
            <p>Get in on</p>
            <div className={styles.socialMedia}>
              <Image src={AppStore} alt="app-store" width={24} height={24} />
              <Image src={GoogleStore} alt="google-app" width={24} height={24} />
            </div>
          </div>
        </div>
        <div className={styles.redBackMob}>
          <div className={styles.redBackRow}>
            <Image src={Mobile2} alt="mobile" width={136} height={245} />
            <div className={styles.socialMedia}>
              <p>Get in on</p>
              <Image src={AppStore} alt="app-store" width={100} height={30} />
              <Image src={GoogleStore} alt="google-app" width={100} height={30} />
              <p>
                Enter your number and receive a direct link to download the app
              </p>
            </div>
          </div>
          <div className={styles.redBackRow2}>
            <div className={styles.input}>
              <input
                type="text"
                className={styles.enterNumber}
                placeholder="Enter Phone Number"
                value={phone}
                onChange={handlePhoneChange}
              />
              {errors.phone && (
                <div className={styles.errorphone}>{errors.phone}</div>
              )}
            </div>
            <button onClick={handleGetLink}>Get the Link</button>
          </div>
        </div>
      </div>
    </div>
  );
};



