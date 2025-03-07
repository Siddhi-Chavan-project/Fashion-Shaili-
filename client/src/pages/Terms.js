import React from "react";
import "../styles/terms.css";
import Layout from "./../components/Layout/Layout";

const Terms = () => {
  return (
    <Layout>
    <div className="terms-container">
      <header className="terms-header">
        <h1>Terms and Conditions</h1>
      </header>

      <section className="terms-section">
        <h2>Introduction</h2>
        <p>
          Welcome to Fashion Shaili! These terms and conditions govern your use of
          our website and services. By accessing or using our site, you agree to
          comply with these terms. If you do not agree to these terms, please refrain
          from using our site.
        </p>
      </section>

      <section className="terms-section">
        <h2>Intellectual Property</h2>
        <p>
          All content on this website, including text, images, logos, and designs, are
          owned by Fashion Shaili or its licensors. You may not copy, reproduce, or
          distribute any of the content without our express written consent.
        </p>
      </section>

      <section className="terms-section">
        <h2>Use of Website</h2>
        <p>
          You agree to use our website for lawful purposes only. You must not use the site
          to engage in any activity that could damage, disable, or overburden the website
          or interfere with other users' experience.
        </p>
      </section>

      <section className="terms-section">
        <h2>Account Responsibility</h2>
        <p>
          You are responsible for maintaining the confidentiality of your account and
          password. You agree to notify us immediately if you suspect any unauthorized
          access to your account.
        </p>
      </section>

      <section className="terms-section">
        <h2>Product Information</h2>
        <p>
          We strive to provide accurate product descriptions, images, and prices. However,
          we cannot guarantee that all information is error-free. We reserve the right to
          make changes to product details at any time.
        </p>
      </section>

      <section className="terms-section">
        <h2>Limitation of Liability</h2>
        <p>
          Fashion Shaili is not liable for any indirect, incidental, or consequential
          damages arising out of your use of our website. We make no warranties regarding
          the availability or performance of the site.
        </p>
      </section>

      <section className="terms-section">
        <h2>Termination</h2>
        <p>
          We reserve the right to suspend or terminate your access to the website at any
          time without notice, for any reason, including if you violate these terms and
          conditions.
        </p>
      </section>

      <section className="terms-section">
        <h2>Governing Law</h2>
        <p>
          These terms and conditions shall be governed by and construed in accordance with
          the laws of the jurisdiction in which we operate. Any disputes will be resolved
          through binding arbitration.
        </p>
      </section>

      <section className="terms-contact">
        <h2>Contact Us</h2>
        <p>If you have any questions regarding our terms and conditions, please contact us:</p>
        <p>
          <strong>Email:</strong> crm@fashionshaili.com
        </p>
        <p>
          <strong>Phone:</strong> 9123456788
        </p>
      </section>
    </div></Layout>
  );
};

export default Terms;
