import { Link } from "next-view-transitions";
import { getBlogPosts } from "~~/blog";
import { projectItems } from "~~/lib/projects";
import { workItems } from "~~/lib/work";

function UpRightArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

function WorkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M12 12h.01" />
      <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <path d="M22 13a18.15 18.15 0 0 1-20 0" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 30 30"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export type ExperienceItem = {
  name: string;
  link: string;
  position: string;
  description: string;
  github?: string;
};

function ExperienceSection({
  title,
  items,
}: {
  title: string;
  items: ExperienceItem[];
}) {
  return (
    <section className="text-left">
      <h3 className="mb-6 text-xl font-medium">{title}</h3>
      {items.map((item, index) => (
        <div key={index}>
          {item.link ? (
            <div className="flex gap-2">
              <a
                href={item.link}
                target="_blank"
                className="font-medium underline decoration-neutral-400 decoration-[0.1em] underline-offset-2 dark:decoration-neutral-600"
              >
                {item.name}
              </a>
              {item.github && (
                <a
                  href={item.github}
                  target="_blank"
                  className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                >
                  <GithubIcon />
                </a>
              )}
            </div>
          ) : (
            <p className="font-medium underline decoration-neutral-400 decoration-[0.1em] underline-offset-2 dark:decoration-neutral-600">
              {item.name}
            </p>
          )}
          <p className="mt-2">{item.position}</p>
          <p className="mt-2 text-neutral-700 dark:text-neutral-300">
            {item.description}
          </p>
          {index !== items.length - 1 && <div className="mt-6"></div>}
        </div>
      ))}
    </section>
  );
}

export default function HomePage() {
  const posts = getBlogPosts()
    .sort(
      (a, b) =>
        new Date(b.metadata.date).getTime() -
        new Date(a.metadata.date).getTime(),
    )
    .slice(0, 4);

  return (
    <main className="text-left">
      <h1 className="mb-4 text-2xl font-medium tracking-tighter">
        leonardo trapani
      </h1>

      <div className="mb-4 flex flex-col gap-1">
        <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
          <LocationIcon />
          <p>milan, italy</p>
        </div>

        <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
          <WorkIcon />
          <p className="inline-flex">
            swe @&nbsp;
            <a
              href="https://datapizza.tech"
              target="_blank"
              className="font-medium underline decoration-neutral-400 decoration-[0.1em] underline-offset-2 dark:decoration-neutral-600"
            >
              datapizza
            </a>
            &nbsp;- startup founder
          </p>
        </div>
      </div>

      <ul className="font-sm my-6 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <Link
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="/resume.pdf"
          >
            <p className="mr-1 h-7">resume</p>
            <UpRightArrowIcon />
          </Link>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:leo@trapani.sh"
          >
            <p className="mr-1 h-7">email</p>
            <UpRightArrowIcon />
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/leonardotrapani/"
          >
            <p className="mr-1 h-7">linkedin</p>
            <UpRightArrowIcon />
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/leonardotrapani"
          >
            <p className="mr-1 h-7">github</p>
            <UpRightArrowIcon />
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.youtube.com/@leotrapani"
          >
            <p className="mr-1 h-7">youtube</p>
            <UpRightArrowIcon />
          </a>
        </li>
      </ul>

      <p className="prose prose-neutral dark:prose-invert">
        <b>software developer</b> and <b>entrepreneur</b>. i build exciting
        projects and engage in creative entrepreneurial endeavours. i turn mine
        and <b>your</b> ideas into reality, with the latest technologies in the
        software development space
      </p>

      <div className="my-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        <ExperienceSection title="work" items={workItems} />
        <ExperienceSection title="projects" items={projectItems} />
      </div>

      <h3 className="mb-6 text-xl font-medium">blog</h3>
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="">
            <div className="flex w-full justify-between">
              <p className="font-medium underline decoration-neutral-400 decoration-[0.1em] underline-offset-2 dark:decoration-neutral-600">
                {post.metadata.title.toLowerCase()}
              </p>
              <p className="text-nowrap text-sm text-neutral-600 dark:text-neutral-400">
                {new Date(post.metadata.date)
                  .toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })
                  .toLowerCase()}
              </p>
            </div>
          </Link>
        ))}

        <Link
          href="/blog"
          className="decoration-neutral-4000 font-medium underline decoration-[0.1em] underline-offset-2 dark:decoration-neutral-600"
        >
          all posts →
        </Link>
      </div>
    </main>
  );
}
