export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0, hi = haystack.length;

    do {
        const mid = Math.floor(lo + (hi - lo) / 2);
        const midValue = haystack[mid];

        if (midValue === needle) {
            return true;
        } else if (midValue < needle) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    } while (lo < hi);

    return false;
}