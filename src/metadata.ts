/* eslint-disable */
export default async () => {
    const t = {};
    return { "@nestjs/swagger": { "models": [[import("./dto's/create-book.dto"), { "CreateBookDto": { title: { required: true, type: () => String }, author: { required: true, type: () => String }, publishedYear: { required: true, type: () => Number } } }], [import("./dto's/update-book.dto"), { "UpdateBookDto": {} }]], "controllers": [[import("./app.controller"), { "AppController": { "getHello": { type: String }, "findAll": { type: [Object] }, "create": {}, "update": {}, "remove": { type: [Object] } } }]] } };
};