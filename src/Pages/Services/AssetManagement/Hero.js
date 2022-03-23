import React from 'react'

import Navbar from 'Components/Navbar'
import { DownloadDocumentButton } from 'Components/Buttons'

// ** assets
// import { ReactComponent as IconHome  } from 'Assets/icons/service_home.svg'
import { ReactComponent as IconManage } from 'Assets/icons/service_manage.svg'

export default function Hero(props) {
    

    return (
        <>
        <div className="about-wrapper-1 w-full">
            <Navbar variant="white" />
            <section>
                <div className="py-28  px-4 text-white">
                    <div className="container mx-auto">
                        <div className="text-2xl xl:text-3xl font-bold flex items-center">
                        <IconManage className='mr-6' />  Asset Management
                        </div>
                        <div className="flex flex-wrap pt-16 items-end">
                            <div className="w-full xl:w-1/2 text-sm mb-16">
                                In the Armenian capital markets, Dimension is involved in managing its own investment portfolio of equity and debt instruments, as well as two open, non-public, leveraged fixed income funds.
                                <br /><br />
                                In international markets, Dimension offers private portfolio and wealth management solutions to institutional clients, high net worth individuals, and other investors based in Armenia and abroad.
                            </div>
                            <div className="w-full h-full xl:w-1/2 mb-16 flex  justify-end">
                                <DownloadDocumentButton className="w-fit px-14">
                                    Regilation documents
                                </DownloadDocumentButton>
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
            
        </>
    )
}