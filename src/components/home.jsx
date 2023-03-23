import './home.scss';
import mathImage from '../mathIcons.png';

const Home = () => (
  <section className="home-section">
    <div className="home-text">
      <h2>Welcome to our page!</h2>
      <p>
        Welcome to our website with three different sections for your entertainment and usefulness.
        <br />
        The first section is a functional calculator,
        where you can perform mathematical calculations quickly and accurately.
        From simple additions and subtractions to more complex operations,
        our calculator is designed to provide you with an easy and efficient experience.
      </p>
      <p>
        The second section offers you a random phrase every time you visit.
        You can find inspiration, motivation or just enjoy a fun quote.
        We update our selection of phrases regularly so you always have a new one to discover.
      </p>
      <p>
        The third and final is our home, where you can find information about us,
        our social media channels and other interesting sections of our website.
        You can also find links to our other sections and useful tools you might need.
        We hope you enjoy our website and find it useful in your daily tasks.
        Thank you for visiting!
      </p>
    </div>
    <img src={mathImage} alt="Math icons" className="home-img" />
  </section>
);

export default Home;
