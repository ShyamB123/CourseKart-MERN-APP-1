import React from "react";
import Layout from "./../components/Layout/Layout";
// import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title="Contact Us">
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
          We value your feedback and are here to assist you with any inquiries or concerns you may have. Please feel free to reach out to us using the contact information provided below. Our dedicated team of customer support representatives is ready to assist you.

          </p>
          <p className="mt-3">
          Email: shyam@gmail.com
          </p>
          <p className="mt-3">
          Phone: +91 12345 67890

          </p>
          <p className="mt-3">
          If you have any specific questions regarding a course or need technical assistance with our website, please visit our FAQ page or submit a support ticket through our online help center. Our team will respond to your inquiries as soon as possible.
          We appreciate your interest in our course cart website and look forward to serving you on your educational journey. Let's explore the world of knowledge together!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
