import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import TravelerContext from '../context/TravlerContext'

export default function PrivateRoute({ component, ...props }) {
  const Component = component
  const context = useContext(TravelerContext)
  console.log(context)
  return (
    <Route
      {...props}
      render={componentProps => (
        context.hasToken
          ? <Component {...componentProps} />
          : <Redirect
              to={{
                pathname: '/login',
                state: { from: componentProps.location }
              }}
            />
      )}
    />
  )
}
