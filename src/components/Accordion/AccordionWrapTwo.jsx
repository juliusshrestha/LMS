import React from 'react';
// import Accordion, { AccordionItem, AccordionTitle, AccordionContent } from "../Accordion";
import styled from 'styled-components';
import { IconContext } from 'react-icons';
// import { FiPlus, FiMinus } from 'react-icons/fi';

const AccordionSection = styled.div`
    display: flex;
    // flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100vh;
    width: 100%;
    background: #fff;   
`;
const Container = styled.div`
    position: absolute;
    top: 30%;
    box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);

`;
const Wrap = styled.div`
    background: #ffffff;
    color: #272727;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    text-align: center;
    cursor: pointer;

    

`;

const AccordionWrapTwo = (data) => {
    console.log(data.data)
    return (
        // <div className="agency-accordion max-mb-n30">
        //     <Accordion>
        //             {/* {console.log('1')} */}
        //             {data.data.map((item, i) => {
        //             {console.log(item.question, i)}
                    
        //                 return (
                        
        //             <AccordionItem id={i}>
        //                 <AccordionTitle id={i}>return({item.question})</AccordionTitle>
        //                 <AccordionContent id={i}>{ item.answer }</AccordionContent>
        //             </AccordionItem>
        //             )
                    
        //         })} 
                
        //     </Accordion>
        // </div>
        //New approach
        <IconContext.Provider value={{color: '#00FFB9', size: '25px'}}>
            <AccordionSection>
                

                <Container>
                    {data.data.map((item, index) => {
                        return (
                        
                        <>
                                {console.log(index)}

                            {console.log(item.question)}
                            
                            {console.log(item.answer)}
                            <Wrap>
                                    
                            <h1>{item.question}</h1>
                            </Wrap>
                            <p>{item.answer}</p>
                        </>
                    )
                    })}
                </Container>
            
            </AccordionSection>
        </IconContext.Provider>
    )
}

export default AccordionWrapTwo;
