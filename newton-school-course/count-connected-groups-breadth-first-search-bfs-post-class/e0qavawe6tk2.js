#include <bits/stdc++.h>
using namespace std;

void dfs(int node, const vector<vector<int>>& adj, vector<bool>& visited) {
    visited[node] = true;
    for (int neighbor : adj[node]) {
        if (!visited[neighbor]) {
            dfs(neighbor, adj, visited);
        }
    }
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int V, E;
    if (!(cin >> V >> E)) return 0;

    vector<vector<int>> adj(V);
    for (int i = 0; i < E; ++i) {
        int u, v;
        cin >> u >> v;
        adj[u].push_back(v);
        adj[v].push_back(u);
    }

    vector<bool> visited(V, false);
    int connectedComponents = 0;

    for (int i = 0; i < V; ++i) {
        if (!visited[i]) {
            dfs(i, adj, visited);
            connectedComponents++;
        }
    }

    cout << connectedComponents << "\n";

    return 0;
}