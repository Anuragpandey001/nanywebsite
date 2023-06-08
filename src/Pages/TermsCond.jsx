import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

function TermsCond() {
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
                <h3 class="bg-grey">TERMS AND CONDITIONS</h3>
              </div>

              <ol className="ps-md-5">
                <li>
                  Office hours are daily from 9 am to 8 pm. to 2 p.m. on Sunday.
                </li>
                <li>
                  Working hours of Nanny are 10 hours a day (9 am to 7 pm), 12
                  hours at night (8 pm to 8 am )
                </li>
                <li>
                  A security deposit of Rs. The security deposit is refundable
                  from the office after termination of the nanny and the
                  security deposit must be collected from the office within 90
                  days of termination of the nanny.
                </li>
                <li>The daily allowance of each nanny is Rs.230/-.</li>
                <li>
                  Salaries of nannies should be deposited in the office between
                  1st to 4th of every month and receipt of deposit should be
                  taken from the office.
                </li>
                <li>
                  Booking card must be collected from the office every month.
                  And the booking card must be signed by the nannies every day,
                  otherwise the work money of the aunties will not be taken and
                  the aunties will not be paid.
                </li>
                <li>
                  If the party does not have to sign the service book daily, the
                  nanny aunty will not get paid.
                </li>
                <li>
                  No advance money can be given to the aunts from Pati's house.
                  In that case, the office will not be responsible in any way.
                  If an aunt needs advance money, she should take it from the
                  office.
                </li>
                <li>
                  Cash, gold and diamond jewelery and valuables should be kept
                  at your own risk.
                </li>
                <li>
                  If a nanny aunty takes leave or is suddenly unavailable due to
                  any inconvenience to the aunty, the party will be informed in
                  advance by the office. If necessary, the office will send
                  another nanny instead of that nanny.
                </li>
                <li>
                  If the party takes leave from 1 to 3 days in a month, the
                  nanny shall be paid leave pay. But if it is more than 3 days,
                  the office should be informed and the nanny service should be
                  stopped. In that case the income does not have to pay the
                  aunt's salary.
                </li>
                <li>
                  If the party wants to stop the nanny service, it should inform
                  the office 3 days in advance. Must have a nanny for at least
                  10 days.
                </li>
                <li> If any name of the office is registere.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default TermsCond;
