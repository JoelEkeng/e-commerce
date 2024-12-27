'use client';

import { useState } from 'react';
import Typography from '@mui/joy/Typography';
import Foryou from '@/components/(Homepage)/(components)/Foryou';
import HomeAppliancesDeals from '@/components/(Homepage)/(components)/HomeAppliancesDeals';
import MobileDeals from '@/components/(Homepage)/(components)/MobileDeals';
import TVAudioDeals from '@/components/(Homepage)/(components)/TVAudioDeals';
import ComputingDeals from '@/components/(Homepage)/(components)/ComputingDeals';
import Search from '@/components/Search';
import { useRouter } from 'next/router';

export const LandingPage = () => {
    return (
        <div>
            <h1>Welcome to the landing page</h1>
        </div>
    );
};

const tabs = [
    { name: 'For You', component: <Foryou /> },
    { name: 'Mobile', component: <MobileDeals /> },
    { name: 'TV & Audio', component: <TVAudioDeals /> },
    { name: 'Home Appliances', component: <HomeAppliancesDeals /> },
    { name: 'Computing', component: <ComputingDeals /> },
];

export const Deals = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].name);

    return (
        <div className="h-screen pt-10 mb-72">
            <Typography level="h2" component="h1" gutterBottom className="text-center tracking-widest">
                Deals on last-minute gifts
            </Typography>
            <div
                className="flex gap-4 justify-center mt-8"
            >
                {tabs.map((tab) => (
                    <button
                        key={tab.name}
                        onClick={() => setActiveTab(tab.name)}
                        className={`px-4 py-2 rounded-3xl ${
                            activeTab === tab.name
                                ? 'underline underline-offset-8 decoration-black text-black'
                                : 'text-gray-500'
                        }`}
                    >
                        <Typography level="h3" className="font-semibold">
                            {tab.name}
                        </Typography>
                    </button>
                ))}
            </div>
            <div>
                {tabs.map(
                    (tab) =>
                        tab.name === activeTab && <div key={tab.name}>{tab.component}</div>
                )}
            </div>
        </div>
    );
};

