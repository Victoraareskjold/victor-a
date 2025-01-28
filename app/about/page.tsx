"use client";

export default function About() {
  return (
    <main className="gap-6">
      <img
        src="/profileimg.jpeg"
        alt="Profile Picture"
        className="w-48 ml-2 rounded-full"
      />
      <p className="dark:text-[var(--color-lightWhite)]">
        I have always had a strong interest in technology, which has driven me
        to explore and experiment with various projects over the past three
        years. During this time, I have honed my problem-solving skills by
        helping friends and family with diverse tech solutions, from
        troubleshooting software to creating small, tailored applications.
        <br />
        <br />
        Alongside my personal projects, I am currently enrolled in a pre-course
        for data engineers. This course has been a valuable opportunity to
        strengthen my foundation in key subjects such as mathematics and physics
        for engineers. These studies are not only deepening my understanding of
        the engineering field but are also equipping me with analytical tools
        that I can bring into real-world challenges.
        <br />
        <br />I am passionate about continuous learning and enjoy tackling
        challenges that push me to grow both technically and personally. Whether
        it’s exploring new technologies, collaborating with others, or solving
        complex problems, I am always eager to take on the next opportunity.
      </p>
    </main>
  );
}
