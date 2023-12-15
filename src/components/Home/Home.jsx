import React from 'react';
import "./Home.css"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Home = () => {
    return (
        <div>
            <div className='bg object-fit-cover position-relative sm:w-100 '>
                <p className=" position text-light fs-2"> Computer Engineering
                </p>
                <div className='position text-light '>142, 765 computer engineer follow this page</div>
                <p></p>
            </div>
            <Tabs>
                <TabList >

                    <Tab>Title 1</Tab>
                    <Tab>Title 2</Tab>

                    <p className=' justify-content d-inline-flex '>ok</p>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Home;