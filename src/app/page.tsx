import SkillsAndInterests from "@/markdown/skills-interests.mdx";
import Experience from "@/markdown/experience.mdx";
import Portfolio from "@/markdown/portfolio.mdx";

export default function Page() {
  return (
    <main>
      <h1 className="mb-8 text-4xl font-bold tracking-tighter">My Portfolio</h1>
      <p className="mb-4">
        <b>
          My name is Koya Saka, an undergraduate student at Waseda University.
          <br />
        </b>
        I major in Electronic and Physical Systems, i.e., Electrical Engineering
        (EE), and minor in Computer Science (CS). I have a strong passion for
        the fusion of hardware and software, from circuit design to rich
        web/apps development.
      </p>
      <section className="my-8 prose dark:prose-invert">
        <SkillsAndInterests />
      </section>
      <section className="my-8 prose dark:prose-invert">
        <Experience />
      </section>
      <section className="my-8 prose dark:prose-invert">
        <Portfolio />
      </section>
    </main>
  );
}
