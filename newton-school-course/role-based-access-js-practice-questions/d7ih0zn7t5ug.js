function createAccess(role) {
    return function(onAllowed, onDenied) {
        if (role === "admin") {
            onAllowed();
        } else {
            onDenied();
        }
    };
}