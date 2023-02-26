import { ConnectButton, Link } from "web3uikit"

export default function Header() {
    return (
        <nav>
            <Link href="/">
                <a>NFT Marketplace</a>
            </Link>
            <Link href="/sell-nft">
                <a>Sell NFT</a>
            </Link>
            <ConnectButton />
        </nav>
    )
}
