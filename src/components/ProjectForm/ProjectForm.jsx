import React, { Fragment, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../../axios/axiosInstance";
import ErrorAlert from "../../utils/ErrorAlert";
import SuccessAlert from "../../utils/SuccessAlert";
import { useTranslation } from "react-i18next";
import ReCAPTCHA from "react-google-recaptcha";

const ProjectForm = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, errors, reset } = useForm({
    mode: "onBlur",
  });
  // const [values, setValues] = useState({
  // 	name: '',
  // 	email: '',
  // 	message: '',
  // 	subject: '',
  // })
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const [token, setToken] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const reCaptcha = useRef();
  const submitMessageRef = React.useRef();

  function captchaChange(value) {
    setToken(value);
    //console.log("Captcha value:", value);
  }

  const addProjectForm = async (data) => {
    // e.preventDefault()
    if (!token) {
      setCaptchaError("You must verify the captcha.");
      return;
    }
    setCaptchaError("");
    setLoading(true);

    // const { name, email, subject, message } = values
    // const data = { name, email, subject, message }

    // console.log(data);
    try {
      const result = await addProjectFormAsync(data);
      setLoading(false);
      if (result.status == 201 || result.status == 200) {
        reset();
        // alert('Your message has been submitted successfully.')
        setAlertMessage("success");
        // console.log(result);
        reCaptcha.current.reset();
        setToken("");
      }
    } catch (error) {
      console.log("error 1->", error);

      // setAlertMessage("error");
    }

    if (submitMessageRef !== null) {
      submitMessageRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  };
  const addProjectFormAsync = async (data) => {
    try {
      const response = await axiosInstance.post("/contact/", data);
      const body = response;
      return body;
    } catch (error) {
      // alert(error.message)
      setLoading(false);
      setAlertMessage("error");
      return error;
    }
  };

  // const handleChange = (value) => (e) => {
  // 	setValues({ ...values, [value]: e.target.value })
  // }

  return (
    <Fragment>
      <form onSubmit={handleSubmit(addProjectForm)}>
        <div className="row mb-n4">
          <div ref={submitMessageRef} className="col-md-12 col-12 mb-4">
            {alertMessage === "success" ? (
              <SuccessAlert message={t("s10.p20")} />
            ) : null}
            {alertMessage === "error" ? (
              <ErrorAlert message={t("s10.p27")} />
            ) : null}
            <input
              type="text"
              placeholder={t("s10.p10")}
              name="name"
              ref={register({
                required: t("s10.p15"),
              })}
              // onChange={handleChange('name')}
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>

          <div className="col-md-12 col-12 mb-4">
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
              // onChange={handleChange('email')}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div className="col-md-12 col-12 mb-4">
            <input
              type="text"
              placeholder={t("s10.p12")}
              name="subject"
              ref={register({ required: t("s10.p18") })}
              // onChange={handleChange('subject')}
            />
            {errors.subject && <p>{errors.subject.message}</p>}
          </div>
          <div className="col-12 mb-6">
            <textarea
              name="message"
              placeholder={t("s10.p13")}
              ref={register({ required: t("s10.p14") })}
              // onChange={handleChange('message')}
            ></textarea>
            {errors.message && <p>{errors.message.message}</p>}
          </div>
          <div className="col-12  mb-4  recaptcha-button">
            {/* <button className='btn btn-primary btn-hover-secondary'>
							Get a free consultation
						</button> */}
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
            </div>

            <div className=" pull-left consultation-btn">
              <button
                type="submit"
                className="btn btn-primary btn-hover-secondary"
                disabled={loading}
              >
                {loading ? t("s10.p19") : t("s10.btn1")}
              </button>
            </div>
          </div>
        </div>
      </form>
      <p className="form-messege"></p>
    </Fragment>
  );
};

export default ProjectForm;
