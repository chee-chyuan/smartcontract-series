export function convertBytes32ToAddress(val: string): string {
    let rawAddress = val.substr(val.length - 40);

    return `0x${rawAddress}`;
}