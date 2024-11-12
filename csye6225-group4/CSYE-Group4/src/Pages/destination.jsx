import Text from "../components/text";
import AllLink from "../components/link";
import Footer from "../components/footer";
import HeroBanner from "../components/HeroBanner";
import { Link } from "react-router-dom";
import DestinationCardRight from "../components/DestinationCardRight";
import DestinationCardLeft from "../components/DestinationCardLeft";



const Destination = () => {
    return (
      <div> 
        {/* Hero card */}
        <div className="relative">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src="assets/topDestination.png"
                    alt="Picture of sea with waves and trees"
                  />
                </div>
                <div className="relative px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
                  <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">Embark on a Global Adventure</span>
                    <span className="block text-white">with Voyage</span>
                  </h1>
                  <p className="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl">
                    Explore our top destinations and embark on unforgettable journeys to the world's most captivating places.
                  </p>
                  <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                    <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                      <Link to="/login" className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-blue-700 shadow-sm hover:bg-indigo-50 sm:px-8"
                      >
                        Get started
                      </Link>
                      <Link to="/register" className="flex items-center justify-center rounded-md border border-transparent bg-blue-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
                      >
                        Register
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <br></br>
        <br></br> 
        
        <div className="mx-auto max-w-3xl text-center">
          <br></br>
          <Text title2="Discover the World's Most Enchanting Destinations"
                text="At Voyage, we're passionate about helping you discover the world's wonders, and our collection of top destinations is your gateway to unforgettable adventures. Whether you're seeking pristine beaches, cultural treasures, or thrilling experiences, our selection includes destinations that cater to every traveler's dreams.Browse through our featured destinations, discover the highlights, and imagine yourself strolling along the white-sand beaches of the Maldives, witnessing the Northern Lights in Iceland, or savoring delicious pastries in Paris. These destinations offer an array of experiences that will leave you with lasting memories. Ready to start your journey? Explore our top destinations and begin planning your next adventure today!"
          />
        </div>
        
        <div class="bg-white">
          <div class="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
            <div class="mt-16 space-y-16">
            <DestinationCardRight
              title="The Maldives"
              subtitle="A little slice of heaven on earth"
              description="Experience the allure of the Maldives with our exclusive tour package. This tropical paradise nestled in the Indian Ocean is a dream come true for beach lovers and water enthusiasts. Picture yourself on powdery white-sand beaches, surrounded by crystal-clear turquoise waters and vibrant coral reefs. Dive into a world teeming with marine life, embark on thrilling water sports, and savor sumptuous seafood. From luxury resorts to cultural exploration, the Maldives offers a blend of relaxation, adventure, and underwater wonders. Don't miss your chance to escape to this pristine tropical paradise with our all-inclusive tour package."
              imageUrl="assets/topDestination1.jpg"
              learnMoreLink="/destination/maldives"
            />

            <DestinationCardLeft
              title="Iceland"
              subtitle="Where Dreams Meet Reality"
              description="Embark on a journey to Iceland and witness nature's magnificence at its finest. From the mystical dance of the Northern Lights to the dramatic landscapes sculpted by volcanic forces, Iceland is a land of pure magic. Imagine relaxing in natural geothermal springs, exploring ice caves, and marveling at the roaring waterfalls. This is a place where every day feels like a chapter from a fantasy novel. Embrace the thrill of adventure while being surrounded by some of the world's most breathtaking scenery. Discover a land where dreams meet reality, and let Iceland weave its enchantment around you."
              imageUrl="assets/topDestination2.jpg"
              learnMoreLink="/destination/iceland"     
            />

            <DestinationCardRight
              title="Paris"
              subtitle="The City of Love and Elegance"
              description="Paris, often referred to as the City of Love, welcomes you with open arms. As you stroll along the Seine River, admire iconic landmarks like the Eiffel Tower and the Louvre. Savor exquisite pastries in charming cafes, discover art and culture at every corner, and immerse yourself in the romantic ambiance of the French capital. Paris is a city where history and modernity coexist, creating a unique blend of tradition and innovation. Whether you're exploring the grandeur of the Palace of Versailles or wandering through the Montmartre neighborhood, the enchanting spirit of Paris is ever-present. Experience the culinary delights of gourmet cuisine, witness the city's artistic soul, and fall in love with the elegance and charm of this timeless metropolis. Paris beckons you to create your own love story within its captivating streets."
              imageUrl="assets/topDestination3.jpg"
              learnMoreLink="/destination/paris"
            />

            </div>
          </div>
        </div>

        <Footer></Footer>
  </div>
    );
  };
  
  export default Destination;