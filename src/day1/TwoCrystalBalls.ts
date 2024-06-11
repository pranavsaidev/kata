export default function two_crystal_balls(breaks: boolean[]): number {
    const interval = Math.floor(Math.sqrt(breaks.length));

    let curr = interval;
    for (; curr < breaks.length; curr++) {
        if (breaks[curr]) {
            break;
        }
    }

    curr -= interval;
    for (; curr < breaks.length; curr++) {
        if (breaks[curr]) {
            return curr;
        }
    }

    return -1;
}