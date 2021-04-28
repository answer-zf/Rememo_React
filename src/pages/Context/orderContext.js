import React from 'react'

const defaultValue = { orderId: 1 }

// export const { Provider, Consumer } = React.createContext(defaultValue)
const orderContext = React.createContext(defaultValue)

export const OrderProvider = orderContext.Provider
export const OrderConsumer = orderContext.Consumer
