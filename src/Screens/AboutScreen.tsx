import React, {Component} from 'react';
import {AboutMeContent} from "../Content/AboutContent";

import {Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box,} from '@chakra-ui/react'

export default class AboutScreen extends Component {
  private contentStyle: React.CSSProperties = {
    height: window.innerHeight - 500,
    background: "#4caf50"
  }

  render() {
    return <div style={this.contentStyle}>
      <Accordion defaultIndex={[0]} allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{bg: 'tomato', color: 'white'}}>
              <Box as="span" flex='1' textAlign='left'>
                Who Am I?
              </Box>
              <AccordionIcon/>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <AboutMeContent/>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{bg: 'tomato', color: 'white'}}>
              <Box as="span" flex='1' textAlign='left'>
                Experiences
              </Box>
              <AccordionIcon/>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Arma, Usersdot
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{bg: 'tomato', color: 'white'}}>
              <Box as="span" flex='1' textAlign='left'>
                Projects
              </Box>
              <AccordionIcon/>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Fire Detection
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

    </div>;
  }
}
