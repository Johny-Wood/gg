import Qualification from "../components/Qualification";
import Statisics from "../components/Statistics";

export default function Account() {
  return (
    <article className="main__wrap">
      <section className="main__content">
        <Qualification />
        <Statisics />
      </section>
    </article>
  );
}
