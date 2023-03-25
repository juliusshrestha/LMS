import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../../axios/axiosInstance";
import ErrorAlert from "../../utils/ErrorAlert";
import SuccessAlert from "../../utils/SuccessAlert";
import { useTranslation } from "react-i18next";
import ReCAPTCHA from "react-google-recaptcha";
import dotenv from "dotenv";
//loading env variables
dotenv.config({ path: "../../.env" });

const ContactFrom = () => {
  const { t } = useTranslation();

  const { register, handleSubmit, errors, reset } = useForm({
    mode: "onBlur",
  });
  //   const [values, setValues] = useState({
  //     name: "",
  //     email: "",
  //     subject: "",
  //     message: "",
  //   });
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const reCaptcha = useRef();
  const submitMessageRef = React.useRef();
  const [alertMessage, setAlertMessage] = useState("");
  function captchaChange(value) {
    setToken(value);
    //console.log("Captcha value:", value);
  }
  const addContact = async (data) => {
    // console.log("data", data);
    // e.preventDefault();
    if (!token) {
      setCaptchaError("You must verify the captcha.");
      return;
    }
    setCaptchaError("");

    setLoading(true);
    //   setValues(data);

    // const { name, email, subject, message } = values;
    // const value = { name, email, subject, message };

    try {
      const result = await addContactAsync(data);
      setLoading(false);
      if (result.status == 201 || result.status == 200) {
        reset();
        // alert("Your message has been submitted successfully.");
        setAlertMessage("success");
        // console.log(result);
      }
    } catch (error) {
      // console.log("error 1->", error);
      setLoading(false);
    }
    reCaptcha.current.reset();
    setToken("");

    if (submitMessageRef !== null) {
      submitMessageRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  };
  const addContactAsync = async (data) => {
    try {
      const response = await axiosInstance.post("/contact/", data);
      const body = response;
      return body;
    } catch (error) {
      // alert(error.message);
      setLoading(false);
      setAlertMessage("error");
      return error;
    }
  };

  // const handleChange = value => e => {
  //     setValues({...values, [value]: e.target.value});
  // }
  console.log(process.env.REACT_APP_RECAPTCHA_KEY);
  return (
    <div className="contact-form" data-aos="fade-up" data-aos-delay="300">
      <form onSubmit={handleSubmit(addContact)}>
        <div className="row mb-n6">
          <div ref={submitMessageRef} className="col-12 mb-6">
            {alertMessage === "success" ? (
              <SuccessAlert message={t("s10.p20")} />
            ) : null}
            {alertMessage === "error" ? (
              <ErrorAlert message={t("s10.p27")} />
            ) : null}
          </div>

          <div className="col-md-6 col-12 mb-6">
            <input
              type="text"
              placeholder={t("s10.p10")}
              name="name"
              ref={register({ required: t("s10.p15") })}
              //   onChange={handleChange("name")}
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>
          <div className="col-md-6 col-12 mb-6">
            <input
              type="email"
              placeholder={t("s10.p11")}
              name="email"
              ref={register({
                required: t("s10.p16"),
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: t("s10.p17"),
                },
              })}
              //   onChange={handleChange("email")}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div className="col-md-12 col-12 mb-6">
            <input
              type="text"
              placeholder={t("s10.p12")}
              name="subject"
              ref={register({ required: t("s10.p18") })}
              //   onChange={handleChange("subject")}
            />
            {errors.subject && <p>{errors.subject.message}</p>}
          </div>
          <div className="col-12 mb-6">
            <textarea
              name="message"
              placeholder={t("s10.p13")}
              ref={register({ required: t("s10.p14") })}
              //   onChange={handleChange("message")}
            ></textarea>
            {errors.message && <p>{errors.message.message}</p>}
          </div>

          <div className="col-12  mb-4  recaptcha-button">
            <div className="pull-left recaptcha-container">
              <ReCAPTCHA
                ref={reCaptcha}
                sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
                onChange={captchaChange}
                onExpired={() => setToken("")}
                size="normal"
                className="recaptcha"
              />
              {captchaError && <p className="text-danger">{captchaError}</p>}

              <div className="pull-left consultation-btn">
                <button
                  type="submit"
                  className="btn btn-primary btn-hover-secondary"
                  disabled={loading}
                  //   onClick={() => reset()}
                >
                  {loading ? t("s10.p19") : t("s10.p21")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactFrom;
