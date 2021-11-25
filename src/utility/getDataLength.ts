import {Data} from "../types/api";

// function to check if the data is null and then calculate it's length
export function getDataLength(data: Data | null): number {
    if (!data) {
        return 0
    } else {
        return data.length;
    }
}