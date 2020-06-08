import React from 'react'

const TravelerContext = React.createContext({
    hasToken: false,
    lists: [],
    events: [],
    finances: [],
    handleTokenChange: () => {},
    setListItems: () => {},
    addListItem: () => {},
    deleteListItem: () => {},
    setEventItems: () => {},
    setFinanceItems: () => {},
    addEventItem: () => {},
    setupItems: () => {},
    deleteEventItem: () => {},
    editEventItem: () => {},
})

export default TravelerContext;