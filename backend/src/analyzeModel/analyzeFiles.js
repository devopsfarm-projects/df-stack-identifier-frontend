export async function detectFrameworks(fileNames) {
    const frameworks = [];

    // Check for Node.js
    if (fileNames.includes('package.json')) {
        const hasSeverFile = fileNames.includes('server.js');
        const hasAppfile = fileNames.includes('app.js');
        const hasindexFile = fileNames.includes('index.js');
        if(hasAppfile || hasSeverFile || hasindexFile ){
            frameworks.push('Node.js');
        }
    }

    // Check for React.js
    const hasJsxFiles = fileNames.some(fileName => fileName.endsWith('.jsx'));
    if (hasJsxFiles) {
        frameworks.push('React.js');
    }

    // Check for Vue.js
    const hasVueFiles = fileNames.some(fileName => fileName.endsWith('.vue'));
    if (hasVueFiles) {
        frameworks.push('Vue.js');
    }

    // Check for Ruby on Rails
    if(fileNames.includes("Gemfile.lock")){
        const hasRbFile = fileNames.some(fileName => fileName.endsWith('.rb'))
        if(hasRbFile){
            frameworks.push("Ruby on Rails")
        }
    }

    // Check for Django frameWork 
    if(fileNames.includes("manage.py") || fileNames.includes("setting.py")){
        frameworks.push("Django")
    }

    // Check for Laravel FrameWork 
    if(fileNames.includes("artisan") || fileNames.includes("composer.json")){
        frameworks.push("Laravel")
    }

    // Check for Flask Framework 
    const hasPyFiles = fileNames.some(fileName => fileName.endsWith('.py'))
    if(hasPyFiles){
        if(fileNames.includes("requirements.txt") || fileNames.includes("config.py") || fileNames.includes("app.py")){
            frameworks.push("Flask")
        }
    }

    // Check for Spring Boot
    if(fileNames.includes("application.properties") || fileNames.includes("pom.xml")){
        frameworks.push("Spring Boot")
    }

    // ASP .NETCORE 
    const hasCSharp = fileNames.some(fileName => fileName.endsWith('.csproj'))
    const hasCSharp_ = fileNames.some(fileNames => fileNames.endsWith(".cs"))
    if(hasCSharp || hasCSharp_){
        frameworks.push("C#")
    }

    // For Go RunTime 
    const hasGo = fileNames.some(fileName => fileName.endsWith(".go"))
    if(hasGo || fileNames.includes("main.go") || fileNames.includes("go.mod")){
        frameworks.push("Go")
    }

    return frameworks;
}




