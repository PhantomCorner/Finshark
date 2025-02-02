import Feed from "./components/Feed";
export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center>">
        Discover and share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <Feed />
    </section>
  );
}
