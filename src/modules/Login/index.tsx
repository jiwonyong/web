import React from "react";
import Input from "@/components/Input";
import Layout from "@/components/Layout";
import "./index.scss";
import Checkbox from "@/components/Checkbox";
import Button from "@/components/Button";
import { useFormik } from "formik";

const validate = (values: any) => {
  const errors: { [key: string]: string } = {};
  if (!values.email) {
    errors.email = "이메일을 입력해주세요";
  }
};

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate,
  });
  return (
    <Layout id="Login">
      <div className="Login">
        <h2 className="h2-b Login-title">Sign in</h2>
        <p className="h4 Login-title-sub">or create an account</p>
        <div className="Login-content">
          <Input
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <Input
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <Checkbox label="remeber me" />
          <Button theme="primary">Sign Up</Button>
        </div>
      </div>
    </Layout>
  );
}
