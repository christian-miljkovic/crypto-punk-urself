import { CustomizeScreen } from './screens'
import { ethers } from 'ethers'
import { useCallback, useEffect, useState } from 'react'
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'

const web3Modal = new Web3Modal({
  // network: "mainnet", // optional
  cacheProvider: true, // optional
  theme: 'dark',
  providerOptions: {
    walletconnect: {
      package: WalletConnectProvider, // required
    },
  },
})

function App() {
  const [injectedProvider, setInjectedProvider] = useState<any>()

  const loadWeb3Modal = useCallback(async () => {
    const provider = await web3Modal.connect()
    setInjectedProvider(new ethers.providers.Web3Provider(provider))
  }, [setInjectedProvider])

  useEffect(() => {
    if (web3Modal.cachedProvider) loadWeb3Modal()
  }, [loadWeb3Modal])

  return <CustomizeScreen />
}

export default App
