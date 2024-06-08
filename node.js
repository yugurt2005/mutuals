
class Node {
    constructor(id) {
        this.id = id;
    }

    addFriend(friend) {
    }

    removeFriend(friend) {
    }

    addInterest(interest) {
    }

    removeInterest(interest) {
    }

    setName(name) {
    }
}

const nodeConverter = {
    toFirestore: function(node) {
        return {
            id: node.id
        }
    },
    fromFirestore: function(snapshot, options) {
        const data = snapshot.data(options);
        return new Node(data.id);
    }
}