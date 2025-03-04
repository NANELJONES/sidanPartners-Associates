import { graphql } from "graphql"
import {request, gql } from  "graphql-request"

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT_CMS

// getProjects
export const getProjects = async ()=>{
    
    const query =  gql `

 query MyQuery {
  projectsConnection {
    edges {
      node {
        projectExcerpt
          projectDetails {
          raw
        }
        projectField
        projectLocation
        projectName
        projectStatus
        slug
        target
        endDate
        startDate
        projectImages {
          url
        }
      }
    }
  }
}   
    `

try{
    const response = await request(graphqlAPI, query)

    
    return   response?.projectsConnection?.edges
   
    
}catch (error){
    console.log("There was an error", error)
    return ["null"]
}



}



// getSingleProjects
export const getSingleProject = async (slug) => {
  const query = gql`
    query GetProjectBySlug($slug: String!) {
      projectsConnection(where: { slug: $slug }) {
        edges {
           node {
        projectExcerpt
           projectDetails {
          raw
        }
        projectField
        projectLocation
        projectName
        projectStatus
        slug
        target
        endDate
        startDate
        projectImages {
          url
        }
      }
        }
      }
    }
  `;

  try {
    const response = await request(graphqlAPI, query, { slug });
    return response?.projectsConnection?.edges[0]?.node;
  } catch (error) {
    console.error('There was an error fetching the project:', error);
    return null;
  }
};


// getGallery
export const getGallery = async (first = 10, after = null) => {
  const query = gql`
    query MyQuery($first: Int, $after: String) {
      galleriesConnection(first: $first, after: $after) {
        edges {
          node {
            title
            imageContent {
              url
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  `;

  try {
    const response = await request(graphqlAPI, query, { first, after });
    console.log("Fetched images:", response);
    return response.galleriesConnection;
  } catch (error) {
    console.error("Error fetching gallery images:", error);
    return { edges: [], pageInfo: { hasNextPage: false } };
  }
};



// getServices
export const getServices = async ()=>{
    
  const query =  gql `

query MyQuery {
  servicesConnection {
    edges {
      node {
        serviceDetail
        serviceIcon {
          url
        }
        serviceName
        serviceImage {
          url
        }
      }
    }
  }
}   
  `

try{
  const response = await request(graphqlAPI, query)

  
  return   response?.servicesConnection ?.edges
 
  
}catch (error){
  console.log("There was an error", error)
  return ["null"]
}



}



// get Team
export const getTeam = async ()=>{
    
  const query =  gql `

query MyQuery {
  teamsConnection {
    edges {
      node {
        employeeName
        employeePosition
        employeeImage {
          url
        }
      }
    }
  }
}
  `

try{
  const response = await request(graphqlAPI, query)

  
  return   response?.teamsConnection?.edges
 
  
}catch (error){
  console.log("There was an error", error)
  return ["null"]
}



}


// get Testimonials
export const getTestimonials  = async ()=>{
    
  const query =  gql `

query MyQuery {
  testimonialsConnection {
    edges {
      node {
        personName
        personPosition
        testimony
        personImage {
          url
        }
      }
    }
  }
}
  `

try{
  const response = await request(graphqlAPI, query)

  
  return   response?.testimonialsConnection?.edges
 
  
}catch (error){
  console.log("There was an error", error)
  return ["null"]
}



}
