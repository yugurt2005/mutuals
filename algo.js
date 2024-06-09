
function makeClique(nodes, node, size) {
    const length = node.friends.length;

    const result = [];
    for (let i = 0; i < size; i++) {
        const index = Math.floor(Math.random() * length);

        if (result.includes(index)) {
            i--;
        }
        else {
            for (i of result) {
                if (nodes[]) {

                }
            }
            result.push(index);
        }
    }
}

function findClique(node, size) {
    
}

export default async function calcGroup() {
}