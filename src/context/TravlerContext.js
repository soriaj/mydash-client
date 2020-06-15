import React from 'react'

const TravelerContext = React.createContext({
    hasToken: false,
    lists: [],
    events: [],
    finances: [],
    handleTokenChange: () => {},
    setupItems: () => {},
    setListItems: () => {},
    addListItem: () => {},
    deleteListItem: () => {},
    setEventItems: () => {},
    addEventItem: () => {},
    deleteEventItem: () => {},
    editEventItem: () => {},
    setFinanceItems: () => {},
    addFinananceItem: () => {},
})

export default TravelerContext;