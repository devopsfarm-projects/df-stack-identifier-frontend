import Framework from "../model/framework.model.js";

const detectFrameworks = async (repofileNames) => {
    try {
        // Query the MongoDB collection to find documents that match the provided file names
        // const frameworks = await Framework.find({ fileNames: { $in : fileNames}});
        // console.log("Framework expected" , frameworks);

        // Extract the framework names from the documents
        // const frameworkInfo  = frameworks.map(framework => ({name : framework.name , language : framework.language , buildtool : framework.buildtool}));
        // const frameworkName = frameworks.map(framework => framework.name)
        // console.log("frameworkNames in analyze file" , frameworkInfo );

        // Return the detected frameworks
        // return frameworkInfo ;

        //
        // const frameworks = await Framework.find();
        const frontendFrameworks = [
            { name: "React", pattern: /^.*\.(jsx?|tsx?)$/i },
            { name: "Angular", pattern: /^.*\.(ts|html)$/i },
            { name: "Vue", pattern: /^.*\.(vue)$/i },
            // Add more specific patterns as needed
        ];
        const backendFrameworks = [
            { name: "Django", pattern: /\/urls\.py$/i },
            { name: "Ruby on Rails", pattern: /\/config\/routes\.rb$/i },
            { name: "Laravel", pattern: /\/routes\/web\.php$/i },
            { name: "Flask", pattern: /\/app\.py$/i },
            // Add more specific patterns as needed
        ];
            
        const detectFramework = (repofileNames, frontendPatterns, backendPatterns) => {
            for (const { name, pattern } of frontendPatterns) {
                if (repofileNames.some(file => pattern.test(file))) {
                    return { type: "Frontend", framework: name };
                }
            }
    
            for (const { name, pattern } of backendPatterns) {
                if (repofileNames.some(file => pattern.test(file))) {
                    return { type: "Backend", framework: name };
                }
            }
    
            return { type: "Unknown", framework: "Unknown" }; // If no pattern matches
        };
    
        // Call the detection function and return the result
        return detectFramework(repofileNames, frontendFrameworks, backendFrameworks);

    } catch (error) {
        console.error("Error occurred while detecting frameworks:", error);
        throw error;
    }
}



export default detectFrameworks