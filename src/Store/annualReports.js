import React, {createContext, useReducer} from 'react';

const stateModal = {
    annualReports : [],
    financialStatementsAnnual : [],
    financialStatementsQuaterly : [],
    normatives : []
    
  }
  
  const initialState = {...stateModal};

  const Store = createContext(initialState);

  const { Provider } = Store;


const StateProvider = ( { children } ) => {
    const [state, dispatch] = useReducer((state, action) => {
      let newState = {}
      switch(action.type) {
        case 'initAnnualReports':
          newState = {...state, annualReports : [ ...action?.payload] }
          return newState;
        case 'initFinancialStatementAnnual':
          newState = {...state, financialStatementsAnnual : [ ...action?.payload] }
          return newState;
        case 'initFinancialStatementQuaterly':
          newState = {...state, financialStatementsQuaterly : [ ...action?.payload] }
          return newState;
        case 'initNormatives':
          newState = {...state, normatives : [ ...action?.payload] }
          return newState;
        case 'clearState' :
          return {  ...stateModal  }
        default:
          throw new Error();
      };
    }, initialState);
  
    return <Provider value={{ state, dispatch }}>{children}</Provider>;
  };
  

  export { Store , StateProvider }