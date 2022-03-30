import React, {useContext} from 'react'

import { Store as StoreProtfolio } from 'Store/protfolio'
import { Store as StoreMarketResearch } from 'Store/marketResearch'
import { Store as StoreArticles } from 'Store/articles'
import { Store as StoreServices } from 'Store/services'


export default function Getstoreitems(props) {

    const _StoreProtfolio = useContext(StoreProtfolio)
    const _StoreMarketResearch = useContext(StoreMarketResearch)
    const _StoreArticles = useContext(StoreArticles)
    const _StoreServices = useContext(StoreServices)

    const getProtfolio = _StoreProtfolio?.state
    const getMarketResearch = _StoreMarketResearch?.state
    const getArticles = _StoreArticles?.state
    const getServices = _StoreServices?.state
    

    return {getProtfolio, getMarketResearch, getArticles, getServices}
}
