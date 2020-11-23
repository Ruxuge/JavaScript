const object = [
    {
        id: 'abc',
        name: 'Ala'
    },
    {
        id: 'def',
        name: 'Tomek'
    },
    {
        id: 'ghi',
        name: 'Jan'
    }
];

const titleObject = object.reduce((title, {id, name}) => {
        title[id] = {id, name };
        return title;
    }, {}
);

console.log(titleObject);