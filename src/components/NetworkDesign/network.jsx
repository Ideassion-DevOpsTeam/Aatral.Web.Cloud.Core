import React, { useEffect, useRef, useState } from "react";
import { Network, DataSet } from "vis-network";

// temp
import NetworkLogo from "../../assets/Icons/network/net_logo.svg";

import { edges, images, options } from "./network_setup";

import "./network.scss";

const NetworkDesign = () => {
  const container = useRef(null);
  const initializedRef = useRef(false);
  // no of images to show in network design
  const showImages = 7;

  const segmentData = (data, index, segmentSize) => {
    const segmentedData = [
      {
        id: 1,
        shape: "circularImage",
        image: NetworkLogo,
        size: 70,
        borderWidth: 0,
      },
    ];

    const currentImages = images.slice(index, index + segmentSize);

    if (currentImages) {
      for (let i = 0; i < currentImages.length; i++) {
        segmentedData.push({
          id: i + 2,
          shape: "circularImage",
          image: currentImages[i]["image"],
        });
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
    }, 2000);

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
