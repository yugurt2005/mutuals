export default class Node {
    constructor(id) {
        this.id = id;
        this.friends = []; // list of numbers for friend IDs
    }

    addFriend(friend) {
        this.friends.push(friend);
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