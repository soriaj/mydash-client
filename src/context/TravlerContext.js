import React from 'react'

const TravelerContext = React.createContext({
    hasToken: false,
    lists: [],
    trips: [],
    all_events: [],
    handleTokenChange: () => {},
    setListItems: () => {},
    addListItem: () => {},
    deleteListItem: () => {},
    setEventItems: () => {},
    setTripItems: () => {},
    addEventItem: () => {},
    setupItems: () => {},
    deleteEventItem: () => {},
})

export default TravelerContext;