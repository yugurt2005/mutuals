export default class Node {
    constructor(id, name=undefined) {
        this.id = id;
    
        this.name = name;
    
        this.friends = [];
        this.invites = [];
        this.interests = [];
    }

    addFriend(friend) {
        this.friends.push(friend);
    }

    removeFriend(friend) {
        const index = this.friends.indexOf(friend);
        this.friends.splice(index, 1);
    }
    
    addInvite(invite) {
        this.invites.push(invite);
    }
    
    removeInvite(invite) {
        const index = this.invites.indexOf(invite);
        this.invites.splice(index, 1);
    }
    
    addInterest(interest) {
        this.interests.push(interest);
    }
    
    removeInterest(interest) {
        const index = this.interests.indexOf(interest);
        this.interests.splice(index, 1);
    }
}