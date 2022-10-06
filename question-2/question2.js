const resolvedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = { "message": "delayed success!" }
        resolve(success);
    }, 500);
});

const rejectedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const error = new Error("{ error: delayed exception! }");
        reject(error);
    }, 500);
});

resolvedPromise.then(message => {
    console.log(message);
});

rejectedPromise.catch(message => {
    console.log(message.message);
})