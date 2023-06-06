import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { Bounce, Reveal, Flip } from "react-awesome-reveal";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Faucets from "./Faucets";

export default function Sites() {
  return (
    <div className="bg-[#0D0D2B]">
      <Tabs>
        <TabList className="tab text-white font-bold font-serif text-2xl">
          <Tab>Faucets</Tab>
          <Tab>Investments</Tab>
          <Tab>Gaming</Tab>
          <Tab>Airdrops</Tab>
          <Tab>Exchanges</Tab>
          <Tab>Tutorials</Tab>
        </TabList>
{/* Faucet Tab */}
        <TabPanel>
         <Faucets/>
        </TabPanel>

        <TabPanel className="text-white">
          <h2>
          
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            aperiam odit rem. Recusandae, quo ab ipsam at velit earum quasi
            eveniet nostrum fuga atque alias laboriosam reprehenderit optio
            veniam quae.
          </h2>
        </TabPanel>

        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Airdrops</h2>
        </TabPanel>
        <TabPanel>
          <h2>Exchanges</h2>
        </TabPanel>
        <TabPanel>
          <h2>Tutorials</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
}
