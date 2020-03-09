import React from 'react'

const TravelerContext = React.createContext({
    hasToken: false,
    lists: [],
    trips: [],
    events: [],
    handleTokenChange: () => {},
    setListItems: () => {},
    addListItem: () => {},
    deleteListItem: () => {},
    setEventItems: () => {},
    setTripItems: () => {},
    addEventItem: () => {},
    setupItems: () => {},
    deleteEventItem: () => {},
    editEventItem: () => {},
})

export default TravelerContext;