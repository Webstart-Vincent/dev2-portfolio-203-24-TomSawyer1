"use client"
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import Tabbutton from './tabbutton';

const Aboutsec = () => {
    const [tab, setTab] = useState("skills");
    const [startTransition, isPending] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image />

                <div>
                    <h2 className='text-4xl font-sans text-white mb-4'>About Us</h2>
                    <p className='text-base lg:text-lg'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Nesciunt dolorem ipsam cum quidem ea libero tempora aspernatur
                        reiciendis mollitia. Non illo voluptas, sint repudiandae quia iusto
                        consequuntur voluptatum libero. Eos.
                    </p>
                    <div className='flex flex-row mt-8'>
                        <Tabbutton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</Tabbutton>
                        <Tabbutton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</Tabbutton>
                        <Tabbutton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>Experience</Tabbutton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Aboutsec;
