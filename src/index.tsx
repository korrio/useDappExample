import React from 'react'
import ReactDOM from 'react-dom'
import { DAppProvider } from '@usedapp/core'
import { ChainId } from './sdk/chainId'
import { App } from './App'

const config = {
  readOnlyChainId: ChainId.Kovan,
  readOnlyUrls: {
    [ChainId.Kovan]: 'https://kovan.infura.io/v3/62687d1a985d4508b2b7a24827551934',
  },
}

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
