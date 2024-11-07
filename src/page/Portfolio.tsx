import Navbar from "../components/Navbar/navbar";
import Project from "../components/Project/Project";
import "./style.scss";

export const Portfolio = () => {
  const projects = [
    {
      title: "Pescue E-commerce",
      img: "/assets/pescue.jpg",
      description:
        "A multi-channel e-commerce platform supporting three key user roles: buyers, sellers, and administrators. Implemented full functionality: manage products, create livestreams, handle orders, and view sales statistics, purchase product, livestream, manage account, etc.",
      link: "https://github.com/AnhQuan832/Frontend",
      techs: ["angular", "spring-boot", "postgresql", "flask"],
    },
    {
      title: "Realtime Chat App",
      description:
        "A real-time chat application designed with user convenience in mind, fully responsive across devices. It offers complete functionality for users and utilizes RESTful APIs along with Socket.io.",
      link: "https://google.com",
      img: "https://placehold.co/100x100?text=Project2",
      techs: ["react", "nodejs", "expressjs", "redux", "mongodb"],
    },
    {
      title: "Project 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "https://google.com",
      img: "https://placehold.co/100x100?text=Project3",
      techs: ["react", "nodejs", "expressjs", "redux", "mongodb"],
    },
  ];
  return (
    <div className="bg-white dark:bg-black">
      <Navbar></Navbar>
      <section id="home" className="hero xl:min-h-screen">
        <svg viewBox="0 0 1500 500" data-aos="fade-down" className="min-w-40">
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            className="lg:text-9xl md:text-8xl mobile:text-7xl"
          >
            QUAN DANG
          </text>
        </svg>
        <h1 data-aos="zoom-in-up">
          Delivering Custom Frontend Solutions that <span>Stand Out</span>
        </h1>
        {/* <button data-aos="zoom-out">
              <span>Show my Work</span>
            </button> */}
      </section>

      <section id="about" className="py-20 bg-muted xl:min-h-screen">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3">
            <img
              src="/assets/profile.jpg"
              alt="Quan Dang"
              className="rounded-full mx-auto"
            />
          </div>
          <div className="w-full md:w-2/3 text-left px-8">
            <h1 className="title">About Me</h1>
            <p className="text-lg mb-4">
              Hello! I'm Quan Dang, a passionate frontend developer with a keen
              eye for design and a love for creating intuitive, responsive web
              applications. With 1 years of experience in the field, I
              specialize in Angular, React, and modern CSS frameworks like
              Tailwind, Bootstrap.
            </p>
            <p className="text-lg mb-4">
              When I'm not coding, you can find me exploring new web
              technologies, contributing to open-source projects, or sharing my
              knowledge through blog posts and community meetups. I believe in
              continuous learning and strive to stay at the forefront of web
              development trends.
            </p>
            <p className="text-lg">
              Let's collaborate and bring your web ideas to life!
            </p>
          </div>
        </div>
      </section>

      <section
        id="skill"
        className="skill xl:min-h-screen flex justify-center flex-col items-center"
      >
        <h1 data-aos="zoom-in-down" data-aos-delay="300" className="title">
          Skill
        </h1>

        <div
          className="skills flex flex-wrap justify-center w-full max-w-2xl "
          data-aos-delay="500"
        >
          <div
            data-aos="zoom-in-down"
            className="skill-box border-solid border-2 rounded-xl"
          >
            <img src="/assets/icon/html5.svg" alt="html" />
          </div>
          <div
            data-aos="zoom-in-down"
            className="skill-box border-solid border-2 rounded-xl"
          >
            <img src="/assets/icon/css3.svg" alt="css" />
          </div>
          <div
            data-aos="zoom-in-down"
            className="skill-box border-solid border-2 rounded-xl"
          >
            <img src="/assets/icon/javascript.svg" alt="javascript" />
          </div>
          <div
            data-aos="zoom-in-down"
            className="skill-box border-solid border-2 rounded-xl"
          >
            <img src="/assets/icon/typescript.svg" alt="typescript" />
          </div>
          <div
            data-aos="zoom-in-down"
            className="skill-box border-solid border-2 rounded-xl"
          >
            <img src="/assets/icon/react.svg" alt="react" />
          </div>
          <div
            data-aos="zoom-in-down"
            className="skill-box border-solid border-2 rounded-xl"
          >
            <img src="/assets/icon/angular.svg" alt="angular" />
          </div>
          <div
            data-aos="zoom-in-down"
            className="skill-box border-solid border-2 rounded-xl"
          >
            <img src="/assets/icon/bootstrap.svg" alt="bootstrap" />
          </div>
          <div
            data-aos="zoom-in-down"
            className="skill-box border-solid border-2 rounded-xl"
          >
            <img src="/assets/icon/tailwind.svg" alt="tailwind" />
          </div>
          <div
            data-aos="zoom-in-down"
            className="skill-box border-solid border-2 rounded-xl"
          >
            <img src="/assets/icon/nodejs.svg" alt="nodejs" />
          </div>
          <div
            data-aos="zoom-in-down"
            className="skill-box border-solid border-2 rounded-xl"
          >
            <img src="/assets/icon/mongodb.svg" alt="mongodb" />
          </div>
        </div>
      </section>

      <section
        id="project"
        className="project xl:min-h-screen flex justify-center items-center"
      >
        <div className="content">
          <h1 data-aos="zoom-in-down" data-aos-delay="300" className="title">
            Project
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {projects.map((project) => (
              <Project {...project}></Project>
            ))}
          </div>
        </div>
      </section>

      {/* <section id="contact" className="contact">
        <div className="container">
          <div className="content">
            <h1 data-aos="zoom-in-down" data-aos-delay="300" className="title">
              Contact
            </h1>

            <form
              data-aos="zoom-in-down"
              data-aos-delay="300"
              className="contact-form"
            >
              <div className="input">
                <input type="text" placeholder="Name..." />
                <input type="email" placeholder="Email..." />
                <input type="number" placeholder="Phone..." />
                <input type="text" placeholder="Subject..." />
              </div>
              <textarea name="message" placeholder="Message..."></textarea>
            </form>
          </div>
        </div>
      </section> */}

      {/* <footer>
        <div data-aos="fade-up" data-aos-duration="1000" className="container">
          <div className="profile">
            <div className="logo">
              <img src=".//assets/logo.png" alt="logo" />
              <h4>Quan Dang</h4>
            </div>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio quas libero expedita, similique est sed.
            </p>
            <div className="social-media-container">
              <div className="social-media">
                <box-icon color="#fff" type="logo" name="instagram"></box-icon>
              </div>
              <div className="social-media">
                <box-icon color="#fff" name="youtube" type="logo"></box-icon>
              </div>
              <div className="social-media">
                <box-icon
                  color="#fff"
                  name="facebook-circle"
                  type="logo"
                ></box-icon>
              </div>
              <div className="social-media">
                <box-icon color="#fff" type="logo" name="tiktok"></box-icon>
              </div>
            </div>
          </div>

          <div className="link-container">
            <div className="information">
              <h1>Skill</h1>
              <ul>
                <li>
                  <a href="#">React.js</a>
                </li>
                <li>
                  <a href="#">Next.js</a>
                </li>
                <li>
                  <a href="#">Alpine.js</a>
                </li>
                <li>
                  <a href="#">Tailwind CSS</a>
                </li>
                <li>
                  <a href="#">Typescript</a>
                </li>
              </ul>
            </div>

            <div className="resource">
              <h1>Technology</h1>
              <ul>
                <li>
                  <a href="#">Clerk Auth</a>
                </li>
                <li>
                  <a href="#">Prisma ORM</a>
                </li>
                <li>
                  <a href="#">Figma</a>
                </li>
                <li>
                  <a href="#">Github</a>
                </li>
                <li>
                  <a href="#">Shadcn UI</a>
                </li>
              </ul>
            </div>

            <div className="navigation">
              <h1>Navigation</h1>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Skill</a>
                </li>
                <li>
                  <a href="#">Project</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
};
