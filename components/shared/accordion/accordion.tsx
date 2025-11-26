import type { AccordionProps } from "@/types";
import AccordionItem from "@/components/shared/accordion/accordion-item";

export default function Accordion({data, setData}: AccordionProps) {

    const handleToggle = (id: number) => {
        setData(prevData => (
            prevData.map(data => (
                data.id === id
                    ? {...data, isOpen: !data.isOpen}
                    : {...data, isOpen: false}
            ))
        ))
    }

    const dataLength = data.length;

    return (
        <div className='w-full flex flex-col justify-center items-center px-2'>
            {
                data.map((item, index) => (
                    <AccordionItem
                        key={index}
                        item={item}
                        handleToggle={handleToggle}
                        isLastItem={index === dataLength - 1}
                    />
                ))
            }
        </div>
    )
}