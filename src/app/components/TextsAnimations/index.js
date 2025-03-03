"use client";
import React from "react";
import { motion } from "framer-motion";

// Helper function to extract text while preserving structure
const extractText = (node) => {
  if (typeof node === "string") return node; // Return text nodes
  if (Array.isArray(node)) return node.map(extractText).join(""); // Handle arrays of nodes
  if (React.isValidElement(node)) return extractText(node.props.children); // Recursive extraction
  return ""; // Default case
};

const TextAnimation = ({ children }) => {
  if (!React.isValidElement(children)) {
    console.error("TextAnimation expects a single React element as a child.");
    return null;
  }

  const { children: textContent, ...props } = children.props;
  const text = extractText(textContent); // Extract text from JSX
  const textArray = text.split(/( )/); // Preserve spaces

  return React.cloneElement(
    children,
    props,
    textArray.map((char, index) => (
      <motion.span
        key={index}
        initial={{ y: 70, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: (index / 10) * 0.9 }}
        style={{ display: "inline-block", whiteSpace: "pre" }}
      >
        {char === " " ? "\u00A0" : char} {/* Preserve spaces */}
      </motion.span>
    ))
  );
};



const WordAnimation = ({ children }) => {
  if (!React.isValidElement(children)) {
    console.error("WordAnimation expects a single React element as a child.");
    return null;
  }

  const { children: text, ...props } = children.props;
  const textArray = text.split(/( )/); // Preserve spaces between words

  return React.cloneElement(
    children,
    props,
    textArray.map((word, index) => (
      <motion.span
        key={index}
        initial={{ y: 70, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: (index / 10) * 0.1 }}
        style={{ whiteSpace: "pre", display: "inline-block" }} // Keep spaces intact
      >
        {word === " " ? "\u00A0" : word} {/* Preserve spaces */}
      </motion.span>
    ))
  );
};

export { TextAnimation, WordAnimation };
