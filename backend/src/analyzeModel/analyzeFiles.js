import Framework from "../model/framework.model.js";

const detectFrameworks = async (fileNames) => {
    try {
        // Query the MongoDB collection to find documents that match the provided file names
        const frameworks = await Framework.find({ fileNames: { $in: fileNames } });

        // Extract the framework names from the documents
        const frameworkNames = frameworks.map(framework => framework.name);
        console.log("frameworkNames in analyze file" , frameworkNames);

        // Return the detected frameworks
        return frameworkNames;
    } catch (error) {
        console.error("Error occurred while detecting frameworks:", error);
        throw error;
    }
}

export default detectFrameworks