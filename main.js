const options =  {
    subscribe: false,
    deleteAccount: false,
    createAccount: false,
    removeAccount: false,
    addAccount: true,
    memories: [
        "hello",
        "Godson I am tired"
    ],
    comments: [],
    createAddedaccount: false,

}

const subscribe = () => {
    options.subscribe = true;
    console.log('Subscribed to system');
}

const deleteAccount = () => {
    const conf = confirm('Are you sure you want to delete account?');
    conf && (options.deleteAccount = true)
    console.log('Account deleted');
}

console.log(options)