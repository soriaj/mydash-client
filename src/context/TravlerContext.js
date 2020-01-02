import React from 'react'

const TravelerContext = React.createContext({
    hasToken: false,
    lists: [],
    trips: [],
    all_events: [],
    handleTokenChange: () => {},
    setListItems: () => {},
    setEventItems: () => {},
    setTripItems: () => {},
    addListItem: () => {},
})

export default TravelerContext;