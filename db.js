import { getDocs, addDoc, setDoc, deleteDoc, collection } from "firebase/firestore";

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

const nodeCollection = collection(db, "nodes").withConverter(nodeConverter);

export const getAllNodes = async () => {
  return await getDocs(nodeCollection).docs.map((doc) => doc.data());
};

export const addNode = async (node) => {
  await addDoc(nodeCollection, node);
};

export const setNode = async (node) => {
  await setDoc(nodeCollection, node);
};

export const deleteNode = async (id) => {
  await deleteDoc(nodeCollection, id);
};
