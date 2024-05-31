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
            <li>PHP (Laravel)</li>
            <li>Javascript</li>
            <li>Java</li>
            <li>Vue.js</li>
            <li>Node.js</li>
            <li>Tailwind</li>
            <li>React</li>
            <li>C#</li>

        </ul>
    )
  },

  { 
    titile: 'Education',
    id:'education',
    content:(
        <ul className='list-disc pl-2'>
            <li>Bachelor Developpeur full stack & mobile 2022-2025</li>
            <li>BTS SN Informatique & réseaux 2020-2022 </li>
            <li>Bac STI2D sciences et technologies de l'industrie 2018-2020</li>

        </ul>
    )
  } ,

  { 
    titile: 'Experience',
    id:'experience',
    content:(
        <ul className='list-disc pl-2'>
            <li>Apprenti Developpeur back-end chez Europcar Mobility Group 2022-2024</li>

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
                    <h2 className='text-4xl font-sans text-white mb-4'>A propos de moi</h2>
                    <p className='text-base lg:text-lg'>
                    Développeur full stack passionné et curieux,
                    actuellement en alternance dans le domaine du Web.
                    Je possède des compétences solides en programmation,
                    en gestion de bases de données et en optimisation des performances serveur.
                    Engagé à fournir des solutions efficaces et robustes,
                    je suis motivé par les défis techniques et l'apprentissage continu.
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