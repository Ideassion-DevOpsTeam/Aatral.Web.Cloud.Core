import { gql } from "@apollo/client";

export const getMembers = gql`
  query Members($pageCount: Int, $pageSize: Int) {
    members(
      pagination: { page: $pageCount, pageSize: $pageSize }
      filters: { Type: { eqi: "Member" } }
    ) {
      data {
        id
        attributes {
          Name
          Designation
          About
          Type
          Image {
            data {
              attributes {
                url
                mime
                name
              }
              id
            }
          }
          companies {
            data {
              id
              attributes {
                Name
                Type
                Website
                Logo {
                  data {
                    id
                    attributes {
                      mime
                      url
                      name
                      alternativeText
                      previewUrl
                    }
                  }
                }
                Description
              }
            }
          }
          Social {
            id
            Name
            Link
          }
        }
      }
      meta {
        pagination {
          total
          pageCount
          pageSize
          page
        }
      }
    }
  }
`;

export const getPartners = gql`
  query Companies {
    companies {
      data {
        id
        attributes {
          Name
          Website
          Type
          Logo {
            data {
              id
              attributes {
                name
                alternativeText
                mime
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const getMembersImages = gql`
  query Members($currentPage: Int, $pageSize: Int) {
    members(
      pagination: { page: $currentPage, pageSize: $pageSize }
      filters: { Type: { eqi: "Member" } }
    ) {
      data {
        id
        attributes {
          Type
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
        Designation: $designation
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

export const getCommitteeMembers = gql`
  query Members {
    members(
      filters: { Type: { in: ["Executive Committee", "Steering Committee"] } }
    ) {
      data {
        id
        attributes {
          Name
          Type
          Designation
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
              }
            }
          }
        }
      }
    }
  }
`;
