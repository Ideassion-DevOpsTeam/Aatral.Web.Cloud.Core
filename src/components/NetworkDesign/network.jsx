import React, { useEffect, useRef, useState } from "react";
import { Network, DataSet } from "vis-network";

// temp
import NetworkLogo from "../../assets/Icons/network/net_logo.svg";

import {
  edges,
  images,
  options,
  imagePostion,
  showImages,
} from "./network_setup";

import "./network.scss";

const NetworkDesign = () => {
  const container = useRef(null);
  const initializedRef = useRef(false);
  // no of images to show in network design

  const segmentData = (data, index, segmentSize) => {
    const segmentedData = [
      {
        id: 1,
        shape: "circularImage",
        fixed: true,
        image: NetworkLogo,
        size: 150,
        x: -310,
        y: -100,
        borderWidth: 0,
      },
    ];

    const currentImages = images.slice(index, index + segmentSize);
    const displayArraySize = currentImages.length;
    let displayImages = [];
    if (displayArraySize === showImages) {
      displayImages = currentImages;
    } else {
      const remainingItemsNeeded = showImages - displayArraySize;
      const additionalItems = images.slice(0, remainingItemsNeeded);
      const reslicedArray = currentImages.concat(additionalItems);
      displayImages = reslicedArray;
      // console.log("reslicedArray", reslicedArray);
    }

    for (let i = 0; i < showImages; i++) {
      const nodeDetails = {
        id: i + 2,
        size: 90,
        borderWidth: 4,
        fixed: true,
        label: `${i + 1}`,
        shape: "circularImage",
        image: displayImages[i]["image"],
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
