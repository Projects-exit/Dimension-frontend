import React, { useEffect, useState } from 'react'

import { Accordion } from 'Components/Accordion';

import { SlideLeft, SlideRight, JustAppear, SlideBottom, SlideTop } from 'Components/SlideAnimation'


// ** Store
import useStoreItem from 'Store/hooks/getStoreItems'
import initStoreItem from 'Store/hooks/initStoreItems'


export default function Questions(props) {

    const [expanded, setExpanded] = useState(false)

    const { getFaq } = useStoreItem()
    const { initFaq } = initStoreItem()

    const _questions = getFaq?.faq ?? []
    const leftHalf = [..._questions]
    const rightHalf = leftHalf.splice(0, Math.floor(_questions.length / 2));
    

    useEffect(() => { initFaq() }, [])


    const questions = [
        {
            id: 1,
            _q: 'Do you provide customer support?',
            _a: " Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem . Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. "
        },
        {
            id: 2,
            _q: 'Do you provide customer support?',
            _a: " Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem . Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. "
        },
        {
            id: 3,
            _q: 'Do you provide customer support?',
            _a: " Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem . Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. "
        },
        {
            id: 4,
            _q: 'Do you provide customer support?',
            _a: " Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem . Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. "
        },
        {
            id: 5,
            _q: 'Do you provide customer support?',
            _a: " Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem . Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. "
        },
        {
            id: 6,
            _q: 'Do you provide customer support?',
            _a: " Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem . Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. "
        },

    ]

    // const leftArray = _questions.splice(0, Math.floor(_questions.length / 2));



    return (
        <>
            <div className=" faq-wrapper-2">
                <div className="container mx-auto px-4">
                    <div className="py-32">
                        <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-8">
                            {/* -------------------------- */}
                            {/* --------- Col left ---------- */}
                            <div>

                                {
                                    leftHalf.map(item =>
                                        <div className='pb-8'>
                                            <SlideBottom>
                                            <Accordion
                                                id={item?.id} expanded={expanded} setExpanded={setExpanded}
                                                className={`${expanded === item?.id ? "bg-dark-blue-grad" : 'bg-blue-light text-dark-blue'}`}
                                                title={item?.attributes?.question}
                                            >
                                                {item?.attributes?.answer}
                                            </Accordion>
                                            </SlideBottom>
                                        </div>
                                    )
                                }

                            </div>

                            {/* -------------------------- */}
                            {/* --------- Col right ---------- */}
                            <div>
                                
                                {
                                    rightHalf.map(item =>
                                        <div className='pb-8'>
                                            <SlideBottom>

                                            <Accordion
                                                id={item?.id} expanded={expanded} setExpanded={setExpanded}
                                                className={`${expanded === item?.id ? "bg-dark-blue-grad" : 'bg-blue-light text-dark-blue'}`}
                                                title={item?.attributes?.question}
                                            >
                                                    {item?.attributes?.answer}
                                            </Accordion>
                                                </SlideBottom>
                                        </div>
                                    )
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
