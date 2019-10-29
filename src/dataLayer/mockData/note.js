const commonNamePart = 'note';
const list = [];

for (let i = 0; i < 5; i++) {
    list.push({ name: `${commonNamePart} ${i}`, content: `${commonNamePart} ${i} content` });
}

export default {
    list
}
