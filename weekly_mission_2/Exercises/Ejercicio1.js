// En este ejercicio trataremos de de modelar información con objetos simples de JavaScript
//1. Modelando informacion de GitHub. Para este ejercicio modelaremos informacion de GitHub, la de los Repositorios, Issues y PullRequest
//1.1 Repositories. Para este modelaremos la informacion de basica de los Repositorios, esto es: 
/*
+name
+author
+language
+numberOfCommits
+stars
+forks
+issues_open
+issues_close
+getTotalIssues()
+getGeneralInfo() 

La informacion del repositorio que se tomará como ejemplo será MissionNodeJS https://github.com/LaunchX-InnovaccionVirtual/MissionNodeJS
*/

const Repositorio = {
    name : "MissionNodeJS",
    author : "CarloGilmar", 
    language : "JavaScript", 
    numberOfCommits : 197,
    stars : 579,
    forks : "0",
    issues_open : 12, 
    issues_closed : 1, 
    get TotalIssues (){
        return this.issues_open + this.issues_closed
    },
    get GeneralInfo (){
        return `Este repositorio, ${this.name}, fue creado por ${this.author}`
    }
}

console.log(`Nombre del repositorio: ${Repositorio.name}, autor: ${Repositorio.author}`)// Devuelve el objeto Repositorio
console.log(`Issues Totales: ${Repositorio.TotalIssues}`)// Devuelve 13
console.log(Repositorio.GeneralInfo)// Devuelve la informacion general

//1.2 Issues. Para modela esto, la información básica es: 
/* 
+title
+repositoryNameAssociated
+status
+numberOfComments
+labels
+author
+dateCreated
+lastUpdated
+getTitleAndAuthor()
+getGeneralInfo()
La información para modelar esta información será tomada de un issue en especial, el link es: https://github.com/LaunchX-InnovaccionVirtual/MissionNodeJS/issues/51
*/

const Issue = {
    tittle : "06 Live 3 Semana 2 [Jueves 14 de Abril]",
    repositoryNameAssociated: "MissionNodeJS", 
    status : "Open", 
    numberOfComments : 63,
    labels : ["Finalizado", "Live 3", "Semana-2"],
    author : "CarloGilmar",
    dateCreated : "14-04-2022", 
    lastUpdated : "08-05-2022", 
    get TittleAndAuthor (){
        return `${this.tittle} por ${this.author}`
    },
    get GeneralInfo (){
        return `Este issue, ${this.tittle}, fue creado por ${this.author} y pertenece al repositorio ${this.repositoryNameAssociated}`
    }
}

console.log(Issue.TittleAndAuthor)
console.log(Issue.GeneralInfo)

//1.3 Pull Request. Para modelar esta informacion emplearemos la siguiente informació básica:
/* 
PullRequest
+title
+branchName
+dateCreated
+status
+repositoryNameAssociated
+getStatus()
+getTitleAndAutor()

Para modelar esta información se tomará en cuneta el pull request del siguiente link https://github.com/LaunchX-InnovaccionVirtual/FrontEnd-Mision/pull/68
*/
const PullRequest = {
    tittle : "Typo 2 Line 116",
    repositoryNameAssociated: "FrontEnd-Mission", 
    branchName: "Master",
    status : "Closed", 
    author : "venegas55",
    dateCreated : "22-02-2022",  
    get TittleAndAuthor (){
        return `El pull request '${this.tittle}' fue creado por ${this.author} el ${this.dateCreated}`
    },
    get status1 (){
        return `El estado de este pullrequest es ${this.status}`
    }
}

console.log(PullRequest.TittleAndAuthor)
console.log(PullRequest.status1)

//Este mismo concepto de modelar la información se puede hacer con muchos tipos de información en en la web, como por ejemplo la información de un usuario en Facebook
