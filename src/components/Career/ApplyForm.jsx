import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
// import Button from "@material-ui/core/Button";
// import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import axiosInstance from "../../axios/axiosInstance";
import ErrorAlert from "../../utils/ErrorAlert";
import SuccessAlert from "../../utils/SuccessAlert";
import { useTranslation } from "react-i18next";
import ReCAPTCHA from "react-google-recaptcha";

const ApplyForm = () => {
  const { t } = useTranslation();
  const {
    register,
    errors,
    handleSubmit,
    reset,
    clearErrors,
    setError,
    setValue,
  } = useForm({
    mode: "onBlur",
  });

  // const [values, setValues] = useState({
  //   name: "",
  //   address: "",
  //   phonenumber: 0,
  //   email: "",
  //   message: "",
  // });
  // const [cv, setCv] = useState(null);
  const [cvName, setCvName] = useState(t("career.p9"));
  const cvInputRef = React.useRef();
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

  const addCareerForm = async (data) => {
    // e.preventDefault();
    if (!token) {
      setCaptchaError("You must verify the captcha.");
      return;
    }
    setCaptchaError("");
    setLoading(true);
    // const { name, address, phonenumber, email, message } = values;
    // const data = { name, address, phonenumber, cv: cv, email, message };
    // const cv = data.cv[0];
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("address", data.address);
    formData.append("phonenumber", data.phonenumber);
    formData.append("cv", data.cv[0]);
    formData.append("email", data.email);
    formData.append("message", data.message);
    // console.log("data career", data);
    // console.log("TYPE OF DATA", typeof data.phonenumber);
    try {
      const result = await addCareerFormAsync(formData);
      setLoading(false);
      if (result.status == 201 || result.status == 200) {
        reset();
        // cvInputRef.current.cvName = "";
        setCvName(t("career.p9"));
        // alert("Your message has been submitted successfully.");
        setAlertMessage("success");
        // console.log(result);
        reCaptcha.current.reset();
        setToken("");
      }
    } catch (error) {
      // console.log("error 1->", error);
      setLoading(false);
    }

    if (submitMessageRef !== null) {
      submitMessageRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  };
  const addCareerFormAsync = async (formData) => {
    try {
      const response = await axiosInstance.post("/career/", formData);
      const body = response;
      return body;
    } catch (error) {
      setAlertMessage("error");
      // alert(error.message);
      return error;
    }
  };
  // const handleChange = (value) => (e) => {
  //   setValues({ ...values, [value]: e.target.value });
  // };

  const handleChangeCv = (e) => {
    // setCv(e.target.files[0]);
    // console.log(e.target.files[0]);
    setCvName(e.target.files[0].name);
    if (
      e.target.files[0].type !== "application/pdf" &&
      e.target.files[0].type !==
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document" &&
      e.target.files[0].type !== "application/msword"
    ) {
      setError("cv", {
        type: "manual",
        message: t("career.p10"),
      });
      setValue("cv", null);
      setCvName(t("career.p9"));
    } else if (e.target.files[0].size > 1000000) {
      setError("cv", {
        type: "size",
        message: t("career.p11"),
      });
      setValue("cv", null);
    }
  };
  // const myStyle = {
  //   margin: "10px 15px",
  //   padding: "10px 20px",
  //   background: "#0275d8",
  //   color: "white",
  //   "&:hover": {
  //     background: "#33b5e5",
  //   },
  // };
  // const buttonStyle = {
  //   marginRight: "5px",
  // };

  return (
    <div className="container">
      <div className="contact-form" data-aos="fade-up" data-aos-delay="300">
        <form onSubmit={handleSubmit(addCareerForm)}>
          <div className="row">
            <div ref={submitMessageRef} className="col-md-12 col-12 mb-4">
              {alertMessage === "success" ? (
                <SuccessAlert message={t("s10.p28")} />
              ) : null}
              {alertMessage === "error" ? (
                <ErrorAlert message={t("s10.p27")} />
              ) : null}
              <input
                type="text"
                placeholder={t("s10.p10")}
                name="name"
                ref={register({ required: t("s10.p15") })}
                // onChange={handleChange("name")}
              />
              {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div className="col-md-12 col-12 mb-4">
              <input
                type="text"
                placeholder={t("s10.p24")}
                name="address"
                ref={register({ required: t("s10.p25") })}
                // onChange={handleChange("address")}
              />
              {errors.address && <p>{errors.address.message}</p>}
            </div>
            <div className="col-md-12 col-12 mb-4">
              <input
                type="text"
                placeholder={t("s10.p23")}
                name="phonenumber"
                ref={register({ required: t("s10.p22") })}
                // onChange={handleChange("phonenumber")}
              />
              {errors.phonenumber && <p>{errors.phonenumber.message}</p>}
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
                // onChange={handleChange("email")}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div className="col-md-12 col-12 mb-4">
              {/* <label>Choose a File</label>
              <input
                style={{ display: "none" }}
                id="upload-file"
                name="cv"
                accept="application/pdf, .docx"
                ref={register({
                  required: "Please choose a file.",
                  pattern: {
                    accept: "application/pdf, .docx",
                    message: "Only upload pdf/docx file",
                  },
                })}
                type="file"
                // onChange={handleChangeCv}
              />
              <label htmlFor="upload-file">
                <Button
                  className="btn btn-primary btn-hover-secondary"
                  color="primary"
                  variant="contained"
                  component="span"
                  style={myStyle}
                >
                  <CloudUploadIcon style={buttonStyle} /> Upload File
                </Button>
              </label> */}
              <label
                className="custom-file-upload"
                // onChange={handleChangeCv}
                ref={cvInputRef}
              >
                <input
                  type="file"
                  className="custom-file-input"
                  name="cv"
                  id="inputGroupFile02"
                  // accept="application/pdf, .docx"
                  // ref={register({
                  //   required: "Please choose a file.",
                  //   pattern: {
                  //     accept: "application/pdf, .docx",
                  //     message: "Only upload pdf/docx file",
                  //   },
                  // })}
                  onClick={() => {
                    clearErrors(["cv"]);
                  }}
                  ref={register({ required: true })}
                  style={{ display: "none" }}
                  onChange={handleChangeCv}
                />
                <i className="fa fa-upload"></i>
                <span className="custom-file-name">{cvName}</span>
              </label>

              {errors.cv && errors.cv.type === "required" && (
                <p>Please choose a file.</p>
              )}
              {errors.cv && errors.cv.type === "manual" && (
                <p>{errors.cv.message}</p>
              )}
              {errors.cv && errors.cv.type === "size" && (
                <p>{errors.cv.message}</p>
              )}
            </div>

            <div className="col-12 mb-6">
              <textarea
                name="message"
                placeholder={t("s10.p14")}
                ref={register({ required: t("s10.p14") })}
                // onChange={handleChange("message")}
              ></textarea>
              {errors.message && <p>{errors.message.message}</p>}
            </div>
            <div className="col-12  mb-4  recaptcha-button">
              <div className=" pull-left recaptcha-container">
                <ReCAPTCHA
                  ref={reCaptcha}
                  sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
                  onChange={captchaChange}
                  onExpired={() => setToken("")}
                  size="normal"
                  className="recaptcha"
                />
                {captchaError && <p className="text-danger">{captchaError}</p>}
                <div className=" pull-left consultation-btn">
                  <button
                    type="submit"
                    ref={cvInputRef}
                    className="btn btn-primary btn-hover-secondary"
                    disabled={loading}
                    // onClick={() => reset()}
                  >
                    {loading ? t("s10.p19") : t("s10.p26")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;
