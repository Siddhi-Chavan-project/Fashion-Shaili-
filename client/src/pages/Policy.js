import React from "react";
import Layout from "./../components/Layout/Layout";
import "../styles/policy.css"; // Importing custom styles


const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="container-fluid mt-5">
        <div className="card shadow-lg border-0">
          <div className="card-body p-5 bg-light">
            <h1 className="text-center text-primary display-4 fw-bold">Privacy Policy</h1>
            <p className="text-center text-muted lead">
              <strong>Effective Date:</strong> February 2, 2025
            </p>

            {/* Accordion for collapsible sections */}
            <div className="accordion mt-4" id="policyAccordion">
              {/* Section 1 - Introduction */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    1. Introduction
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#policyAccordion">
                  <div className="accordion-body">
                    Welcome to <strong>Fashion Shaili</strong>. We are committed to protecting your privacy and ensuring a secure shopping experience.
                  </div>
                </div>
              </div>

              {/* Section 2 - Information We Collect */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    2. Information We Collect
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#policyAccordion">
                  <div className="accordion-body">
                    <table className="table table-bordered">
                      <thead className="table-primary">
                        <tr>
                          <th>Type</th>
                          <th>Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><strong>Personal Information</strong></td>
                          <td>Name, email, phone, etc.</td>
                        </tr>
                        <tr>
                          <td><strong>Non-Personal Information</strong></td>
                          <td>Browser type, IP address, etc.</td>
                        </tr>
                        <tr>
                          <td><strong>Cookies & Tracking</strong></td>
                          <td>Used to enhance your experience.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Section 3 - How We Use Your Information */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    3. How We Use Your Information
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#policyAccordion">
                  <div className="accordion-body">
                    We use your information to process transactions, improve our services, and provide updates.
                  </div>
                </div>
              </div>

              {/* Section 4 - Sharing Your Information */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    4. Sharing Your Information
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#policyAccordion">
                  <div className="accordion-body">
                    We do not sell your data. We may share it with service providers or legal authorities if required.
                  </div>
                </div>
              </div>

              {/* Section 5 - Data Security */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    5. Data Security
                  </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#policyAccordion">
                  <div className="accordion-body">
                    We implement security measures, but we cannot guarantee complete protection.
                  </div>
                </div>
              </div>

              {/* Section 6 - Your Rights */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSix">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    6. Your Rights
                  </button>
                </h2>
                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#policyAccordion">
                  <div className="accordion-body">
                    You may have rights regarding your personal data, including access, updates, and deletion.
                  </div>
                </div>
              </div>

              {/* Section 7 - Contact Us */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSeven">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                  >
                    7. Contact Us
                  </button>
                </h2>
                <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#policyAccordion">
                  <div className="accordion-body">
                    If you have any questions, contact us at <strong>crm@fashionshaili.com</strong>.
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-muted mt-4">Last updated on <strong>February 2, 2025</strong></p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
