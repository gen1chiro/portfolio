'use client';

import { useState } from "react";
import { experienceAccordionContent } from "@/lib/data";
import Accordion from "@/components/shared/accordion/accordion";

export default function Experience() {
    const [accordionData, setAccordionData] = useState(experienceAccordionContent);

    const handleAccordionToggle = (id: number) => {
        setAccordionData(prevData => (
            prevData.map(data => (
                data.id === id
                    ? {...data, isOpen: !data.isOpen}
                    : {...data, isOpen: false}
            ))
        ))
    }

    return (
        <section className='w-full flex flex-col gap-6'>
            <h1>Experience</h1>
            <Accordion data={accordionData} handleToggle={handleAccordionToggle} />
        </section>
    )
}