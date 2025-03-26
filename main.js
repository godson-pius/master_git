const options =  {
    subscribe: false,
    deleteAccount: false,
    createAccount: false,
    removeAccount: false,
    addAccount: true,
    memories: [],
    comments: [],
    createAddedaccount: false,
}

const subscribe = () => {
    options.subscribe = true;
    console.log('Subscribed to system');
}

console.log(options)