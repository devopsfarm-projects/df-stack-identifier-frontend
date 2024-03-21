import Framework from "../model/framework.model.js";


const frameworksData = [
    {
        name: "Node.js",
        fileNames: ["app.js", "server.js", "index.js", "package.json"],
        language : "Javascript",
        buildtool : ["npm"]
    },
    {
        name: "React.js",
        fileNames: ["App.jsx", "Component.jsx" , "index.jsx"],
        language : "Javascript",
        buildtool : ["CRA (Pre-Configured)"]
    },
    {
        name : "React.js - Vite",
        fileNames: ["vite.config.js"],
        language : "Javascript",
        buildtool : ["Vite"]

    },
    {
        name: "Vue.js",
        fileNames: ["App.vue", "Component.vue", "main.js"],
        language : "Javascript",
        buildtool : ["Angular CLI"]
    },
    {
        name: "Django (Python)",
        fileNames: ["manage.py", "settings.py", "urls.py"],
        language : "Python",
        buildtool : ["pip"]
    },
    {
        name: "Ruby on Rails",
        fileNames: ["Gemfile", "app.rb", "config.ru"],
        language : "Ruby"
    },
    {
        name: "Laravel",
        fileNames: ["artisan", "composer.json", "web.php", "api.php"],
        language : "php",
        buildtool : ["composer"]
    },
    {
        name: ".NET (ASP.NET Core)",
        fileNames: ["Program.cs", "Startup.cs", "*.csproj", "appsettings.json"],
        language : "c#",
        buildtool : ["MSBuild", ".NET CLI"]
    },
    {
        name: "Flask",
        fileNames: ["app.py", "requirements.txt", "config.py", "models.py"],
        language : "Python"
    },
    {
        name: "Go",
        fileNames: ["main.go", "go.mod"],
        language : "Go"
    }
    
];


const inserFrameworks = async (frameworksData) => {
    try {
        for (const framework of frameworksData) {
            await Framework.findOneAndUpdate(
                    { name: framework.name  }, // Find existing document by name
                    { 
                        $set: { 
                            fileNames: framework.fileNames,
                            language: framework.language,
                            buildtool: framework.buildtool,
                            // Add any other fields you want to update
                        }
                    },
                  // Update fileNames field , ADD new Field
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