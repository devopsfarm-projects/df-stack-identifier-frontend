import Framework from "../model/framework.model.js";

const frameworksData = [
    {
        name: "Node.js",
        fileNames: ["app.js", "server.js", "index.js" , "package.json"]
    },
    {
        name: "React.js",
        fileNames: ["App.jsx", "Component.jsx"]
    }
];


const inserFrameworks = async (frameworksData) => {
    try {
        for (const framework of frameworksData) {
            await Framework.findOneAndUpdate(
                { name: framework.name }, // Find existing document by name
                { $set: { fileNames: framework.fileNames } }, // Update fileNames field
                { upsert: true, new: true } // Insert if not exists, return updated document
            );
        }
        console.log("Documents inserted/updated successfully.");
    } catch (error) {
        console.error("Error occurred while inserting/updating documents:", error);
        throw error;
    }
}


export  {inserFrameworks , frameworksData};