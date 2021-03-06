import React, { useContext } from 'react'

import { GetFunctions } from 'API/fetch'
// import { fetchProtfolio, fetchMarketResearch, fetchArticles, fetchServicesPage, fetchClientRightsPage, fetchTeam, fetchAboutPage, fetchFaq, fetchCareers, fetchRegulations, fetchAnnualReports } from 'API/fetch'

import { Store as StoreProtfolio } from 'Store/protfolio'
import { Store as StoreMarketResearch } from 'Store/marketResearch'
import { Store as StoreArticles } from 'Store/articles'
import { Store as StoreServices } from 'Store/services'
import { Store as StoreClientRights } from 'Store/clientRights'
import { Store as StoreTeam } from 'Store/team'
import { Store as StoreAboutPage } from 'Store/aboutPage'
import { Store as StoreFaq } from 'Store/faq'
import { Store as StoreCareers } from 'Store/careers'
import { Store as StoreRegulations } from 'Store/regulations'
import { Store as StoreAnnualReports } from 'Store/annualReports'
import { Store as StoreIndicesData } from 'Store/Indices'
import { Store as StoreConfigs } from 'Store/configs'


export default function Initstore(props) {

    const _StoreProtfolio = useContext(StoreProtfolio)
    const _StoreMarketResearch = useContext(StoreMarketResearch)
    const _StoreArticles = useContext(StoreArticles)
    const _StoreServices = useContext(StoreServices)
    const _StoreClientRights = useContext(StoreClientRights)
    const _StoreAboutPage = useContext(StoreAboutPage)
    const _StoreTeam = useContext(StoreTeam)
    const _StoreFaq = useContext(StoreFaq)
    const _StoreCareers = useContext(StoreCareers)
    const _StoreRegulations = useContext(StoreRegulations)
    const _StoreAnnualReports = useContext(StoreAnnualReports)
    const _StoreIndicesData = useContext(StoreIndicesData)
    const _StoreConfigs = useContext(StoreConfigs)

    const CollectionTypeFunction = async (filter, fetchFunction, storeObj, storeInitString = 'initState', singleType = false) => {
        
        try {

            const res = await fetchFunction(filter)
            const data = res?.data?.data || (singleType ? {} : [])
            storeObj.dispatch({
                type: storeInitString,
                payload: singleType ? { ...data } : [...data]
            })


        } catch (ex) {
            console.log(ex)
        }

    }


    const FunctionsList = [
       
        {
            name: 'initProtfolio',
            filter: { populate: ["image"] },
            fetchFunction: GetFunctions.fetchProtfolio,
            storeObj: _StoreProtfolio,
            storeInitString: 'initState',
            singleType: false
        },
        {
            name: 'initMarketResearch',
            filter: { populate: ["image"] },
            fetchFunction: GetFunctions.fetchMarketResearch,
            storeObj: _StoreMarketResearch,
            storeInitString: 'initState',
            singleType: false
        },
        {
            name: 'initArticles',
            filter: { populate: ["image"] },
            fetchFunction: GetFunctions.fetchArticles,
            storeObj: _StoreArticles,
            storeInitString: 'initState',
            singleType: false
        },
        {
            name: 'initServices',
            filter: { populate: ["regilation_documents_capital_market_pdf", "regilation_documents_asset_management_pdf", "regilation_documents_investment_securities_pdf"] },
            fetchFunction: GetFunctions.fetchServicesPage,
            storeObj: _StoreServices,
            storeInitString: 'initState',
            singleType: true
        },
        {
            name: 'initClientRights',
            filter: { populate: ["regilation_documents_pdf"] },
            fetchFunction: GetFunctions.fetchClientRightsPage,
            storeObj: _StoreClientRights,
            storeInitString: 'initState',
            singleType: true
        },
        
        {
            name: 'initFaq',
            filter: {},
            fetchFunction: GetFunctions.fetchFaq,
            storeObj: _StoreFaq,
            storeInitString: 'initState',
            singleType: false
        },
        {
            name: 'initCareers',
            filter: {},
            fetchFunction: GetFunctions.fetchCareers,
            storeObj: _StoreCareers,
            storeInitString: 'initState',
            singleType: false
        },
        // ===================================
        //  About page
        // ===================================
        {
            name: 'initTeam',
            filter: { populate: ["image"] },
            fetchFunction: GetFunctions.fetchTeam,
            storeObj: _StoreTeam,
            storeInitString: 'initState',
            singleType: false
        },
        {
            name: 'initAboutpage',
            filter: { populate: ["license_pdf", "charter_pdf", "regilation_pdf", "central_bank_regulation_pdf"] },
            fetchFunction: GetFunctions.fetchAboutPage,
            storeObj: _StoreAboutPage,
            storeInitString: 'initState',
            singleType: true
        },
        {
            name: 'initAboutPageOwnership',
            filter: { },
            fetchFunction: GetFunctions.fetchOwnership,
            storeObj: _StoreAboutPage,
            storeInitString: 'initOwnerships',
            singleType: false
        },
        {
            name: 'initAboutPagePartners',
            filter: { populate : ['logo'] },
            fetchFunction: GetFunctions.fetchPartners,
            storeObj: _StoreAboutPage,
            storeInitString: 'initPartners',
            singleType: false
        },
        {
            name: 'initRegulationsPage',
            filter: {},
            fetchFunction: GetFunctions.fetchRegulations,
            storeObj: _StoreRegulations,
            storeInitString: 'initState',
            singleType: true
        },
        // ===================================
        // Client relations
        // ===================================
        {
            name: 'initAnnualReports',
            filter: { populate: ["pdf"] },
            fetchFunction: GetFunctions.fetchAnnualReports,
            storeObj: _StoreAnnualReports,
            storeInitString: 'initAnnualReports',
            singleType: false
        },
        {
            name: 'initFinancialStatementAnnual',
            filter: { populate: ["pdf"] },
            fetchFunction: GetFunctions.fetchFinancialReportsAnnual,
            storeObj: _StoreAnnualReports,
            storeInitString: 'initFinancialStatementAnnual',
            singleType: false
        },
        {
            name: 'initFinancialStatementQuaterly',
            filter: { populate: ["q1_pdf", "q2_pdf", "q3_pdf", "q4_pdf"] },
            fetchFunction: GetFunctions.fetchFinancialReportsQuaterly,
            storeObj: _StoreAnnualReports,
            storeInitString: 'initFinancialStatementQuaterly',
            singleType: false
        },
        {
            name: 'initNormatives',
            filter: { populate: ["q1_pdf", "q2_pdf", "q3_pdf", "q4_pdf"] },
            fetchFunction: GetFunctions.fetchNormatives,
            storeObj: _StoreAnnualReports,
            storeInitString: 'initNormatives',
            singleType: false
        },

        // -----------------
        // Indices page  AMD
        // -----------------

        {
            name: 'initAmdIndicesGraph',
            filter: { sort: ['date:asc'],  },
            fetchFunction: GetFunctions.fetchAmdBondIndexGraph,
            storeObj: _StoreIndicesData,
            storeInitString: 'initAmdIndicesGraph',
            singleType: false
        },
        {
            name: 'initAmdIndexTableData',
            filter: {    },
            fetchFunction: GetFunctions.fetchAmdBondIndexTable,
            storeObj: _StoreIndicesData,
            storeInitString: 'initAmdIndexTableData',
            singleType: true
        },
        {
            name: 'initAmdIndicesFactsheets',
            filter: { populate : ["pdf"], sort : ["year:desc"]   },
            fetchFunction: GetFunctions.fetchAmdBondIndexFactsheets,
            storeObj: _StoreIndicesData,
            storeInitString: 'initAmdIndicesFactsheets',
            singleType: false
        },

        // -----------------
        // Indices page  AMD
        // -----------------
        {
            name: 'initUsdIndicesGraph',
            filter: { sort: ['date:asc'],   },
            fetchFunction: GetFunctions.fetchUsdBondIndexGraph,
            storeObj: _StoreIndicesData,
            storeInitString: 'initUsdIndicesGraph',
            singleType: false
        },
        {
            name: 'initUsdIndexTableData',
            filter: {    },
            fetchFunction: GetFunctions.fetchUsdBondIndexTable,
            storeObj: _StoreIndicesData,
            storeInitString: 'initUsdIndexTableData',
            singleType: true
        },
        {
            name: 'initUsdIndicesFactsheets',
            filter: { populate : ["pdf"], sort : ["year:desc"]   },
            fetchFunction: GetFunctions.fetchUsdBondIndexFactsheets,
            storeObj: _StoreIndicesData,
            storeInitString: 'initUsdIndicesFactsheets',
            singleType: false
        },
        // =================================================
        {
            name: 'initAllConfigs',
            filter: {  },
            fetchFunction: GetFunctions.fetchAllConfigs,
            storeObj: _StoreConfigs,
            storeInitString: 'initState',
            singleType: true,
        },


    ]

    const MappedFunctions = [...FunctionsList].reduce((obj, current) => ({
        ...obj,
        [current.name]: () => CollectionTypeFunction(
            current.filter,
            current.fetchFunction,
            current.storeObj,
            current.storeInitString,
            current.singleType,
        )
        })
    ,{})


    return { ...MappedFunctions }
}
