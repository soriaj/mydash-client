import React from 'react'

const TravelerContext = React.createContext({
    hasToken: false,
    lists: [],
    trips: [],
    all_events: [],
    handleTokenChange: () => {},
    setItems: () => {},
    addListItem: () => {},
})

export default TravelerContext;