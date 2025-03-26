const options =  {
    subscribe: false,
    deleteAccount: false,
    createAccount: false,
    removeAccount: false,
    addAccount: true,
    memories: [
        "hello"
    ],
    comments: [],
    createAddedaccount: false,

}

const subscribe = () => {
    options.subscribe = true;
    console.log('Subscribed to system');
}

console.log(options)