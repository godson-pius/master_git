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

const deleteAccount = () => {
    const conf = confirm('Are you sure you want to delete account?');
    conf && (options.deleteAccount = true)
    console.log('Account deleted');
}

const removeAccount = () => {
    const conf = confirm('Are you sure you want to remove account?');
    conf && (options.removeAccount = true)
    console.log('Account removed');
}


console.log(options)