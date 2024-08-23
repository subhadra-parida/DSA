function mergeIntervals(intervals) {
    if (intervals.length === 0) return [];

    // Sort intervals by the start time
    intervals.sort((a, b) => a[0] - b[0]);

    let merged = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        let current = intervals[i];
        let last = merged[merged.length - 1];

        if (current[0] <= last[1]) {
            // Overlapping intervals, merge them
            last[1] = Math.max(last[1], current[1]);
        } else {
            // No overlap, push the interval
            merged.push(current);
        }
    }

    return merged;
}

// Example usage
const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
console.log(mergeIntervals(intervals));
// Output: [[1, 6], [8, 10], [15, 18]]
