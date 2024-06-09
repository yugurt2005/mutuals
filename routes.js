import { getAllNodes } from "./db";

const nodes = new Map();

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const generateLocalGroup = (id) => {
  let localGroup = new Set();
  const node = nodes.get(id);
  for (const friend1 of node.friends) {
    const node1 = nodes.get(friend1);
    localGroup.add(friend1);
    for (const friend2 of node1.friends) {
      localGroup.add(friend2);
    }
  }
  return localGroup.values();
};

const isSubset = (a, b) => { // is a subset of b
    return true;
}

const generateClique = (id, size) => {
    const localGroup = generateLocalGroup(id); // TODO store as a property you don't have to call this function at all
    for (let i = 0; i < 20; i++) {
        const shuffled = shuffle(localGroup);
        const curr = [nodes.get(id)];
        for (const node of shuffled) {
            const nodeLocalGroup = generateLocalGroup(node.id);
            if (isSubset(curr, nodeLocalGroup)) {
                curr.push(node.id);
                if (curr.length >= size) {
                    return curr;
                }
            }
        }
    }
    return shuffle(localGroup).slice(0, size);
}

export const queryGroup = (req, res) => {
  const dbNodes = getAllNodes();
  for (const node of dbNodes) {
    nodes.set(node.id, node);
  }

  const id = req.body.id;
  const size = req.body.size;
  return generateClique(id, size);
};

export const addFriend = (req, res) => {
  const friendID = req.body.friendID;
  const nodeID = req.body.nodeID;
  if (friendID === undefined || !isFinite(friendID)) {
    res.status(400).send('Requirement argument "friendID" was missing.');
    return;
  }
  if (nodeID === undefined || !isFinite(nodeID)) {
    res.status(400).send('Requirement argument "nodeID" was missing.');
    return;
  }

  if (!nodes.has(nodeID) || !nodes.has(friendID)) {
    res.status(400).send("Nodes does not contain id.");
    return;
  }

  const node = nodes.get(nodeID);
  node.addFriend(friendID);

  res.send("Success!");
};

export const removeFriend = (req, res) => {
  const friendID = req.body.friendID;
  const nodeId = req.body.nodeID;

  if (friendID === undefined || !isFinite(friendID)) {
    res.status(400).send('Requirement argument "friendID" was missing.');
    return;
  }
  if (nodeID === undefined || !isFinite(nodeID)) {
    res.status(400).send('Requirement argument "nodeID" was missing.');
    return;
  }
  if (!nodes.has(nodeID) || !nodes.has(friendID)) {
    res.status(400).send("Nodes does not contain id.");
    return;
  }

  const node = nodes.get(nodeID);

  if (!node.friends.has(friendID)) {
    res.status(400).send("Friend is not in friends list");
    return;
  }

  node.removeFriend(friendID);
  res.send("Success!");
};
