import Layout from "@/components/Layout";
import Link from 'next/link';
import { skills, experiences, projects } from '@/pages/profile';


export default function Home() {
  return (
    <Layout>
        {/* Header Card */}
        <header className="row">
        <div className="col-md-12">
          <div className="card card-body bg-secondary text-light animate__animated animate__fadeIn">
            <div className="row">
              <div className="col-md-4 text-center">
                <img src="/imagen.jpg" alt="profile me" className="img-fluid" />
              </div>
              <div className="col-md-8">
                <h1>Andres Felipe Jimenez Moncada</h1>
                <h3>FullStack Developer</h3>
                <p>
                  Aprendiz SENA  de analisis y desarrollo de software con conocimientos en el diseño frontend, apasionado por la tecnologia y el desarrollo de software con habilidades en trabajo individual o en equipo, facilidad de aprendizaje. 
                </p>
                <Link href="/hireme" className="btn btn-outline-light">
                  Hire Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <section className="row">
        <div className="col-md-4 py-2">
          <div className="card bg-light animate__animated animate__fadeInLeft">
            <div className="card-body">
              <h1>Skills</h1>

              {/* Skill Progress  */}
              {skills.map(({ skill, percentage }, i) => (
                <div className="py-3" key={i}>
                  <h5>{skill}</h5>
                  <div className="progress ">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${percentage}%` }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-md-8 py-2">
          {/* Experience */}
          <div className="card bg-light animate__animated animate__fadeInRight">
            <div className="card-body">
              <h1>Experience</h1>

              <ul>
                {/* List Item Experience */}
                {experiences.map(({ title, description, from, to }, index) => (
                  <li key={index}>
                    <h3>{title}</h3>
                    <h5>
                      {from} {to ? `- ${to}` : "- current"}
                    </h5>
                    <p>
                    {description}
                    </p>
                  </li>
                ))}
              </ul>
              <Link href="/hireme" className="btn btn-light">
                Know More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Porfolio */}
      <section>
        <div className="row">
          <div className="col-md-12">
            <div className="card card-body bg-dark">
              <div className="row">
                <div className="col-md-12 my-2">
                  <h1 className="text-center text-light">Portfolio</h1>
                </div>
                {projects.map(({ name, description, image }, index) => (
                  <div className="col-md-4 p-2" key={index}>
                    <div className="card h-100">
                      <div className="overflow">
                        <img src={`/${image}`} alt="" className="card-img-top" />
                      </div>
                      <div className="card-body">
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <a href="#!">Know More</a>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="col-md-12 mt-4">
                  <div className="text-center">
                    <Link href="/portafolio" className="btn btn-outline-light">
                      More Projects
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
