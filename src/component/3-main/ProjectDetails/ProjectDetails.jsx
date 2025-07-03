import "./projectDetails.css";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import projectsData from "../myprojects.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";

export default function ProjectDetails() {
  const { id } = useParams();
  const [markdown, setMarkdown] = useState("# Project Details");
  const project = projectsData.find((p) => String(p.id) === id);
  const isSingleImage = project?.imgpath?.length === 1;

  useEffect(() => {
    if (project.README) {
      fetch(project.README)
        .then((res) => res.text())
        .then(setMarkdown)
        .catch(() => setMarkdown("# Project Details"));
    }
  }, [project.README]);

  if (!project) {
    return <p className="not-found">Error 404: Project Not Found</p>;
  }

  return (
    <div className="page-wrapper">
      <div className="project-details-container">
        <button
          className="back-button"
          aria-label="Go back"
          onClick={() => window.history.back()}
        >
          <svg
            viewBox="0 0 16 16"
            fill="none"
            className="back-icon"
            aria-hidden="true"
          >
            <path
              d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="content-wrapper">
          <div className="article-box">
            <article>
              <header className="article-header">
                <time className="article-date" dateTime={project.Date}>
                  <span className="date-dot"></span>
                  <span>{project.Date || "Unknown Date"}</span>
                </time>
                <h1 className="article-title">
                  <Typewriter
                    words={[project.title || "Project Title"]}
                    loop={1}
                    typeSpeed={70}
                    delaySpeed={1000}
                  />
                </h1>
                <p>{project.subtitle}</p>
                <div className="icons">
                  {project.link && (
                    <a
                      className="icon-link"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    ></a>
                  )}
                  {project.github && (
                    <a
                      className="icon-github"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    ></a>
                  )}
                </div>
              </header>
              {project.imgpath && (
                <Swiper
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: isSingleImage ? 1 : 2,
                    },
                  }}
                  spaceBetween={10}
                  navigation={!isSingleImage}
                  loop={!isSingleImage}
                  modules={[Navigation]}
                  className={`mySwiper ${isSingleImage ? "single-slide" : ""}`}
                >
                  {project.imgpath.map((img, index) => (
                    <SwiperSlide key={`${project.id}-slide-${index}`}>
                      <img
                        src={img}
                        alt={
                          project.title
                            ? `${project.title} screenshot ${index + 1}`
                            : `Project ${index + 1}`
                        }
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
              {project.more && <div className="article-body"></div>}
              {markdown && (
                <div className="markdown-body README">
                  <ReactMarkdown>{markdown}</ReactMarkdown>
                </div>
              )}
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
