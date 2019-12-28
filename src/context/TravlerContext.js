import React from 'react'

const TravelerContext = React.createContext({
    hasToken: false,
    handleTokenChange: () => {},
})

export default TravelerContext;