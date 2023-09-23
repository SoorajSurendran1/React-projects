import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full pt-3 mb-10">
        <img src={logo} alt="img_logo" className="w-28 object-center" />
        <button
          type="button"
          onClick={() => window.open("")}
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Article with <br className="mx-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summarize, an open source that transforms
        lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
