import Text from "../components/text";
import HeroBanner from "../components/HeroBanner";
import TravelArticle from "../components/TravelArticle";
import Footer from "../components/footer";


const Paris = () => {
    return (
      <div>
        <div>
        <HeroBanner
          imageSrc="/assets/paris1.jpg"
          title="Explore Paris"
          subtitle="with Voyage"
        />
        </div>
        <br></br>
        <br></br>
        
        <div class="mx-auto max-w-3xl text-center">
          <Text 
                title2="Explore Paris: The City of Love"
                text="Are you prepared for an extraordinary voyage to the City of Love? Picture yourself strolling along the romantic Seine River, gazing at the iconic Eiffel Tower, and savoring delectable pastries at charming street-side cafes. Welcome to Paris, where every corner is a work of art, and every experience feels like a page out of a fairytale. Get ready for an enchanting journey into the heart of this captivating city, where culture, cuisine, and grandeur blend seamlessly to create a truly magical experience. Paris awaits you with its timeless charm and unparalleled allure."
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
                imageUrl="/assets/parisDay1.jpg"
                title="Day 1: Arrival in the City of Love"
                description="Begin your Parisian adventure as you arrive at Charles de Gaulle Airport, where our friendly team extends a warm welcome.
                        Embark on a guided evening Seine River cruise, where you'll witness the magic of the city illuminated at night.
                        Savor a delightful dinner aboard the cruise, featuring French cuisine at its finest."
                link="https://www.getyourguide.com/-l2601/?cmp=ga&cq_src=google_ads&cq_cmp=6649799240&cq_con=79056013636&cq_term=seine%20river%20cruise&cq_med=&cq_plac=&cq_net=g&cq_pos=&cq_plt=gp&campaign_id=6649799240&adgroup_id=79056013636&target_id=kwd-149693176&loc_physical_ms=9008165&match_type=e&ad_id=388496773648&keyword=seine%20river%20cruise&ad_position=&feed_item_id=&placement=&device=c&partner_id=CD951&gad_source=1&gclid=Cj0KCQjw-pyqBhDmARIsAKd9XIPPqQ-2U26ZryqzXv_Pf1Bi-YfM-aB955_jEh9UOieu48ETXh4RKD4aAqXZEALw_wcB"
              />

              <br></br>
              <br></br> 

              <TravelArticle
                imageUrl="/assets/parisDay2.jpg"
                title="Day 2: Exploring Parisian Delights"
                description="Enjoy a scrumptious breakfast before a guided tour of Paris's most iconic attractions. Stop at the Eiffel Tower, Louvre Museum, Notre-Dame Cathedral, and Champs-Élysées.
                            Dive into the world of art at the Louvre, home to thousands of masterpieces, including the Mona Lisa.
                            Stroll through Montmartre's charming streets, and visit the awe-inspiring Sacré-Cœur Basilica."
                link="https://www.louvre.fr/en/visit/hours-admission"
              />    

              <br></br>
              <br></br>

              <TravelArticle
                imageUrl="/assets/parisDay3.jpg"
                title="Day 3: Culinary and Cultural Immersion"
                description="Satisfy your taste buds with a delectable breakfast at a local Parisian café.
                             Immerse yourself in the rich history and culture of the city with a guided tour of the Palace of Versailles.
                             Enjoy free time for shopping, leisure, or additional sightseeing.
                             In the evening, savor a farewell dinner at a traditional Parisian restaurant."
                link="https://www.cntraveler.com/gallery/best-restaurants-in-paris"
              />

            </div>
          </div>
        </div>

        <div class="mx-auto max-w-5xl text-center">
          <Text 
                title2="Why Choose Our Paris Tour Package:"
                text="Paris, the City of Love, holds endless enchantment for travelers. Our tour package offers a seamless and unforgettable experience. From luxurious accommodations in the heart of the city to guided tours of iconic landmarks, we provide the opportunity to immerse yourself in the charm, culture, and culinary delights of Paris. Our expertly planned itinerary ensures you make the most of your visit, leaving you with cherished memories and a desire to return. Let us make your Parisian dream a reality."
            />
        </div>

        <br></br>
        <br></br>

        <Footer></Footer>

      </div>
    );
  };
  
  export default Paris;