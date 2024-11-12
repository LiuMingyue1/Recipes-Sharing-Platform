import Text from "../components/text";
import TravelArticle from "../components/TravelArticle";
import Footer from "../components/footer";
import HeroBanner from "../components/HeroBanner";

const Iceland = () => {
    return (
      <div>
        <div>
          <HeroBanner
            imageSrc="/assets/iceland1.jpg"
            title="Explore Iceland"
            subtitle="with Voyage"
          />
        </div>
        <br></br>
        <br></br>
        <div class="mx-auto max-w-3xl text-center">
          <Text 
                title2="Journey to the Land of Fire and Ice: Iceland"
                text="Are you ready to explore a land of otherworldly beauty and adventure? Imagine yourself amidst Iceland's dramatic landscapes, where rugged terrain gives way to awe-inspiring waterfalls, and the Arctic sky dances with the Northern Lights. Welcome to Iceland, where every moment feels like a breathtaking adventure, and the line between reality and fantasy becomes beautifully blurred. Get ready for an extraordinary journey into the heart of this enchanting island."
            />
        </div>
        <br></br>
        <br></br>

        <div class="bg-white py-20 sm:py-24">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:max-w-4xl">
              <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Travel with us!</h2>
              <p class="mt-2 text-lg leading-8 text-gray-600">Learn more about our 3 day Itinerary</p>
              <div class="mt-16 space-y-20 lg:mt-20 lg:space-y-20"></div>

              <TravelArticle
                imageUrl="/assets/iceland1.jpg"
                title="Day 1: Arrival, Northern Lights, and City Exploration"
                description="Arrive at Keflavik International Airport, where the magic of Iceland begins
                After check-in, enjoy an evening tour to hunt for the mesmerizing Northern Lights (Aurora Borealis), a spectacular natural light display.
                If the Northern Lights make an appearance, you'll have the opportunity to witness this awe-inspiring phenomenon. Return to your hotel in Reykjavik."
                link="https://www.icelandhotelcollectionbyberjaya.com/en/hotels/reykjavik/reykjavik-natura?utm_source=triptease_attract&utm_medium=paid_search&utm_campaign=google_search&tt_api_key=85f80ff47cc24ac5ad9e5d3cdbc84305&tt_channel=paidsearch&gclid=Cj0KCQjw-pyqBhDmARIsAKd9XIMGPGnd2rfN2qDWbWw-kaifUBhji41F_CI7_tE0fOB_sYnV9HPefCUaAgU4EALw_wcB&tt_ps_tid=kwd-30646354006&tt_ps_mt=e&tt_ps_cid=19661649557&tt_ps_agid=147539572242&tt_ps_d=c&tt_ps_c=647692882469&tt_ps_ap=&gad_source=1"
              />

              <br></br>
              <br></br> 

              <TravelArticle
                imageUrl="/assets/icelandDay2.jpg"
                title="Day 2: Golden Circle Adventure"
                description="Witness the awe-inspiring Thingvellir National Park, where the North American and Eurasian tectonic plates meet.
                            Explore the geothermal wonders at Geysir geothermal area, including the famous Strokkur geyser.
                            Be captivated by the stunning Gullfoss waterfall. Savor Icelandic cuisine at a local restaurant."
                link="https://www.viator.com/tours/Reykjavik/Golden-Circle-Classic-Day-Trip-from-Reykjavik/d905-2970AH12"
              />    

              <br></br>
              <br></br>

              <TravelArticle
                imageUrl="/assets/icelandDay3.jpg"
                title="Day 3: South Coast Wonders and Waterfalls"
                description="Visit the iconic black sand beach at Reynisfjara, known for its dramatic basalt column formations and powerful waves.
                            Explore a magnificent Icelandic volcano to witness the geological wonders that shape this island.
                            Enjoy a sumptuous Icelandic lunch. Return to Reykjavik in the evening."
                link="https://www.viator.com/tours/Reykjavik/Small-Group-South-Coast-and-Glacier-Lagoon-Day-Tour-from-Reykjavik/d905-2970AH14"
              />

            </div>
          </div>
        </div>
        <div class="mx-auto max-w-5xl text-center">
          <Text 
                title2="Why Choose Our Iceland Tour Package:"
                text="Our meticulously crafted tour package offers a wealth of reasons to make us your travel companion. Experience the perfect blend of luxury and comfort in carefully selected accommodations, ranging from charming guesthouses to city hotels. Immerse yourself in the awe-inspiring natural beauty of Iceland with tours that include ice cave explorations, Northern Lights hunting, and lava tube adventures. Delight in the rich and authentic Icelandic cuisine, from delectable seafood to hearty local dishes. Best of all, our team takes care of every detail, ensuring your trip is hassle-free and focused on making lifelong memories. For a seamless, unforgettable, and adventure-packed journey, choose our Iceland tour package and discover the magic of this unique destination."
            />
        </div>

        <br></br>
        <br></br>
        
        <Footer></Footer>
      </div>
    );
  };
  
  export default Iceland;