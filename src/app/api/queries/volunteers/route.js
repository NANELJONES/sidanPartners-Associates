import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT_CMS ;

export async function POST(req) {
  try {
    const body = await req.json();
    console.log('Received body:', body); // Log received body

    const {  name, email,  phoneNumber, country, location,  volunteeringType } = body;


    if (!name || !email || !phoneNumber || !country || !location || !volunteeringType) {
        return Response.json({ message: 'Missing required fields. Please pass in all data necessary' }, { status: 400 });
      }

    const graphQLClient = new GraphQLClient(graphqlAPI, {
      headers: {
        authorization: `Bearer ${process.env.NEXT_PUBLIC_DEFAULT_TOKEN_CMS}`,
      },
    });


    const query = gql`
   mutation CreateVolunteer($name: String!,    $email: String!,    $phone: String!,    $country: String!,    $location: String!,   $volType: String!) {
  createVolunteer(data: {
    volunteerName: $name,
    volunteerEmail: $email,
    volunteerNumber: $phone,
    volunteerCountry: $country,
    volunteerLocation: $location,
    volunteerType: $volType
  }) {
    id
  }
}
  `;
  
  ;
  

    const result = await graphQLClient.request(query, {
      name: name,
      email: email,
      phone: phoneNumber,
      country: country,
      location:location,
      volType: volunteeringType

      
      });

    return Response.json(result, { status: 200 });
  } catch (error) {
    console.error('Error submitting Volunteer:', error);
    return Response.json({ message: 'Internal Server Error', error: error.message }, { status: 500 });
  }
}
