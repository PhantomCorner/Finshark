import "@styles/globals.css";
import Nav from "./components/Nav";
import Provider from "./components/Provider";
export const metaData = {
  title: "Promptopia",
  description:
    "Promptopia is a platform for writers to share their work and get feedback from other writers. It is a place to find inspiration and motivation to write more. It is a place to find your voice and share it with the world.",
};
const Rootlayout = ({ children }) => {
  return (
    <html>
      <body>
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};
export default Rootlayout;
