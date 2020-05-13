const processResults = (result) => {
    let hashtags;
    let sentiment;
    let summary;


    for (let i = 0; i < result.length; i++){
        if (result[i].endpoint === "hashtags") {
            hashtags = result[i].result.hashtags;
            console.log('hashtags', hashtags);
        } else if (result[i].endpoint === "sentiment") {
            sentiment = result[i].result
            console.log('sentiment', sentiment);
        } else if (result[i].endpoint = "summarize") {
            summary = result[i].result.sentences
            console.log("summary: ", summary);
        }
    }

    return { hashtags, sentiment, summary };
}

export { processResults };