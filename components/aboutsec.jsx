"use client"
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import Tabbutton from './tabbutton';

const TAB_DATA = [
  { 
    titile: 'Skills',
    id:'skills',
    content:(
        <ul className='list-disc pl-2'>
            <li>Node.js</li>
            <li>Tailwind</li>
            <li>React</li>

        </ul>
    )
  },

  { 
    titile: 'Education',
    id:'education',
    content:(
        <ul className='list-disc pl-2'>
            <li>Bachelor Dev full stack & mobile</li>


        </ul>
    )
  } ,

  { 
    titile: 'Experience',
    id:'experience',
    content:(
        <ul className='list-disc pl-2'>
            <li>Dev back end</li>

        </ul>
    )
  } 
]

const Aboutsec = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition ] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image />

                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-sans text-white mb-4'>About Us</h2>
                    <p className='text-base lg:text-lg'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Nesciunt dolorem ipsam cum quidem ea libero tempora aspernatur
                        reiciendis mollitia. Non illo voluptas, sint repudiandae quia iusto
                        consequuntur voluptatum libero. Eos.
                    </p>
                    <div className='flex flex-row justify-start mt-8'>
                        <Tabbutton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                            {" "}
                            Skills {" "}
                            </Tabbutton>
                        <Tabbutton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                        {" "}
                        Education{" "}
                        </Tabbutton>
                        <Tabbutton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>
                        {" "}
                            Experience{" "}
                            </Tabbutton>
                    </div>
                    <div className='mt-8'> {TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    );
};

export default Aboutsec;