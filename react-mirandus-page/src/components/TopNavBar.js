import React from 'react'


const TopNavBar = () => {
  return (
    <section> 
        <nav>
            <a href='/Humans.js'>Humans</a>
            <a href='/Dwarves.js'>Dwarves</a>
            <a href="mirandushub.html" id="logo">Mirandus Hub</a>
            <ul class="nav-links">
                <div class="dropdown" data-dropdown>
                    <button class="link" data-dropdown-button>Explore NFTs</button>
                    <div class="dropdown-menu information-grid">
                        <div>
                            <div class="dropdown-heading">Exemplars</div>
                            <div class="dropdown-links">
                                <a href="#" class="link">Humans</a>
                                <a href="#" class="link">Dwarves</a>
                                <a href="#" class="link">Orcs</a>
                                <a href="#" class="link">Halflings</a>
                                <a href="#" class="link">Elves</a>
                            </div>
                        </div>
                        <div>
                            <div class="dropdown-heading">Buildings</div>
                            <div class="dropdown-links">
                                <a href="#" class="link">Stands</a>
                                <a href="#" class="link">Shops</a>
                                <a href="#" class="link">Large Shops</a>
                                <a href="#" class="link">Grand Shops</a>
                            </div>
                        </div>
                        <div>
                            <div class="dropdown-heading">Deeds</div>
                            <div class="dropdown-links">
                                <a href="#" class="link">Land</a>
                                <a href="#" class="link">Water</a>
                            </div>
                        </div>
                        <div>
                            <div class="dropdown-heading">Other</div>
                            <div class="dropdown-links">
                                <a href="#" class="link">Ships</a>
                                <a href="#" class="link">Dragons</a>
                                <a href="#" class="link">Other</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dropdown" data-dropdown>
                    <button class="link" data-dropdown-button>Content Creators</button>
                    <div class="dropdown-menu information-grid">
                        <div>
                            <div class="dropdown-heading">Mirandus Youtube Channels</div>
                            <div class="dropdown-links">
                                <a href="https://www.youtube.com/channel/UCr-oWd3jEt1Uf5HLTcBpAaw" class="link">HammerHammond23</a>
                                <a href="https://www.youtube.com/channel/UCkvh53Xjmbr9LyQxXVodufA" class="link">Farmers Guild</a>
                                <a href="https://www.youtube.com/channel/UCktLOdPFt0abyzeFe0tLELw" class="link">Masters of Materium</a>
                            </div>
                            <div class="dropdown-heading">Gala Youtube Channels</div>
                            <div class="dropdown-links  more-than-6">
                                <a href="https://www.youtube.com/c/OnChainGaming" class="link">On Chain Gaming</a>
                                <a href="https://www.youtube.com/channel/UCvmgfEPjOX2pShyj_y3qjwg" class="link">Drac Grinds Gala</a>
                                <a href="https://www.youtube.com/c/MetaverseInvestor" class="link">Metaverse Investor</a>
                                <a href="https://www.youtube.com/channel/UCn4i370tfhrjXOV3cjme_WQ" class="link">Gala Games News</a>
                                <a href="https://www.youtube.com/channel/UCUeA4vOgY0n-6oeESbVixOw" class="link">Eamon Kerrigan</a>
                                <a href="https://www.youtube.com/c/GalaGames" class="link">Gala Games</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dropdown" data-dropdown>
                    <button class="link" data-dropdown-button>Guilds</button>
                    <div class="dropdown-menu information-grid">
                        <div>
                            <div class="dropdown-heading">Mirandus Channels</div>
                            <div class="dropdown-links">
                                <a href="https://discord.gg/pDgS8P2Jm9" class="link">Masters of Materium</a>
                                <a href="https://discord.gg/khrGPaxvEe" class="link">Drunken Duck Taverns</a>
                                <a href="https://discord.gg/hTv3yjSJyX" class="link">Mirandus Farmers</a>
                                <a href="https://discord.gg/w8NmjrUfEE" class="link">NTM Crypto Gaming</a>
                            </div>
                        </div>
                    </div>
                </div>
            </ul>
            <div class="burger">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
        </nav>
    </section>
  )
}


export default TopNavBar