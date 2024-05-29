import React, { useEffect, useRef, useState } from "react";
import { Network, DataSet } from "vis-network";
import { useQuery, useLazyQuery } from "@apollo/client";

// temp
import NetworkLogo from "../../assets/Icons/network/net_logo.svg";
// api
import { getMembersImages } from "../../api/index";
import { apiurl } from "../../api/API_URL";

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
  const [getImages, { loading, error, data: images }] =
    useLazyQuery(getMembersImages);

  const handleGetImages = (currentPage) => {
    getImages({ variables: { currentPage: currentPage, pageSize: 9 } });
  };

  useEffect(() => {
    handleGetImages(1);
  }, []);

  const segmentData = (data) => {
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

    const currentImages = data;
    const displayArraySize = currentImages.length;
    let displayImages = [];
    if (displayArraySize === showImages) {
      displayImages = currentImages;
    } else {
      const remainingItemsNeeded = showImages - displayArraySize;
      const additionalItems = data.slice(0, remainingItemsNeeded);
      const reslicedArray = currentImages.concat(additionalItems);
      displayImages = reslicedArray;
    }
    let tempImage;
    for (let i = 0; i < showImages; i++) {
      const { attributes } = displayImages[i];
      const getImage = attributes?.Image?.data?.attributes?.url;
      if (getImage) {
        tempImage = getImage;
      }
      const displayImage = `${apiurl}${tempImage}`;
      const nodeDetails = {
        id: i + 2,
        size: 90,
        borderWidth: 4,
        fixed: true,
        label: `${i + 1}`,
        shape: "circularImage",
        image: displayImage,
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
    let currentPage = 0;
    const networkInstance = new Network(container.current, {}, options);
    const membersImages = images?.members?.data;
    const segmentedData = segmentData(membersImages); // Only take the first segment
    const initialData = {
      nodes: segmentedData,
      edges: edges, // Add edges if needed
    };

    networkInstance.setData(initialData);
    currentPage = currentPage += 1;
    const interval = setInterval(() => {
      handleGetImages(currentPage);
      currentPage = currentPage += 1;
      updateNetworkData(networkInstance);
    }, 50000);

    return () => clearInterval(interval);
  };

  // Run initializeNetwork only once
  if (!initializedRef.current && container.current) {
    if (images) {
      initializeNetwork();
      initializedRef.current = true;
    }
  }

  const updateNetworkData = (networkInstance) => {
    if (networkInstance) {
      const membersImages = images?.members?.data;
      // return false;
      const segmentedData = segmentData(membersImages); // Only take the first segment
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
