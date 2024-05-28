import React, { useEffect, useRef, useState } from "react";
import { Network, DataSet } from "vis-network";

// temp
import NetworkLogo from "../../assets/Icons/network/net_logo.svg";

import { edges, images, options, imagePostion } from "./network_setup";

import "./network.scss";

const NetworkDesign = () => {
  const container = useRef(null);
  const initializedRef = useRef(false);
  // no of images to show in network design
  const showImages = 9;

  const segmentData = (data, index, segmentSize) => {
    const segmentedData = [
      {
        id: 1,
        shape: "circularImage",
        image: NetworkLogo,
        size: 120,
        x: -550,
        y: 60,
        borderWidth: 0,
      },
    ];

    const currentImages = images.slice(index, index + segmentSize);

    if (currentImages.length === 9) {
      for (let i = 0; i < currentImages.length; i++) {
        const nodeDetails = {
          id: i + 2,
          size: 60,
          borderWidth: 4,
          shape: "circularImage",
          image: currentImages[i]["image"],
          shapeProperties: { useBorderWithImage: true },
          color: {
            border: "#FBAF1A80",
          },
          x: imagePostion[i]["x"],
          y: imagePostion[i]["y"],
        };
        segmentedData.push(nodeDetails);
      }

      return segmentedData;
    }
  };

  const initializeNetwork = () => {
    let currentIndex = 0;

    const networkInstance = new Network(container.current, {}, options);

    const segmentedData = segmentData(images, currentIndex, showImages); // Only take the first segment

    const initialData = {
      nodes: segmentedData,
      edges: edges, // Add edges if needed
    };

    networkInstance.setData(initialData);
    currentIndex = currentIndex += showImages;
    const interval = setInterval(() => {
      currentIndex =
        currentIndex < images.length ? currentIndex + showImages : 0;
      updateNetworkData(currentIndex, networkInstance);
    }, 5000);

    return () => clearInterval(interval);
  };

  // Run initializeNetwork only once
  if (!initializedRef.current && container.current) {
    initializeNetwork();
    initializedRef.current = true;
  }

  const updateNetworkData = (currentIndex, networkInstance) => {
    if (networkInstance) {
      const segmentedData = segmentData(images, currentIndex, showImages); // Only take the first segment
      const updatedData = {
        nodes: segmentedData,
        edges: edges,
      };
      networkInstance.setData(updatedData);
    }
  };

  return <div ref={container} className="network-cont" />;
};

export default NetworkDesign;
