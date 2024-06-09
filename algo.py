import numpy as np


def create_group(graph, clique, total):
    group = []
    for i in clique:
        group.extend(graph.adj(i))

    np.random.shuffle(group)

    result = []
    for i in group:
        count = 0
        for x in clique:
            if graph.isNeighbor(i, x):
                count += 1
        
        if count < len(clique):
            result.append(i)

            if len(result) == total:
                break
    
    return result

    

def find_clique(graph, source, size):
    for _ in range(20):
        indices = np.random.choice(len(graph.adj(source)), size=size, replace=False)

        flag = True
        for i in indices:
            for j in indices:
                if flag and i > j and not graph.isNeighbor(i, j):
                    flag = False

        if flag:
            return indices

    return None
