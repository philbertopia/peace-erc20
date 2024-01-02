import { ConnectWallet, useAddress, useClaimToken, useTokenBalance, useTokenDrop, useTokenSupply } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  const [amount, setAmount] = useState();
  const address = useAddress();
  const tokenDrop = useTokenDrop("0x75959715E8002ee89911A4B1b059b5A0D14a2ec8");
  const { data: tokenSupply } = useTokenSupply(tokenDrop);
  const { data: tokenBalance } = useTokenBalance(tokenDrop, address);
  const { mutate: claimTokens, isLoading } = useClaimToken(tokenDrop);




  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Navbar />
        <div className={styles.header}>
          <h1 className={styles.title}>
            $PEACE ☮︎✌︎︎☯︎🕊️
          </h1>
          <h2>World Peace & Artistic Freedom!</h2>
        </div>

        <div className={styles.claim}>
          <h2>Claim Tokens</h2>
          <p>Claim ERC20 tokens</p>
          <p>Limit 500 tokens per wallet</p>
          
          <div className={styles.input}>
            <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
            <button onClick={() => claimTokens({ amount, to: address })} disabled={isLoading}>Claim</button>
          </div>
          {amount > 0 && (
              <p>{amount} {tokenBalance?.symbol} = {amount * 0.01} Mumbai MATIC</p>
          )} 
          <p>Your token supply: {tokenSupply?.displayValue}</p>
          <p>Your token balance: {tokenBalance?.displayValue}</p>
          <div className={styles.connectWallet}>
              <ConnectWallet
                dropdownPosition={{
                  side: "bottom",
                  align: "center",
              }}
            />
            </div>
        </div>

        <div className={styles.info}>
          <h2>
            Claiming Your $PEACE Tokens: A Guide to Joining the Movement
          </h2>

          <p>
            Claiming your &aposPEACE tokens is the first step to becoming a part of this revolutionary community. Here's how to get started:
          </p>

          <p>
            1. Acquire some Mumbai MATIC: Since &aposPEACE is initially deployed on the Mumbai testnet, you'll need some testnet MATIC to cover gas fees for claiming your tokens. You can get free Mumbai MATIC from various faucets, like Polygon Faucet (https://faucet.polygon.technology/).
          </p>

          <p>
            2. Connect your wallet: Head to the $PEACE claim website (insert website link here) and connect your cryptocurrency wallet (MetaMask, WalletConnect, etc.). Ensure your wallet is connected to the Mumbai network.
          </p>

          <p>
            3. Claim your $PEACE: Once connected, enter your ENS name (or public Ethereum address) in the designated field. Remember, only ENS names configured with a resolver will be eligible for claiming.
          </p>

          <p>
            4. Pay the gas fee: After submitting your ENS name, a pop-up will appear in your wallet requesting confirmation for the gas fee required to process your claim. Approve the transaction, and voila! Your $PEACE tokens will be credited to your wallet after a successful claim.
          </p>

          <p>
            5. Join the community: Explore the $PEACE website and Discord server (link here) to discover resources, connect with fellow creators and peacemakers, and learn how to further engage with the movement.
          </p>

          <div className={styles.bullets}>
            <h1>About</h1>
            <ul>
              <li>Fuel artistic activism: Support creative projects for peacebuilding.</li>
              <li>Shape the future of peace: Participate in decentralized governance.</li>
              <li>Unleash your creative spirit: Connect with artists and collaborate.</li>
              <li>Invest in a harmonious world: Own a piece of a movement for change.</li>
              <li>Join a global community: Be part of a network committed to peace.</li>
            </ul>
          </div>
        </div>


      </div>
    </main>
  );
}
