#include <bits/stdc++.h>
using namespace std;

void solve() {
    int N, M, S, E;
    cin >> N >> M >> S >> E;

    vector<vector<int>> adj(N + 1);
    for (int i = 0; i < M; i++) {
        int u, v;
        cin >> u >> v;
        adj[u].push_back(v);
        adj[v].push_back(u);
    }

    // Edge case: if start and destination are the same
    if (S == E) {
        cout << 0 << "\n";
        return;
    }

    vector<int> dist(N + 1, -1);
    queue<int> q;

    q.push(S);
    dist[S] = 0;

    while (!q.empty()) {
        int u = q.front();
        q.pop();

        if (u == E) {
            cout << dist[u] << "\n";
            return;
        }

        for (int v : adj[u]) {
            if (dist[v] == -1) {
                dist[v] = dist[u] + 1;
                q.push(v);
            }
        }
    }

    // If the destination is unreachable
    cout << -1 << "\n";
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int T;
    cin >> T;
    while (T--) {
        solve();
    }

    return 0;
}