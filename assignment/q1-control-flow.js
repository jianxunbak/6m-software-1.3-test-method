/*
    Task
    - Implement a switch statement to check against `env` environmental variable.
    - If `env` is "DEV", no change to `databaseCredential`.
    - If `env` is "STAGE", modify `databaseCredential` to "stageuser:password".
    - If `env` is "PROD", modify `databaseCredential` to "produser:password"
    
*/

const env = "DEV"; // Toggle between these possible values "DEV" | "STAGE" | "PROD"
let databaseCredential = "devuser:password";

const switchStatement =  (env) => {
    if (env == "STAGE") {
        databaseCredential =  "stageuser:password";
    }
    else if (env == "PROD") {
        databaseCredential =  "produser:password";
    }
};

switchStatement(env);

console.log(`Database credential for environment ${env} is ${databaseCredential}`);
