import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

function Privacy() {
  return (
    <>
      <Header home="/" about="/" service="/" />
      <section class="Terms space">
        <div class="container">
          <div class="row">
            <div
              class="col-md-12 mx-auto mt-md-5
            "
            >
              <div class="p-md-4">
                <h3 class="bg-grey">PRIVACY POLICY FOR JOYGURU AYA SERVICE</h3>
                <ul className="ps-2 ps-md-4">
                  <li>
                    At Joyguru Aya Service, we are committed to protecting the
                    privacy and security of the personal information of our
                    website visitors and customers. This Privacy Policy outlines
                    how we collect, use, disclose, and safeguard your
                    information when you use our website or engage with our
                    services. Please read this policy carefully to understand
                    our practices regarding your personal information.
                  </li>
                </ul>
              </div>
              <div class="p-md-4">
                <h3 class="bg-grey">1. Information We Collect</h3>
                <ul className="ps-2 ps-md-4">
                  <li>
                    1.1 Personal Information: When you visit our website or
                    engage with our services, we may collect personal
                    information that can identify you, such as your name,
                    contact details (including email address and phone number),
                    and any other information you voluntarily provide to us
                  </li>
                  <li>
                    1.2 Non-Personal Information: We may also collect
                    non-personal information, such as your IP address, browser
                    type, device information, and website usage data. This
                    information is collected to improve the functionality and
                    security of our website and to enhance your experience
                  </li>
                </ul>
              </div>
              <div class="p-md-4">
                <h3 class="bg-grey">2. Use of Information</h3>
                <h5 className="ps-md-3 my-4">
                  2.1 We use the information we collect for the following
                  purposes:
                </h5>
                <ul className="ps-2 ps-md-4">
                  <li>a. To provide and maintain our services</li>
                  <li></li>
                  <li> b. To process and fulfill your requests or orders.</li>
                  <li>
                    {" "}
                    c. To communicate with you, including sending important
                    notices and updates.
                  </li>
                  <li>
                    d. To personalize and improve your experience on our
                    website.
                  </li>
                  <li>
                    {" "}
                    e. To respond to inquiries, comments, or feedback you may
                    have.
                  </li>
                  <li>
                    {" "}
                    f. To analyze website usage and trends to enhance our
                    services.
                  </li>
                  <li>
                    {" "}
                    g. To comply with legal obligations and protect our rights
                    and the rights of others.
                  </li>
                </ul>
              </div>
              <div class="p-md-4">
                <h3 class="bg-grey">3. Disclosure of Information</h3>
                <h5 className="ps-md-3 my-4">
                  3.1 We may disclose your information to third parties in the
                  following circumstances:
                </h5>
                <ul className="ps-2 ps-md-4">
                  <li> a. With your consent.</li>
                  <li></li>
                  <li>
                    {" "}
                    b. To third-party service providers who assist us in
                    operating our website and providing our services.
                  </li>
                  <li>
                    c. To comply with legal obligations, such as responding to
                    lawful requests from public authorities.
                  </li>
                  <li>
                    d. To protect our rights, safety, or property, as well as
                    the rights, safety, or property of others.
                  </li>
                </ul>
              </div>
              <div class="p-md-4">
                <h3 class="bg-grey"> 4. Security</h3>
                <ul className="ps-2 ps-md-4">
                  <li>
                    4.1 We implement reasonable security measures to protect
                    your personal information from unauthorized access,
                    disclosure, alteration, or destruction. However, no data
                    transmission or storage system can be guaranteed to be 100%
                    secure. We cannot guarantee the security of your information
                    transmitted to our website or stored on our systems
                  </li>
                </ul>
              </div>
              <div class="p-md-4">
                <h3 class="bg-grey"> 5. Third-Party Links</h3>
                <ul className="ps-2 ps-md-4">
                  <li>
                    5.1 Our website may contain links to third-party websites.
                    We are not responsible for the privacy practices or content
                    of such third-party websites. We encourage you to review the
                    privacy policies of those websites before providing any
                    personal information
                  </li>
                </ul>
              </div>
              <div class="p-md-4">
                <h3 class="bg-grey"> 6. Children's Privacy</h3>
                <ul className="ps-2 ps-md-4">
                  <li>
                    6.1 Our website and services are not intended for
                    individuals under the age of 18. We do not knowingly collect
                    personal information from children. If you believe we may
                    have collected information from a child, please contact us
                    immediately, and we will take appropriate steps to remove
                    the information.
                  </li>
                </ul>
              </div>
              <div class="p-md-4">
                <h3 class="bg-grey"> 7. Changes to this Privacy Policy</h3>
                <ul className="ps-2 ps-md-4">
                  <li>
                    7.1 We may update this Privacy Policy from time to time, and
                    any changes will be effective upon posting the revised
                    policy on our website. We encourage you to periodically
                    review this page for the latest information on our privacy
                    practices
                  </li>
                </ul>
              </div>
              <div class="p-md-4">
                <h3 class="bg-grey"> 8. Contact Us</h3>
                <ul className="ps-2 ps-md-4">
                  <li>
                    8.1 If you have any questions, concerns, or requests
                    regarding this Privacy Policy or the handling of your
                    personal information, please contact us at [insert contact
                    details].
                  </li>
                  <li>
                    By using our website or engaging with our services, you
                    consent to the collection, use, and disclosure of your
                    information as described in this Privacy Policy
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Privacy;
