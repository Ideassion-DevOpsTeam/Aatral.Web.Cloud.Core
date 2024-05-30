import { gql } from "@apollo/client";

export const getMembers = gql`
  query Members($pageCount: Int, $pageSize: Int) {
    members(pagination: { page: $pageCount, pageSize: $pageSize }) {
      data {
        id
        attributes {
          Name
          Designation
          About
          Type
        }
      }
    }
  }
`;

export const getMembersImages = gql`
  query Members($currentPage: Int, $pageSize: Int) {
    members(pagination: { page: $currentPage, pageSize: $pageSize }) {
      data {
        id
        attributes {
          Image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const getTestimonials = gql`
  query Testimonials {
    testimonials(filters: { Content: { ne: null } }) {
      data {
        id
        attributes {
          member {
            data {
              attributes {
                Name
                Designation
                About
                Image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                companies {
                  data {
                    attributes {
                      Name
                      Description
                      Website
                    }
                  }
                }
              }
            }
          }
          Content
        }
      }
    }
  }
`;

export const createContact = gql`
  mutation CreateContact(
    $email: String
    $firstname: String
    $lastname: String
    $query: String
    $designation: String
  ) {
    createContact(
      data: {
        FirstName: $firstname
        LastName: $lastname
        Email: $email
        OtherDesignation: $designation
        Query: $query
      }
    ) {
      data {
        id
        attributes {
          FirstName
          LastName
          Email
          OtherDesignation
          Query
        }
      }
    }
  }
`;