import React, { useEffect, useRef, useState } from "react";
import { Network, DataSet } from "vis-network";

// temp
import NetworkLogo from "../../assets/Icons/network/net_logo.svg";

import { nodes, edges, images, options } from "./network_setup";

import "./network.scss";

const NetworkDesign = () => {
  const container = useRef(null);
  const initializedRef = useRef(false);

  const [network, setNetwork] = useState(null);

  const segmentData = (data, index, segmentSize) => {
    // console.log("segmentSize", segmentSize);
    const segmentedData = [
      {
        id: 1,
        shape: "circularImage",
        image: NetworkLogo,
        size: 70,
        borderWidth: 0,
      },
    ];

    // console.log("currentindex", index);
    const currentImages = images.slice(index, index + segmentSize);
    // console.log("currentImages-0", currentImages);

    if (currentImages) {
      for (let i = 0; i < currentImages.length; i++) {
        // console.log("currentImages", currentImages[i]["image"]);
        segmentedData.push({
          id: i + 2,
          shape: "circularImage",
          image: currentImages[i]["image"],
        });
      }
      // console.log("segmentedData", segmentedData);
      // return false;

      return segmentedData;
    }
  };

  const initializeNetwork = () => {
    let currentIndex = 0;

    const networkInstance = new Network(container.current, {}, options);
    // setNetwork(networkInstance);

    const segmentedData = segmentData(images, currentIndex, 7); // Only take the first segment
    // console.log("segmentedData-7", segmentedData);

    const initialData = {
      nodes: segmentedData,
      edges: edges, // Add edges if needed
    };

    // console.log(" initialData", initialData);
    networkInstance.setData(initialData);
    // networkInstance.getSeed();
    // network === null && setNetwork(networkInstance);
    currentIndex = currentIndex += 7;
    const interval = setInterval(() => {
      currentIndex = currentIndex < images.length ? currentIndex + 7 : 0;
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
    // console.log("network", networkInstance);
    if (networkInstance) {
      const segmentedData = segmentData(images, currentIndex, 7); // Only take the first segment
      // console.log("segmentedData-7", segmentedData);
      const updatedData = {
        nodes: segmentedData,
        edges: edges,
      };
      // console.log("updatedData", updatedData);
      networkInstance.setData(updatedData);
    }
  };

  // console.log("network", network);

  return <div ref={container} className="network-cont" />;
};

export default NetworkDesign;
