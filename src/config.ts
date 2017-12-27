import { initApis, initServers } from 'xhttp-js';

export const APIs = initApis({
    user: {
        desc: 'user api',
        path: '/user',
    },
});

export const SERVERs = initServers({
    uc: {
        host: {
            prod: 'https://www.demo.com',
        },
        desc: 'user centor server',
        apis: [APIs.user],
    },
});
