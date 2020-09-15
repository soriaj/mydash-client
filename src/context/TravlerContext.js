import React from 'react'

const TravelerContext = React.createContext({
    hasToken: false,
    lists: [],
    events: [],
    finances: [],
    balances: [],
    user: [],
    handleTokenChange: () => {},
    setUserItems: () => {},
    setListItems: () => {},
    addListItem: () => {},
    deleteListItem: () => {},
    setEventItems: () => {},
    addEventItem: () => {},
    deleteEventItem: () => {},
    editEventItem: () => {},
    setFinanceItems: () => {},
    addFinananceItem: () => {},
    deleteFinanceItem: () => {},
    setBalanceItems:  () => {},
    editBalance: () => {},
    updateBalance: () => {}
})

export default TravelerContext;