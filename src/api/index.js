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
