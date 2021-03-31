import { CustomizeScreen } from './screens'
import { ethers } from 'ethers'
import { useCallback, useState } from 'react'
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'

function App() {
  const [injectedProvider, setInjectedProvider] = useState<any>()
  console.debug(injectedProvider)

  const web3Modal = new Web3Modal({
    // network: "mainnet", // optional
    cacheProvider: true, // optional
    providerOptions: {
      walletconnect: {
        package: WalletConnectProvider, // required
      },
    },
  })

  const loadWeb3Modal = useCallback(async () => {
    const provider = await web3Modal.connect()
    setInjectedProvider(new ethers.providers.Web3Provider(provider))
  }, [setInjectedProvider])
  loadWeb3Modal()

  return <CustomizeScreen />
}

export default App
