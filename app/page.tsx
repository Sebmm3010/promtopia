import { Feed } from "@components";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Descubrir & compartir
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          {" "}
          AI-Powered Prompts{" "}
        </span>
      </h1>
      <p className="desc text-center">
        Promptopia es una herramienta de generación de Al de código abierto para
        el mundo moderno que permite descubrir, crear y compartir indicaciones
        creativas.
      </p>

      {/* Feed */}
      <Feed />
    </section>
  )
}

export default Home;
