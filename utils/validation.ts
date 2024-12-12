export const minMax = (i, s) => {
    if (i && s) {
        i = Number(i);
        s[0] = Number(s[0]);
        s[1] = Number(s[1]);

        if (((s[0] || s[0] === 0) && s[1]) && (i < s[0] || i > s[1])) {
            return `Prosimy o wprowadzenie liczby z przedziału od ${Number(s[0])} do ${Number(s[1])}`;
        }
        if ((s[0] || s[0] === 0) && i < s[0]) {
            return `Prosimy o wprowadzenie liczby większej lub równej od ${Number(s[0]) - 1}`;
        }
        if (s[1] && i > s[1]) {
            return `Prosimy o wprowadzenie liczby mniejszej lub równej od ${Number(s[1]) + 1}`;
        }
    }
    return '';
}