import { Spin } from "antd";

// styles
import "./loader.scss";

function LoaderComponent() {
  return (
    <section className="loader">
      <div className="loader__item-box">
        <Spin />
      </div>
    </section>
  );
}

export default LoaderComponent;
