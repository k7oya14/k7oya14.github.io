import Portfolio from "@/markdown/portfolio.mdx";
import SkillsAndInterests from "@/markdown/skills-interests.mdx";

export default function Page() {
  return (
    <main>
      <h1 className="mb-8 text-4xl font-bold tracking-tighter">My Portfolio</h1>
      <p className="mb-4">
        <b>
          My name is Koya Saka, an undergraduate student at the Waseda
          University.&nbsp;
        </b>
        I major in Electronic and Physical Systems, i.e., Electrical Engineering
        (<b>EE</b>), and minor in Computer Science (<b>CS</b>). I have a strong
        passion for the fusion of hardware and software, from circuit design to
        rich web/application development.
      </p>
      <section className="my-8 prose dark:prose-invert">
        <SkillsAndInterests />
      </section>
      <section className="my-8 prose dark:prose-invert">
        <Portfolio />
      </section>
    </main>
  );
}
