export default function isEqual(listA, listB) {
    const as = new Set(listA);
    const bs = new Set(listB);
    if (as.size !== bs.size) return false;
    for (var a of as) if (!bs.has(a)) return false;
    return true;
}
