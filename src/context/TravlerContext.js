import React from 'react'

const TravelerContext = React.createContext({
    hasToken: false,
    lists: [],
    trips: [],
    events: [],
    handleTokenChange: () => {},
    setListItem: () => {},
    addListItem: () => {},
})

export default TravelerContext;