import { getDocs, collection } from "firebase/firestore";

import db from "./firestore.js";

import Node from "./node.js";

const nodeConverter = {
  toFirestore: function (node) {
    return {
      id: node.id,
    };
  },
  fromFirestore: function (snapshot, options) {
    const data = snapshot.data(options);
    return new Node(data.id);
  },
};

export const getAllNodes = async () => {
  const nodes = await getDocs(
    collection(db, "nodes").withConverter(nodeConverter)
  );
  return nodes.docs.map((doc) => doc.data());
};

export const createNode = async () => {};

export const updateNode = async () => {};

export const deleteNode = async () => {};
