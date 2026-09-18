import "../styles/global.css";

function AnimatedBackground() {
  return (
    <div className="animated-background" aria-hidden="true">
      <div className="grid-overlay"></div>

      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>

      <div className="circuit circuit-one"></div>
      <div className="circuit circuit-two"></div>
      <div className="circuit circuit-three"></div>

      <span className="node node-one"></span>
      <span className="node node-two"></span>
      <span className="node node-three"></span>
      <span className="node node-four"></span>
    </div>
  );
}

export default AnimatedBackground;