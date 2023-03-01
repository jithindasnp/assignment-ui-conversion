import React from 'react'
import BestDeals from '../components/BestDeals/BestDeals'
import Classified from '../components/Classified/Classified'
import ColorCards from '../components/ColorCards/ColorCards'
import FlashSale from '../components/FlashSale/FlashSale'
import Footer from '../components/Footer/Footer'
import Hotsale from '../components/Hotsale/Hotsale'
import Intro from '../components/Intro/Intro'
import Navbar from '../components/Navbar/Navbar'
import RecentlyViewed from '../components/RecentlyViewed/RecentlyViewed'
import Recommended from '../components/Recommended/Recommended'
import Topbar from '../components/Topbar/Topbar'

export default function Home() {
    return (
        <>
            <Topbar />
            <Navbar />
            <Intro />
            <BestDeals />
            <Classified/>
            <Recommended/>
            <FlashSale/>
            <Hotsale/>
            <ColorCards/>
            <RecentlyViewed/>
            <Footer/>
        </>
    )
}
