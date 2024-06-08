const nodes = new Map();

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
        res.status(400).send('Nodes does not contain id.');
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
        res.status(400).send('Nodes does not contain id.');
        return;
    }
    
    const node = nodes.get(nodeID);

    if (!node.friends.has(friendID)) {
        res.status(400).send('Friend is not in friends list');
        return;
    }

    node.removeFriend(friendID);
    res.send("Success!");
}

export const addInterest = (req, res) => {
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
};

