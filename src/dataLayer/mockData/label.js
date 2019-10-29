const commonNamePart = 'label';
const list = [];

for (let i = 0; i < 5; i++) {
    list.push({
        id: `${i}`,
        name: `${commonNamePart} ${i}`
    });
}

export default {
    list
}
