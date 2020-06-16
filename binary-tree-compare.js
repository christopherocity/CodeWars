function compare(a, b) {
    if (a === null || b === null) {
        return a === b;
    }
    return a.val === b.val && compare(a.left, b.left) && compare(a.right, b.right);
}
