export default class Node {
    constructor(id) {
        this.id = id;
        this.friends = []; // list of numbers for friend IDs
    }

    addFriend(friend) {
        this.friends.push(friend);
    }

    removeFriend(friend) {
        const index = this.friends.indexOf(friend);
        this.friends.splice(index, 1);
    }

    addInterest(interest) {
    }

    removeInterest(interest) {
    }

    setName(name) {
    }
}