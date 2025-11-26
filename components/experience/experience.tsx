'use client';

import { useState } from "react";
import { experienceAccordionContent } from "@/lib/data";
import Accordion from "@/components/shared/accordion/accordion";

export default function Experience() {
    const [accordionData, setAccordionData] = useState(experienceAccordionContent);

    return (
        <section className='w-full flex flex-col gap-6'>
            <h1>Experience</h1>
            <Accordion data={accordionData} setData={setAccordionData} />
        </section>
    )
}