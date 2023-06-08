import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

function Counter() {
  const [a, setA] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const oTop =
        document.getElementById("counter").offsetTop - window.innerHeight;
      if (a === 0 && window.scrollY > oTop) {
        const counters = document.querySelectorAll(".counter-value");
        counters.forEach((counter) => {
          const countTo = parseInt(counter.dataset.count);
          let countNum = parseInt(counter.textContent);
          const duration = 2000;
          const easing = "swing";
          let startTime = null;

          const step = (currentTime) => {
            if (!startTime) {
              startTime = currentTime;
            }
            const progress = currentTime - startTime;
            const increment = Math.floor(
              (countTo - countNum) * (progress / duration)
            );
            countNum += increment;
            counter.textContent = countNum;
            if (progress < duration) {
              window.requestAnimationFrame(step);
            } else {
              counter.textContent = countTo;
              //alert('finished');
            }
          };

          window.requestAnimationFrame(step);
        });
        setA(1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [a]);

  const counter = [
    {
      data: 19,
      title: "Team Memeber",
      icons: <i class="fa-solid fa-people-group"></i>,
    },
    {
      data: 79,
      title: "Happy Cleints",
      icons: <i class="fa-regular fa-face-smile-beam"></i>,
    },
    {
      data: 519,
      title: "Team Experts",
      icons: <i class="fa-solid fa-person-chalkboard"></i>,
    },
    {
      data: 29,
      title: "Project Done",
      icons: <i class="fa-solid fa-circle-check"></i>,
    },
  ];
  return (
    <section className="space">
      <Container>
        <Row>
          <Col md="12">
            <div className="counterbg">
              <Row>
                {counter.map((item) => {
                  return (
                    <Col md="3" xs="6">
                      <div className="projectBoxes" id="counter">
                        <h5 className="text-center text-white fs-2">
                          {item.icons}
                        </h5>
                        <h4
                          className="text-center counter-value text-white fw-bold"
                          data-count={item.data}
                        >
                          0
                        </h4>
                        <h3 className="text-center text-white fw-bold">
                          {item.title}
                        </h3>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Counter;
