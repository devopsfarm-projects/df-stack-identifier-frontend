import Framework from "../model/framework.model.js";

// Detecting Framework Name , Language , Buildtool
const detectFrameworks = async (repofileNames) => {
    try {
        // Query the MongoDB collection to find documents that match the provided file names
        const frameworks = await Framework.find({ fileNames: { $in : repofileNames}});
        // console.log("Framework expected" , frameworks);

        // Extract the framework names from the documents
        const frameworkInfo  = frameworks.map(framework => ({name : framework.name , language : framework.language , buildtool : framework.buildtool}));


        let FrameNames = [];
        let languages = [];
        let buildTools = [];

        frameworkInfo.forEach(file => {
            FrameNames.push(file.name);
            languages.push(file.language);
            buildTools.push(file.buildtool[0]);
        })

        // Get unique language
        languages = Array.from(new Set(languages));
        
        // Create Single Object containing all the information 
        const combinedResult = {
            name : FrameNames,
            language : languages,
            buildTool : buildTools
        }
        return combinedResult ;
    
    } catch (error) {
        console.error("Error occurred while detecting frameworks:", error);
        throw error;
    }
}

// Detecting Contrize or not On the basis of Docker File

const checkContrization = async (repofileNames) => {
    const checkDockerFile = repofileNames.some(repoFileName => repoFileName.includes("Dockerfile"))
    if(checkDockerFile){
        console.log("DockerFile is present");
        return true;
    }else {
        console.log("Docker file is not present");
        return false;
    }
}


export {
    detectFrameworks,
    checkContrization
}