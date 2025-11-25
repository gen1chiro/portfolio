import { motion } from 'motion/react';
import { FaChevronRight, FaChevronDown } from "react-icons/fa6";
import type { AccordionItemProps } from "@/types";

export default function AccordionItem({item, handleToggle, isLastItem}: AccordionItemProps) {
    const {id, position, company, durationFull, durationShort, details, tags, isOpen} = item;

    return (
        <div
            onClick={() => handleToggle(id)}
            className={`w-full flex flex-col items-start justify-center gap-3 ${isLastItem ? '' : 'border-b'} border-black/30`}>
            <div className= {
                `w-full flex justify-between items-center p-2 cursor-pointer rounded-sm text-xs sm:text-sm
            ${isOpen ? 'bg-zinc-900 text-white' : 'text-black font-medium'}
            `}>
                <div className='flex justify-between items-center gap-3'>
                    {isOpen ? <FaChevronDown className='text-xs'/> : <FaChevronRight className='text-xs'/>}
                    <h1 className={`${isOpen ? 'text-white' : ''}`}>{position}</h1>
                    <h1 className={`font-semibold ${isOpen ? 'text-white' : ''}`}>{company}</h1>
                </div>
                <p className={`hidden sm:block ${isOpen ? 'text-white' : ''}`}>{durationFull}</p>
                <p className={`sm:hidden ${isOpen ? 'text-white' : ''}`}>{durationShort}</p>
            </div>
            {
                isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className='w-full'>
                        <ul className='list-disc w-full px-10 text-xs sm:text-sm'>
                            {details.map((detail, index) => (
                                <li key={index}><p>{detail}</p></li>
                            ))}
                        </ul>
                        <div className='flex justify-start items-center gap-6 text-zinc-300 text-xs sm:text-sm px-10 mt-3 mb-6'>
                            {tags.map((tag, index) => (
                                <p key={index}>{tag}</p>
                            ))}
                        </div>
                    </motion.div>
                )
            }
        </div>
    )
}