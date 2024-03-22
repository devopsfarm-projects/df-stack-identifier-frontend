import Framework from "../model/framework.model.js";

const detectFrameworks = async (repofileNames) => {
    try {
        // Query the MongoDB collection to find documents that match the provided file names
        const frameworks = await Framework.find({ fileNames: { $in : repofileNames}});
        // console.log("Framework expected" , frameworks);

        // Extract the framework names from the documents
        const frameworkInfo  = frameworks.map(framework => ({name : framework.name , language : framework.language , buildtool : framework.buildtool}));
        // const frameworkName = frameworks.map(framework => framework.name)
        // console.log("frameworkNames in analyze file" , frameworkInfo );

        // Return the detected frameworks
        return frameworkInfo ;
    
    } catch (error) {
        console.error("Error occurred while detecting frameworks:", error);
        throw error;
    }
}



export default detectFrameworks