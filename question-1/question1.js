const lowerCaseWords = mixedArray => {

    try {
        const finalArray =
            mixedArray
                .filter(element => typeof element === "string")
                .map(element => element.toLowerCase());

        return Promise.resolve(finalArray);
    } catch (error) {
        return Promise.reject(error);
    }
}

lowerCaseWords([132, false, undefined, "COMP3123", "HelLo WOrlD"])
    .then(returnedArray => { console.log(returnedArray); })
    .catch(error => { console.log(error) });