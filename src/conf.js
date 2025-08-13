const conf = {
      appwriteEndpoint: import.meta.env.VITE_APPWRITE_ENDPOINT , 
      appwriteProjectId: import.meta.env.VITE_APPWRITE_PROJECT_ID ,
      appwriteCollectionId: import.meta.env.VITE_APPWRITE_COLLECTION_ID,
      appwriteBucketId: import.meta.env.VITE_APPWRITE_BUCKET_ID ,
      appwriteDatabaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID ,

}
export default conf;