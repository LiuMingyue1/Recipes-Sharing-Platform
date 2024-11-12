import Footer from "../components/footer";
import HeroBanner from "../components/HeroBanner";
import Text from "../components/text";
import TravelArticle from "../components/TravelArticle";

const Maldives = () => {
    return (
      <div>
        <div>
        <HeroBanner
          imageSrc="/assets/maldives1.jpg"
          title="Explore Maldives"
          subtitle="with Voyage"
        />
        </div>
        <br></br>
        <br></br>
        <div className="mx-auto max-w-3xl text-center">
          <Text 
                title2="Escape to Paradise: The Maldives"
                text="Are you prepared to embark on an unforgettable tropical escapade unlike any other? Picture yourself standing on the shores of immaculate, velvety white-sand beaches, where every step sinks into the luxurious softness of the shoreline. The sun's warm embrace and the gentle caress of crystal-clear, turquoise waters make you feel like you've entered a dream world brought to life. Welcome to the Maldives, a destination where the boundaries between your dreams and reality blur into one magnificent experience"
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
                imageUrl="/assets/maldivesDay1.jpg"
                title="Day 1: Arrival in Paradise"
                description="Arrive at Velana International Airport and be greeted by our warm and friendly team. Transfer to your luxurious overwater bungalow or beachfront villa. Your accommodations are designed to offer breathtaking views and direct access to the clear blue lagoons. Spend the day at leisure. Relax on the beach, swim in the warm Indian Ocean, or simply take in the beauty of your surroundings."
                link="https://www.sunsiyam.com/?gclid=Cj0KCQjw-pyqBhDmARIsAKd9XINPDeqxy6cw4CDQWQGITjcjIfq178MPU1nOZzsOabIOUCPbP11DgDoaAttWEALw_wcB"
              />

              <br></br>
              <br></br> 

              <TravelArticle
                imageUrl="/assets/maldivesDay2.jpg"
                title="Day 2: Discover Underwater Wonders"
                description="After a delicious breakfast, embark on a snorkeling adventure. The Maldives is home to some of the most diverse and vibrant coral reefs in the world.
                      Dive into the crystal-clear waters and explore a dazzling underwater world teeming with marine life, including colorful fish, turtles, and rays.
                      Enjoy a romantic beachfront dinner under the starlit sky to complete your day."
                link="https://samudramaldives.com/tours/full-day-maldives-adventure-trip/"
              />    

              <br></br>
              <br></br>

              <TravelArticle
                imageUrl="/assets/maldivesDay3.jpg"
                title="Day 3: Cultural Exploration and Farewell"
                description="After breakfast, visit the local islands to experience the unique culture and traditions of the Maldivian people. Explore local markets, enjoy traditional cuisine, and interact with friendly locals.
                             Spend your last afternoon in the Maldives relaxing at the resort or indulging in optional water sports activities.
                             Bid farewell to this tropical paradise as we transfer you to the airport, taking with you cherished memories and a longing to return."
                link="https://www.maldives.com/destination-guides/maldives-itineraries/3-days-in-maldives/"
              />

            </div>
          </div>
        </div>

        
        <div className="mx-auto max-w-5xl text-center">
          <Text 
                title2="Why Choose Our Maldives Tour Package:"
                text="We provide you with opulent accommodations, including world-class resorts featuring overwater bungalows and beachfront villas for a truly luxurious and comfortable stay. Immerse yourself in unforgettable experiences as you explore the wonders of the Maldives through activities such as snorkeling, water sports, and cultural tours. Delight your taste buds with our culinary offerings, from fresh seafood to international cuisine, ensuring a delectable experience. Our commitment to hassle-free planning means we take care of all the details, allowing you to focus on creating lasting memories. Choose us for a Maldives journey that promises luxury, adventure, and culinary delights, all wrapped in seamless planning for an unforgettable experience."
            />
        </div>
        <br></br>
        <br></br>
        
        <Footer></Footer>

      
      </div>
      
    );
  };
  
  export default Maldives;