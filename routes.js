import { getAllNodes } from "./db";
import { v4 as uuidv4 } from 'uuid';

const nodes = new Map();

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const checkClique = (ids) => {
  for (const id1 of ids) {
    for (const id2 of ids) {
      if (nodes.get(id1).friends.includes(id2)) {
        return false;
      }
    }
  }
  return true;
}

const findClique = (id, cliqueSize) => {
  for (let k = 0; i < 20; i++) {
    const friends = nodes.get(id).friends;
    const ids = [];
    for (let i = 0; i < cliqueSize; i++) {
      const index = Math.floor(Math.random() * (i + 1));
      const id = friends[index];
      if (ids.includes(id)) {
        i--;
      } else {
        ids.push(id);
      }
    }

    if (checkClique(ids)) {
      return ids;
    }
  }
  return undefined;
};

const createGroup = (id, cliqueSize, groupSize) => {
  const cliqueIds = findClique(id, cliqueSize);
  const group = new Set();
  for (const id of cliqueIds) {
    nodes[id].friends.forEach(item => group.add(item));
  }

  shuffle(group);
  result = [];
  group.forEach((item, _set) => {
    let count = 0;
    for (const id of cliqueIds) {
      if (item.friends.includes[id]) {
        count++;
      }
    }
    if (count < cliqueIds.length) {
      result.append(item);
      if (result.length === groupSize) {
        return;
      }
    }
  });

  result.push(...cliqueIds);
  return result;
};


export const queryGroup = (req, res) => {
  const id = req.query.id;
  if (id === undefined || typeof id !== "string" || !nodes.has(id)) {
    res.status(400).send('Required argument "id" was missing.');
  }

  const dbNodes = getAllNodes();
  for (const node of dbNodes) {
    nodes.set(node.id, node);
  }

  const cliqueSize = req.query.cliqueSize;
  const groupSize = req.query.groupSize;
  const group = createGroup(id, cliqueSize, groupSize);
  res.status(200).send(JSON.stringify(group));
};

/*export const addFriend = (req, res) => {
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


    if (!nodes.has(nodeID) || !nodes.has(interest)) {
        res.status(400).send('Nodes does not contain id.');
        return;
    }

    const node = nodes.get(nodeID);
    node.addInterest(interest);

    res.send("Success!");
};

export const removeInterest = (req, res) => {
    const interest = req.body.interest;
    const nodeID = req.body.nodeID;
    if (interest === undefined || !isFinite(interest)) {
        res.status(400).send('Requirement argument "interest" was missing.');
        return;
    }
    if (nodeID === undefined || !isFinite(nodeID)) {
        res.status(400).send('Requirement argument "nodeID" was missing.');
        return;
    }

    if (!nodes.has(nodeID) || !nodes.has(interest)) {
        res.status(400).send('Nodes does not contain id.');
        return;
    }

    const node = nodes.get(nodeID);

    if (!node.interests.has(friendID)) {
        res.status(400).send('Interest is not in interests list');
        return;
    }
    node.removeInterest(interest);

    res.send("Success!");
};*/