import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import "../../App.css";
function Faq() {
  return (
    <div className="container-fluid hero">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 mt-5">
            <Accordion className="border-0 bg-light">
              <AccordionItem className="border-0 bg-light">
                <h2>
                  <AccordionButton>
                    <div as="span" flex="1" textAlign="left">
                      Are you available for collaboration?
                    </div>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className="text-light">
                  Yes, I am ever ready to build transforming and amazing project
                  together with you.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <div as="span" flex="1" textAlign="left">
                      Section 2 title
                    </div>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
