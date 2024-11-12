import Footer from "../components/footer";
import HeroBanner from "../components/HeroBanner";
import Packagetext from "../components/Packagetext";
import DestinationCard from "../components/DestinationCard"


const Packages = () => {
    return (
      <div>
        <div>
        <HeroBanner
          imageSrc="public/assets/tourpackages.jpg"
          title="Explore the World"
          subtitle="with Voyage"
        />
        </div>

        <div class="bg-white">
          <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <Packagetext
              text="Explore our top destinations, 50% off. Hurry, Register now!!!"
            />

            <br></br>
            <br></br>
          
            <div class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
                <DestinationCard
                  imageSrc="public/assets/maldives.jpg"
                  title="Maldives Mystique"
                  description="Embark on a journey to experience the unique charm of Maldives' island getaways."
                  discount="50% Off!!"
                  price="$250"
                />
                <DestinationCard
                  imageSrc='public/assets/iceland1.jpg'
                  title='Icelandic Chronicles'
                  description='Unveil the Arctic adventures that await in Iceland.'
                  discount='50% Off!!'
                  price= '$300'
                />
                <DestinationCard
                  imageSrc='public/assets/parisDay1.jpg'
                  title='Parisian Wonders'
                  description='Explore the elegance and rich culture of the "City of Lights.'
                  discount='50% Off!!'
                  price='$300'
                />

            </div>

            <br></br>
            <br></br>

            <Packagetext
              text="Explore our 10 Day Tour Packages"
            />

            <br></br>
            <br></br>

            <div class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
                  <DestinationCard
                    imageSrc="public/assets/tajmahal.jpg"
                    title="Incredible India"
                    description="Discover the Mystique of India: A Journey Like No Other."
                    discount="10 Day Tour Package"
                    price="$250"
                  />
                  <DestinationCard
                    imageSrc='public/assets/china.jpg'
                    title='Intriguing China'
                    description='The Gateway to a World of Traditions, Temples, and Technology'
                    discount='10 Day Tour Package'
                    price= '$250'
                  />
                  <DestinationCard
                    imageSrc='public/assets/santorini.jpg'
                    title='Whispers of Santorini'
                    description='Explore the Enchanting Aegean Gem.'
                    discount='10 Day Tour Package'
                    price='$250'
                  />  
            </div>

            <br></br>
            <br></br>

            <Packagetext
              text="Explore our 5 Day Tour Packages"
            />

            <br></br>
            <br></br>

            <div class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
                  <DestinationCard
                    imageSrc="public/assets/canyon.jpg"
                    title="Wonders of the Grand Canyon"
                    description="Experience the grandeur of the Grand Canyon, where nature's artwork comes to life."
                    discount="5 Day Tour Package"
                    price="$200"
                  />
                  <DestinationCard
                    imageSrc='public/assets/singapore.jpg'
                    title='Singapore Unwrapped'
                    description='Discover the extraordinary tapestry of Singapore, where modern marvels and cultural treasures intertwine.'
                    discount='5 Day Tour Package'
                    price= '$350'
                  />
                  <DestinationCard
                    imageSrc='public/assets/venice.jpg'
                    title='Gondolas & Grandeur'
                    description='Uncover the enchanting tapestry of Venice, where timeless beauty and historic wonders entwine.'
                    discount='5 Day Tour Package'
                    price='$280'
                  />
              </div>

              <br></br> 
              <br></br>

              <Packagetext
                text="Explore our 3 Day Getaway Packages"
              />

              <br></br>
              <br></br>

              <div class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
                    <DestinationCard
                      imageSrc="public/assets/vegas.jpg"
                      title="Vegas Vibrance"
                      description="Discover the captivating essence of Las Vegas, where excitement and entertainment converge in a vibrant tapestry of experiences."
                      discount="3 Day Getaway Package"
                      price="$399"
                    />
                    <DestinationCard
                      imageSrc='public/assets/alaska.jpg'
                      title='Alaska Escapade'
                      description='Explore the untamed wilderness of Alaska, where natural wonders and rugged landscapes weave a breathtaking tapestry of adventure.'
                      discount='3 Day Getaway Package'
                      price= '$330'
                    />
                    <DestinationCard
                      imageSrc='public/assets/chicago.jpg'
                      title='Chicago Chronicles'
                      description='Explore the vibrant heart of Chicago, where a world of cultural diversity and urban delights await.'
                      discount='3 Day Getaway Package'
                      price='$320'
                    />
              </div>


          </div>
        </div>

        <br></br>

        <Footer></Footer>



      </div>
      
    );
  };
  
  export default Packages;