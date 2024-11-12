import React from "react";
import Text from "../components/text";
import AllLink from "../components/link";
import Indeximage from "../components/indeximage";
import Footer from "../components/footer";
import Maindestinationcard from "../components/Maindestinationcard";
import Home_text from "../components/Home_text";
import TestimonialContent from "../components/TestimonialContent";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <div className="relative isolate">
      <div className="overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-2xl gap-x-14 lg:flex lg:max-w-none lg:items-center">
            <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Voyage</h1>
              <br />
              <h5 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Your Journey, Our Passion</h5>
              <p className="relative mt-4 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                We believe in the power of exploration, the thrill of adventure, and the magic of discovering new horizons. Join us as we embark on a voyage like no other, where every step is a story, and every moment is an unforgettable memory. Let's make your journey extraordinary, together!
              </p>
              <div className="mt-4 flex items-center gap-x-6"> 
                <Link to="/destination" target='_blank' className="text-sm font-semibold leading-6 text-gray-900">Get Started <span aria-hidden="true">→</span></Link>
              </div>
            </div>
            <div className="mt-4 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-0 lg:mt-0 lg:pl-0"> {/* Adjusted the margin-top here */}
              <div className="ml-auto w-36 flex-none space-y-8 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                <div className="relative">
                  <Indeximage className="northernlights.jpg" src="public/assets/northernlights.jpg" alt="Picture of Northern Lights" />
                </div>
              </div>
              <div className="mr-auto w-36 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                <div className="relative">
                  <Indeximage className="paris.jpg" src="public/assets/paris.jpg" alt="Picture of Paris" />
                </div>
                <div className="relative">
                  <Indeximage className="switzerland.jpg" src="public/assets/switzerland.jpg" alt="Picture of Switzerland" />
                </div>
              </div>
              <div className="w-36 flex-none space-y-8 pt-32 sm:pt-0">
                <div className="relative">
                  <Indeximage className="maldives.jpg" src="public/assets/maldives.jpg" alt="Picture of Maldives" />
                </div>
                <div className="relative">
                  <Indeximage className="prague.jpg" src="public/assets/prague.jpg" alt="Picture of Prague" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Home_text></Home_text>

    <div className="relative bg-gray-50 px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3"></div>
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Find Your Next Travel Tale</h2>
          <p className="mx-auto mt-3 max-w-4xl text-xl text-gray-500 sm:mt-4">
            Discover a world of enchanting destinations and captivating experiences with us. Dive into a realm of picturesque landscapes, rich cultures, and thrilling adventures that will leave you with unforgettable stories to tell. Your next travel tale begins here.
          </p>
          <br />
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {/* Destination 1 */}
          <Maindestinationcard
              imageSrc="/assets/main_attraction_1.jpg"
              altText="Picture of Maldives"
              title="Maldives"
              description="In the Maldives, you'll discover a realm of unmatched opulence where pristine white-sand beaches beckon beneath endless blue skies. This paradisiacal haven also unveils a captivating underwater world, offering a perfect setting for an extraordinary vacation that will remain etched in your memories forever."
              link="/destination/maldives"
          ></Maindestinationcard>

          {/* Destination 2 */}
          <Maindestinationcard
              imageSrc="/assets/main_attraction_2.jpg"
              altText="Picture of Icaeland"
              title="Iceland"
              description="Iceland, the land of fire and ice, is a magical destination that will leave you spellbound with its dramatic landscapes, majestic glaciers, and awe-inspiring natural wonders. Explore the land of the midnight sun and the northern lights, and discover a world of enchanting beauty and adventure."
              link="/destination/iceland"
          ></Maindestinationcard>

          {/* Destination 3 */}
          <Maindestinationcard
              imageSrc="/assets/main_attraction_3.jpg"
              altText="Picture of Paris"
              title="Paris"
              description="Paris, the City of Lights, is a dream destination that will sweep you off your feet with its timeless beauty, rich history, and romantic charm. From the iconic Eiffel Tower to the magnificent Louvre, Paris is a treasure trove of enchanting sights and experiences that will leave you mesmerized."
              link="/destination/paris"
          ></Maindestinationcard>
          </div>
        </div>
      
    </div>

    <div className="relative overflow-hidden bg-white">
      {/* Decorative background image and gradient */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 mx-auto max-w-full overflow-hidden xl:px-8">
          <img src="/assets/bg.jpg" alt="" className="h-full w-full object-cover object-center" />
        </div>
        <div className="absolute inset-0 bg-white bg-opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white"></div>
      </div>
      <br /><br />

      {/* Testimonials */}
      <section aria-labelledby="testimonial-heading" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2 id="testimonial-heading" className="text-2xl font-bold tracking-tight text-gray-900">What are people saying?</h2>

          <div className="mt-16 space-y-16 lg:grid lg:grid-cols-3 lg:gap-x-9 lg:space-y-0">
            {/* Testimonial 1 */}
            <TestimonialContent
                content="Our trip to Maldives was a dream come true. The luxury overwater bungalows, the crystal-clear waters, and vibrant marine life exceeded our expectations. We'll cherish the memories of snorkeling with turtles and witnessing stunning sunsets forever."
                author="Emily Anderson, New York City, USA"
            />


            {/* Testimonial 2 */}
            <TestimonialContent
                content="Iceland's rugged landscapes and stunning waterfalls left us in awe. The experience of witnessing the Northern Lights dancing across the Arctic sky was truly magical. Our journey through this enchanting country was a breathtaking adventure"
                author="John Smith, London, UK"
            />
            

            {/* Testimonial 3 */}
            <TestimonialContent
                content="Paris, with its romantic ambiance and iconic landmarks, was everything we imagined. The Louvre, Eiffel Tower, and delectable pastries made our stay unforgettable. Exploring the charming streets of Montmartre and indulging in French cuisine were highlights of our trip."
                author="Sarah Jones, Paris, France"
            />
            
          </div>
        </div>
      </section>
    </div>



    <div>
      <Footer></Footer>
    </div>
    </>
        
    );
  };
  
  export default Home;