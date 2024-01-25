// +7(951) 217 12 41
export const formatNumber = (value: string) => {
    if (!value) return value;

    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneLength = phoneNumber.length;

    if (phoneLength < 3) {
        return `(${phoneNumber})`;
    } else if (phoneLength < 6) {
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    } else if (phoneLength < 8) {
        const areaCode = phoneNumber.slice(0, 3);
        const prefix = phoneNumber.slice(3, 6);
        const suffix = phoneNumber.slice(6, 8);
        return `(${areaCode}) ${prefix} ${suffix}`
    } else {
        const areaCode = phoneNumber.slice(0, 3);
        const prefix = phoneNumber.slice(3, 6);
        const suffix = phoneNumber.slice(6, 8);
        const suffix2 = phoneNumber.slice(8, 10);
        return `(${areaCode}) ${prefix} ${suffix} ${suffix2}`
    }
}