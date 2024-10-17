import conf from "../conf/conf";

import { Client, ID , Databases , Storage ,Query } from "appwrite";

export class Services{

    client = new Client();
    databases;
    storage;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client)
        this.storage =new Storage(this.client)
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        //slug in above line is How uses service

        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {title,content,featuredImage,status,userId}
            )
            
            
        } catch (error) {
            console.log("error in appwrite createpost :: error",error)
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {title,content,featuredImage,status}
            )
        } catch (error) {
            console.log("error in appwrite service in updating the document :: " , error)
        }
    }

    async deletePost(slug){

        try {
             await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            
            )
            return true;
        } catch (error) {
            console.log("Error in app write delete",error)
            return false;
        }

    }


    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                
            )
        } catch (error) {
            console.log("Eror i  appWrite getpost ",error)
        }
    }

    async getPosts(queries = [ Query.equal("status", "active") ]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Eror i  appWrite getposts ",error)
        }
    }

    async uploadFile(file){
        try {
            return await  this.storage.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,

            )
        } catch (error) {
            console.log("App write Servicde Error file Upload", error)
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.storage.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Error in Deleting File AppWirte Service", error)
            return false
        }
    }


    getFilePreview(fileId){
        return this.storage.getFilePreview(
            conf.appwriteBucketId,
            fileId,
        )
    }
}

const service = new Services()

export default service