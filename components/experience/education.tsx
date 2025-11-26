'use client';

import { useState } from "react";
import { educationAccordionContent } from "@/lib/data";
import Accordion from "@/components/shared/accordion/accordion";

export default function Education() {
    const [accordionData, setAccordionData] = useState(educationAccordionContent);

    return (
        <section className='w-full flex flex-col gap-6'>
            <h1>Education</h1>
            <Accordion data={accordionData} setData={setAccordionData} />
        </section>
    )
}