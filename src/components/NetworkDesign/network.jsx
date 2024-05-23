import React, { useEffect, useRef, useState } from "react";
import { Network } from "vis-network";

import { nodes, edges } from "./network_setup";

import "./network.scss";

const NetworkDesign = () => {
  const container = useRef(null);

  const options = {
    edges: {
      color: "#49494A",
    },
    interaction: {
      dragNodes: false,
      dragView: false,
      zoomView: false,
    },
    height: "100%",
    width: "100%",
    nodes: {
      borderWidth: 4,
      size: 41,
      color: {
        border: "#222222",
        outline: "#666666",
      },
    },
  };

  const data = {
    nodes: nodes,
    edges: edges,
  };

  useEffect(() => {
    const network =
      container.current && new Network(container.current, data, options);
  }, []);

  return <div ref={container} className="network-cont" />;
};

export default NetworkDesign;
