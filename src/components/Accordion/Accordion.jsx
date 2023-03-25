import React, { useState } from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';

const AccordionSection = styled.div``;
const Container = styled.div``;

const Wrap = styled.div``;

const Dropdown = styled.div``;

const Accordion = (data) => {
    //console.log(data.data)
    const [clicked, setClicked] = useState(false);

    const toggle = index => {
    if (clicked === index) {
        //if clicked question is already active, then close it
        return setClicked(null);
    }

    setClicked(index);
    };

  return (
      <IconContext.Provider value={{ color: 'blue', size: '25px' }}>
          <div className="agency-accordion max-mb-n30">
          <AccordionSection>
                  <Container>
                  <div className="accordion p-3 ">
                          {data.data.map((item, index) => {
                              if (item.status === 'published') {
                                  return (
                                      <>
                                          <div key={ index } className="accordion-title ">
                                              <Wrap onClick={() => toggle(index)} key={index}>
                                                  <h4>
                                                      <div className="continer">
                                                          <div className="row">
                                                              <div className="col-11 ">{item.question}</div>
                                            
                                                              <div className="col-1">{clicked === index ? <FiMinus /> : <FiPlus />}</div>
                                                          </div>
                                                      </div>
                                                  </h4>
                                              </Wrap>
                                              <br />
                                          </div>
                                          {clicked === index ? (
                                              <div className="accordion-content card-body">

                                                  <Dropdown>
                                                      <p>{item.answer}</p>
                                                  </Dropdown>
                                              </div>
                                          ) : null}
                                    
                                      </>
                                  );
                              }
                    })}
                  </div>
        </Container>
              </AccordionSection>
              </div>
    </IconContext.Provider>
  );
};

export default Accordion;
