import Herov2 from './HomePage/Herov2';
import TrustedPartners from './sections/TrustedPartners';
import Testimonials from './sections/Testimonials';
import FAQSection from './HomePage/FAQSection';
import CatCard from './HomePage/CatCard';
import RecentReports from './HomePage/RecentReports';




const Home = () => {
    return (
        <div>
            {/* Hero slider */}
            {/* <Carousel /> */}
            <Herov2 />
            <RecentReports />
            {/*  */}
            {/* <TrustedPartners /> */}

            {/* category wise querys  */}
            {/* <Queries /> */}
            {/* <StaticQueries /> */}
            {/* <CatCard /> */}

            {/* <LoadingSkeleton /> */}
            {/* <FAQSection /> */}
       
            {/* Testimonials */}
            {/* <Testimonials /> */}

        </div>
    );
};

export default Home;