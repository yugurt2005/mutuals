const nodes = new Map();

export const addFriend = (req, res) => {
    const friendID = req.body.friendID;
    const nodeID = req.body.nodeID;
    if (friendID === undefined || !isFinite(friendID)) {
        res.status(400).send('Requirement argument "friendID" was missing.');
    }
    if (nodeID === undefined || !isFinite(nodeID)) {
        res.status(400).send('Requirement argument "nodeID" was missing.');
    }

    if (!nodes.has(nodeID) || !nodes.has(friendID)) {
        res.status(400).send('Nodes does not contain id.');
    }

    const node = nodes.get(nodeID);
    node.addFriend(friendID);

    res.send("Success!");
};